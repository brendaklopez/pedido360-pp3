'use client';
import * as FaIcons from 'react-icons/fa';
import FloatingBackground from '../../components/FloatingBackground';

interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  icono: React.ReactNode;
}

export default function MenuPage() {
  const menuItems: MenuItem[] = [
    {
      id: '1',
      nombre: 'Hamburguesa Clásica',
      descripcion: 'Carne de res, lechuga, tomate, cebolla y salsa especial',
      precio: 8500,
      categoria: 'Platos Principales',
      icono: <FaIcons.FaHamburger className="text-4xl text-orange-500" />
    },
    {
      id: '2',
      nombre: 'Pizza napolitana',
      descripcion: 'Salsa de tomate, mozzarella, albahaca fresca, tomate',
      precio: 14000,
      categoria: 'Platos Principales',
      icono: <FaIcons.FaPizzaSlice className="text-4xl text-red-500" />
    },
    {
      id: '3',
      nombre: 'Ensalada César',
      descripcion: 'Lechuga, pollo a la parrilla, crutones, parmesano',
      precio: 8500,
      categoria: 'Entradas',
      icono: <FaIcons.FaLeaf className="text-4xl text-green-500" />
    },
    {
      id: '4',
      nombre: 'Tiramisú',
      descripcion: 'Postre italiano con café y mascarpone',
      precio: 8500,
      categoria: 'Postres',
      icono: <FaIcons.FaIceCream className="text-4xl text-pink-500" />
    },
    {
      id: '5',
      nombre: 'Limonada Natural',
      descripcion: 'Limonada fresca con menta',
      precio: 4000,
      categoria: 'Bebidas',
      icono: <FaIcons.FaGlassWhiskey className="text-4xl text-yellow-500" />
    },
    {
      id: '6',
      nombre: 'Flan',
      descripcion: 'Flan de leche',
      precio: 4000,
      categoria: 'Postres',
      icono: <FaIcons.FaCookie className="text-4xl text-amber-500" />
    },
    {
      id: '7',
      nombre: 'Gaseosa',
      descripcion: 'Linea Coca Cola',
      precio: 2500,
      categoria: 'Bebidas',
      icono: <FaIcons.FaWineGlassAlt className="text-4xl text-red-600" />
    },
    {
      id: '8',
      nombre: 'Agua',
      descripcion: 'Agua mineral',
      precio: 2000,
      categoria: 'Bebidas',
      icono: <FaIcons.FaWater className="text-4xl text-blue-500" />
    }
  ];

  const categorias = Array.from(new Set(menuItems.map(item => item.categoria)));

  return (
    <div className="min-h-screen py-12 relative">
      <FloatingBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Nuestro Menú
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Descubre nuestras deliciosas opciones
        </p>

        {categorias.map(categoria => (
          <div key={categoria} className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-indigo-200 pb-2">
              {categoria}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.categoria === categoria)
                .map(item => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icono}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nombre}</h3>
                        <p className="text-gray-600 mb-4">{item.descripcion}</p>
                        <div className="flex justify-end">
                          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            ${item.precio.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 