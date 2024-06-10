"use client";

import { api } from "@/api";

interface ApiResponse {
  email: string;
 
}

export async function Login  (email: string): Promise<void> {
  const data = await api as ApiResponse;
  if (email !== data.email) {
    alert('email inválido');
  }
  alert(`Bem vindo(a) ${email}!`);
}
