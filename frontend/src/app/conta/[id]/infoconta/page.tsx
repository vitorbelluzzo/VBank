"use client";

import { AppContext } from "@/components/data-context";
import { Button } from "@/components/ui/button";
import { changeLocalStorage, getAllLocalStorages } from "@/services/storage";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

interface UserDataProps {
  email: string;
  name: string;
}

export default function InfoConta() {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const { isLoggedIn } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      const user = getAllLocalStorages();
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserData(parsedUser);
      }
    } else {
      router.push("/");
      changeLocalStorage({
        login: false,
        email: "",
        password: "",
        name: "",
        balance: 0,
        id: "",
      });
    }
  }, [isLoggedIn, router]);

  function Userpage() {
    if (typeof window !== "undefined") {
      const data = getAllLocalStorages();
      if (data) {
        const dataParsed = JSON.parse(data);
        if (dataParsed.id) {
          router.push(`/conta/${dataParsed.id}`);
        } else {
          console.log("ID not found in local storage data");
        }
      } else {
        console.log("Failed to retrieve data from local storage");
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        onClick={Userpage}
        className="text-white gap-1 outline rounded outline-[0.5px] w-fit"
      >
        <ArrowLeft size={15} />
        pagina inicial
      </Button>
      <div className="flex flex-col">
        <span className="text-white">Nome: {userData?.name}</span>
        <span className="text-white">email: {userData?.email}</span>
      </div>
    </div>
  );
}
