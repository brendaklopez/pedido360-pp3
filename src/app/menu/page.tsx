'use client';

interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}

export default function MenuPage() {
  const menuItems: MenuItem[] = [
    {
      id: '1',
      nombre: 'Hamburguesa Clásica',
      descripcion: 'Carne de res, lechuga, tomate, cebolla y salsa especial',
      precio: 8500
    },
    {
      id: '2',
      nombre: 'Pizza napolitana',
      descripcion: 'Salsa de tomate, mozzarella, albahaca fresca, tomate',
      precio: 14000
    },
    {
      id: '3',
      nombre: 'Ensalada César',
      descripcion: 'Lechuga, pollo a la parrilla, crutones, parmesano',
      precio: 8500
    },
    {
      id: '4',
      nombre: 'Tiramisú',
      descripcion: 'Postre italiano con café y mascarpone',
      precio: 8500
    },
    {
      id: '5',
      nombre: 'Limonada Natural',
      descripcion: 'Limonada fresca con menta',
      precio: 4000
    },
    {
      id: '6',
      nombre: 'Flan',
      descripcion: 'Flan de leche',
      precio: 4000
    },
    {
      id: '7',
      nombre: 'Gaseosa',
      descripcion: 'Linea Coca Cola',
      precio: 2500
    },
    {
      id: '8',
      nombre: 'Agua',
      descripcion: 'Agua mineral',
      precio: 2000
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nuestro Menú</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menuItems.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.nombre}</h3>
                <p className="text-gray-600 text-lg mb-4">{item.descripcion}</p>
                <span className="text-2xl font-bold text-indigo-600">
                  ${item.precio.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 