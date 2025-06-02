'use client';

import { useState } from 'react';

interface Pedido {
  id: string;
  estado: 'pendiente' | 'en_proceso' | 'completado';
  items: string[];
  total: number;
}

export default function OrderStatusPage() {
  const [pedidos] = useState<Pedido[]>([
    {
      id: '1',
      estado: 'en_proceso',
      items: ['Hamburguesa Clásica', 'Agua'],
      total: 8500
    }
  ]);

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'en_proceso':
        return 'bg-blue-100 text-blue-800';
      case 'completado':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Estado de mi Pedido</h1>
      
      <div className="grid gap-6">
        {pedidos.map((pedido) => (
          <div 
            key={pedido.id}
            className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Pedido #{pedido.id}</h2>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEstadoColor(pedido.estado)}`}>
                {pedido.estado.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              {pedido.items.map((item, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  {item}
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">
                Total: ${pedido.total.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 