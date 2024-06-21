"use client";
import { createContext, useContext, use } from "react";

interface AppContextProps {
  user: string;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = {
    user: "Vitor",
  };
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
