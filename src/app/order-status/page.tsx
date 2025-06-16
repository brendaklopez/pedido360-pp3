'use client';

import { useState, useEffect } from 'react';

interface Pedido {
  _id: string;
  mesa: {
    numero: number;
    estado: string;
  };
  descripcion: string;
  mesero: {
    nombre: string;
    correo: string;
    rol: string;
  };
  total: number;
  estado: 'pendiente' | 'preparando' | 'en 15 min estará listo' | 'listo para servir';
  creadoEn: string;
}

export default function OrderStatusPage() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await fetch('http://localhost:3000/pedido');
        if (!response.ok) {
          throw new Error('Error al obtener los pedidos');
        }
        const data = await response.json();
        setPedidos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar los pedidos');
      } finally {
        setLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'preparando':
        return 'bg-blue-100 text-blue-800';
      case 'en 15 min estará listo':
        return 'bg-orange-100 text-orange-800';
      case 'listo para servir':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTotal = (total: number) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(total);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Estado de mi Pedido</h1>
      
      <div className="grid gap-6">
        {pedidos.map((pedido) => (
          <div 
            key={pedido._id}
            className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mesa {pedido.mesa.numero}</h2>
                <p className="text-sm text-gray-600">Mesero: {pedido.mesero.nombre}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEstadoColor(pedido.estado)}`}>
                {pedido.estado.toUpperCase()}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                {pedido.descripcion}
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-lg font-bold text-indigo-600">{formatTotal(pedido.total)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 