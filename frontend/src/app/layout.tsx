import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/header/header";
import { createContext } from "react";
import { Metadata } from "next";
import { AppContextProvider } from "@/components/data-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VBank",
  description: "Bank of the Future!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body
          className={`${inter.className} bg-zinc-950 px-4 max-w-xl mx-auto`}
        >
          <Header />
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
