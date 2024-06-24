'use client'

import { CardLogin } from "@/components/Card/page";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ButtonLogin } from "@/components/button/buttonLogin";
import { useState } from "react";
import { Login } from "@/services/login";

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <div className="max-w-64 mx-auto mt-60">
      <CardLogin>
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
          <ButtonLogin key={1} textoBotão={"Entrar"} onClick={() => Login(email)} />
        </CardFooter>
      </CardLogin>
    </div>
  );
}
