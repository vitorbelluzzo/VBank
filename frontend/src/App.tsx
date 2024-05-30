import React from "react";
import { Card } from "./components/ui/card";

export function App() {
  return (
      <div >
       <Card>
       <h1 >Faça o login</h1>
        <input placeholder="Seu Email" />
        <input placeholder="Senha" />
        <button >
          Entrar
        </button>
       </Card>
      </div>
      
  );
}
