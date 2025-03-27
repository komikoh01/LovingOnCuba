import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TreePalm as PalmTree } from 'lucide-react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Viajando por Cuba - Excursiones y Tours',
  description: 'Descubre la magia de Cuba con nuestras excursiones personalizadas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <PalmTree className="h-6 w-6" />
                <span className="text-xl font-bold">Viajando por Cuba</span>
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-600">Inicio</Link>
                <Link href="/excursiones" className="hover:text-blue-600">Excursiones</Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Viajando por Cuba</h3>
                <p>Tu mejor opción para descubrir Cuba</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <p>Email: info@viajandoporcuba.com</p>
                <p>Tel: +53 7 123 4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-400">Facebook</a>
                  <a href="#" className="hover:text-blue-400">Instagram</a>
                  <a href="#" className="hover:text-blue-400">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}