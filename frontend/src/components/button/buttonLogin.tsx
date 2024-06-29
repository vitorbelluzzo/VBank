'use client'
 
import { Button as Botão } from "@/components/ui/button";

interface buttonProps {
  textoBotão: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function ButtonLogin({ textoBotão, onClick }: buttonProps) {
  return (
    <Botão  onClick={onClick} className="bg-transparent rounded border w-full  bg-blue-600 hover:bg-blue-500 border-none">
      {textoBotão}
    </Botão>
  );
}
