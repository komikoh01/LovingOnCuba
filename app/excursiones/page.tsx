"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const excursiones = [
  {
    id: 1,
    nombre: "Viñales y Valle del Silencio",
    imagen: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-4.0.3",
    precio: 75,
  },
  {
    id: 2,
    nombre: "La Habana Colonial",
    imagen: "https://images.unsplash.com/photo-1547485182-0d6d8e6d3ec5",
    precio: 45,
  },
  {
    id: 3,
    nombre: "Varadero Todo Incluido",
    imagen: "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f89",
    precio: 120,
  },
  {
    id: 4,
    nombre: "Trinidad y Cienfuegos",
    imagen: "https://images.unsplash.com/photo-1569200093072-2a54713bb93b",
    precio: 95,
  },
  {
    id: 5,
    nombre: "Cayo Coco Paradisíaco",
    imagen: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2",
    precio: 150,
  },
  {
    id: 6,
    nombre: "Santiago de Cuba Cultural",
    imagen: "https://images.unsplash.com/photo-1563615988561-6c1cbbb7b36b",
    precio: 85,
  },
  {
    id: 7,
    nombre: "Jardines del Rey",
    imagen: "https://images.unsplash.com/photo-1596403387904-9a7c77b8d177",
    precio: 130,
  },
  {
    id: 8,
    nombre: "Pinar del Río Tabacalero",
    imagen: "https://images.unsplash.com/photo-1580750882617-8b09fb861cd6",
    precio: 65,
  },
  {
    id: 9,
    nombre: "Cayo Santa María",
    imagen: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2",
    precio: 140,
  },
  {
    id: 10,
    nombre: "Guamá y Ciénaga de Zapata",
    imagen: "https://images.unsplash.com/photo-1589279715734-6631a314dfa2",
    precio: 90,
  },
];

export default function Excursiones() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestras Excursiones</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {excursiones.map((excursion) => (
          <Card key={excursion.id} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={excursion.imagen}
                alt={excursion.nombre}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{excursion.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-blue-600">${excursion.precio} USD</p>
            </CardContent>
            <CardFooter>
              <Link href={`/excursiones/${excursion.id}`} className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                  Ver detalles
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}