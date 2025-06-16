'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PedidoPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/order-status');
  }, [router]);

  return null;
} 