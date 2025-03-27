"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TreePalm as PalmTree } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="flex items-center gap-3 mb-6">
            <PalmTree size={40} />
            <h1 className="text-4xl md:text-6xl font-bold">Viajando por Cuba</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
            Descubre la magia de Cuba a través de nuestras excursiones únicas
          </p>
          <Link href="/excursiones">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Ver Excursiones <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}