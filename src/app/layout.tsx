import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingBackground from "../components/FloatingBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedido360 - Sistema de Pedidos",
  description: "Sigue tu orden en tiempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 min-h-screen relative`}>
        <FloatingBackground />
        <nav className="bg-white shadow-lg relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-indigo-600">Pedido360</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                  Inicio
                </a>
                <a href="/pedido" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                  Mi Pedido
                </a>
                <a href="/menu" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                  Menú
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
} 