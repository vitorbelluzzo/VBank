"use client";
import { createContext, useContext, use } from "react";

interface AppContextProps {
  user: string;
  isLoggedIn: boolean;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = "Vitor";
  const isLoggedIn = true;
  return (
    <AppContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
