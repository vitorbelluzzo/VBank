"use client";

import { Card } from "@/components/ui/card";

export function CardLogin({ children }: any) {
  return (
    <Card className=" text-center  bg-zinc-900 text-white border-none rounded">
      {children}
    </Card>
  );
}
