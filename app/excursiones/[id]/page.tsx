"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const lugaresRecogida = [
  "Hotel Nacional",
  "Hotel Meliá Cohiba",
  "Hotel Habana Libre",
  "Hotel Inglaterra",
  "Hotel Plaza",
];

export default function ExcursionDetalle({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState({
    nombre: "",
    ci: "",
    telefono: "",
    lugarRecogida: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          <div className="h-96 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1500759285222-a95626b934cb"
              alt="Excursión principal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1547485182-0d6d8e6d3ec5"
              alt="Galería 1"
              className="h-32 w-full object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1584555613497-9ecf9dd06f89"
              alt="Galería 2"
              className="h-32 w-full object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1569200093072-2a54713bb93b"
              alt="Galería 3"
              className="h-32 w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Información y formulario */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Viñales y Valle del Silencio</h1>
          <p className="text-3xl font-bold text-blue-600 mb-4">$75 USD</p>
          <div className="prose max-w-none mb-8">
            <p>
              Descubre la belleza natural de Viñales, declarado Patrimonio de la Humanidad por la UNESCO. 
              Visita las plantaciones de tabaco, explora las cuevas prehistóricas y maravíllate con los 
              mogotes, formaciones montañosas únicas en el mundo.
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Incluye:</h3>
            <ul className="list-disc pl-5">
              <li>Transporte climatizado</li>
              <li>Guía profesional</li>
              <li>Almuerzo típico cubano</li>
              <li>Visita a casa del veguero</li>
              <li>Paseo en bote por la cueva del indio</li>
            </ul>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                Reservar Ahora
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Formulario de Reserva</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ci">Carnet de Identidad</Label>
                  <Input
                    id="ci"
                    value={formData.ci}
                    onChange={(e) => setFormData({ ...formData, ci: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lugarRecogida">Lugar de recogida</Label>
                  <Select
                    value={formData.lugarRecogida}
                    onValueChange={(value) => setFormData({ ...formData, lugarRecogida: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un lugar" />
                    </SelectTrigger>
                    <SelectContent>
                      {lugaresRecogida.map((lugar) => (
                        <SelectItem key={lugar} value={lugar}>
                          {lugar}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Confirmar Reserva</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}