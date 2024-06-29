import { api } from "@/api";
import { AppContext } from "@/components/data-context";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Toaster, toast } from "sonner";

const useLogin = () => {
  const { setIsloggedIn } = useContext(AppContext);
  const router = useRouter();

  const login = async (email: string): Promise<void> => {
    const data: any = await api;

    if (email !== data.email) {
      setIsloggedIn(false);
      <Toaster position="top-center" />;
      toast.error("Email inválido");
    } else {
      setIsloggedIn(true);
      router.push(`/conta/${data.id}`);
    }
  };

  return { login };
};

export default useLogin;
