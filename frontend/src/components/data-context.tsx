"use client";
import { changeLocalStorage, getAllLocalStorages } from "@/services/storage";
import { createContext, useContext, useEffect, useState } from "react";

interface AppContextProps {
  user: string;
  isLoggedIn: boolean;
  setIsloggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsloggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storage = getAllLocalStorages();
    if (storage) {
      const { login } = JSON.parse(storage);
      setIsloggedIn(login);
    }
  }, []);

  useEffect(() => {
    changeLocalStorage({ login: isLoggedIn })
  }, [isLoggedIn])

  const user = "Vitor";
  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsloggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
