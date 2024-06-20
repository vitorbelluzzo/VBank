'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect } from 'react';

const Conta = () => {
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (id !== '1') {
      router.push('/conta');
    }
  }, [id, router]);

  if (id !== '1') {
    return null; // ou um componente de carregamento, enquanto redireciona
  }

  return (
    <div>
      <h1>Conta do Cliente {id}</h1>
      {/* Sua lógica para exibir a conta do cliente com id 1 */}
    </div>
  );
};

export default Conta;