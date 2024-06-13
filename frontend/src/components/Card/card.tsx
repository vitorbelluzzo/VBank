"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ButtonLogin } from "@/components/button/buttonLogin";
import { Login } from "@/services/login";
import { useEffect, useState } from "react";
import { api } from "@/api";

interface UserDataProps {
  email: string;
  password: string;
  name: string;
}

export function CardLogin() {
  const [email, setEmail] = useState("");
  const [userData, SetUserData] = useState<null | UserDataProps>()

  useEffect(() => {
    const getData = async () => {
      const data: any | UserDataProps  = await api;
      SetUserData(data);
     
    };
    getData();
  }, []);


  function handleEmail() {
    Login(email);
  }

  return (
    <Card className=" text-center  bg-zinc-900 text-white border-none rounded">
       {/* {
        userData === null || userData === undefined ? 
        <h1>Carregando...</h1> :
        <h1>Informações carregadas</h1>
       } */}
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3  ">
        <Input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email Address"
          className="bg-zinc-950 border-zinc-700 placeholder:text-zinc-600"
        />
        <Input
          type="password"
          placeholder="Senha"
          className="bg-zinc-950 border-zinc-700 placeholder:text-zinc-600"
        />
      </CardContent>
      <CardFooter className="flex justify-center">
        <ButtonLogin key={1} textoBotão={"Entrar"} onClick={handleEmail} />
      </CardFooter>
    </Card>
  );
}
