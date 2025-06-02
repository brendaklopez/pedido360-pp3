import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
        Bienvenido a <span className="text-indigo-600">Pedido360</span>
      </h1>
      
      <p className="text-xl text-gray-600 mb-12 max-w-2xl animate-fade-in-delay">
        Te invitamos a ver el menú o ver el estado de tu pedido.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link 
          href="/order-status"
          className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
         
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mi Pedido</h2>
          <p className="text-gray-600">
            Consulta el estado de tu pedido actual.
          </p>
        </Link>
        
        <Link 
          href="/menu"
          className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nuestro Menú</h2>
          <p className="text-gray-600">
            Explora nuestro menú.
          </p>
        </Link>
      </div>
    </div>
  )
} 