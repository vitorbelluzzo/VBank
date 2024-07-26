import { api } from "@/api";
import { AppContext } from "@/components/data-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Toaster, toast } from "sonner";
import { changeLocalStorage } from "./storage";

const useLogin = () => {
  const { setIsloggedIn } = useContext(AppContext);
  const router = useRouter();

  const login = async (email: string, password: string): Promise<void> => {
    const data: any = await api;

    if (email !== data.email || password !== data.password) {
      setIsloggedIn(false);
      <Toaster position="top-center" />;
      toast.error("Email ou senha inválido");
    } else {
      setIsloggedIn(true);
      changeLocalStorage({
        login: true,
      });
      router.push(`/conta/${data.id}`);
    }
  };

  return { login };
};

export default useLogin;
