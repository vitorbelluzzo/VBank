'use client'
 
import { Button as Botão } from "@/components/ui/button";

interface buttonProps {
  buttonText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export function ButtonLogin({ buttonText, onClick }: buttonProps) {
  return (
    <Botão  onClick={onClick} className="bg-transparent rounded border w-full  bg-blue-600 hover:bg-blue-500 border-none">
      {buttonText}
    </Botão>
  );
}
