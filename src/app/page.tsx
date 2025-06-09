'use client';
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-gray-900 mb-6"
      >
        Bienvenido a <span className="text-indigo-600">Pedido360</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl text-gray-600 mb-12 max-w-2xl"
      >
        Te invitamos a ver el menú o ver el estado de tu pedido.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/order-status"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 block"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mi Pedido</h2>
            <p className="text-gray-600">
              Consulta el estado de tu pedido actual.
            </p>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/menu"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 block"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Nuestro Menú</h2>
            <p className="text-gray-600">
              Explora nuestro menú.
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 