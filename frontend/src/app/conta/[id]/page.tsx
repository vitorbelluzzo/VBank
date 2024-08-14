"use client";
import { api } from "@/api";
import { AppContext } from "@/components/data-context";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { changeLocalStorage, getAllLocalStorages } from "@/services/storage";
import { LogOut, User } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface UserDataProps {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

interface Vbank extends UserDataProps {
  login: boolean;
}

export default function Conta() {
  const [userData, SetUserData] = useState<null | UserDataProps>(null);
  const { isLoggedIn, setIsloggedIn } = useContext(AppContext);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (!isLoggedIn && typeof window !== "undefined") {
      router.push("/");
      changeLocalStorage({
        login: false,
      } as Vbank);
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    const getData = async () => {
      const data = (await api) as UserDataProps;
      SetUserData(data);
      if (isLoggedIn && typeof window !== "undefined") {
        changeLocalStorage({ ...data, login: true });
      }
    };
    getData();
  }, [isLoggedIn]);

  const currency = userData?.balance.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  if (userData && userData.id !== id) {
    router.push("/");
  }

  function Logout() {
    setIsloggedIn(false);
    if (typeof window !== "undefined") {
      changeLocalStorage({
        login: false,
      } as Vbank);
      router.push("/");
    }
  }

  function UserInfo() {
    if (typeof window !== "undefined") {
      const data = getAllLocalStorages();
      if (data) {
        const dataParsed = JSON.parse(data) as Vbank;
        if (dataParsed.id) {
          router.push(`/conta/${dataParsed.id}/infoconta`);
        } else {
          console.log("ID not found in local storage data");
        }
      } else {
        console.log("Failed to retrieve data from local storage");
      }
    }
  }

  return (
    <div className="mx-auto">
      <div className="flex flex-1 justify-end gap-3">
        <Button
          onClick={UserInfo}
          className="text-white gap-1 outline rounded outline-[0.5px]"
        >
          <User size={15} />
          Usuário
        </Button>
        <Button
          onClick={Logout}
          className="text-white gap-1 outline rounded outline-[0.5px]"
        >
          <LogOut size={15} />
          Sair
        </Button>
      </div>
      {!userData ? (
        <Skeleton className="h-8 w-28 bg-zinc-900/90 rounded" />
      ) : (
        <h1 className="text-zinc-50 font-semibold text-2xl">
          Olá, {userData?.name}
        </h1>
      )}
      {!userData ? (
        <Skeleton className="bg-zinc-900/90 h-24 p-6 rounded mt-3"></Skeleton>
      ) : (
        <div className="bg-zinc-900 p-6 rounded mt-3">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-light text-zinc-500">
              Total Balance
            </span>
            <span className="text-zinc-50 text-xl">{currency}</span>
          </div>
        </div>
      )}
    </div>
  );
}
