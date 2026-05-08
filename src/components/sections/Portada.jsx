import React from 'react'
import { Truck, Car, Bike, Footprints, MoveDown } from 'lucide-react';

export default function Portada() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col items-center justify-center -mt-16">

      {/* 1. La Ilustración de Línea Superior (Ubicación Central Alta) */}
      <div className="inline-visual-container mb-6 flex-row gap-12 text-foreground/20 opacity-60">
        <Footprints strokeWidth={0.5} size={64} className="animate-pulse" />
        <Bike strokeWidth={0.5} size={64} />
        <div className="h-16 w-[1.5px] bg-border rounded-full" />
        <Car strokeWidth={0.5} size={64} />
        <Truck strokeWidth={0.5} size={64} />
      </div>

      {/* 2. Etiqueta Editorial Minimalista */}
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-vial-red mb-10 text-center opacity-70">
        LA CUENTA DE LA IMPRUDENCIA
      </span>

      {/* 3. El Título Principal Gigante (Ancho Máximo Ampliado) */}
      <h1 className="hero-counter text-4xl md:text-6xl lg:text-7xl text-foreground mb-12 leading-none max-w-5xl text-center font-black tracking-tighter">
        Lo que Colombia pierde con cada muerte en la vía
      </h1>

      {/* 4. BLOQUE NARRATIVO CONDENSADO (La limpieza editorial) */}
      <div className="max-w-2xl text-center mb-12">
        <p className="text-xl md:text-1xl font-light leading-snug text-foreground/90 mx-auto">
          Abrimos el periódico, leemos una cifra más de siniestralidad y la archivamos en el olvido. Hemos normalizado que la muerte sea el final cotidiano del viaje. Pero, <strong >¿qué pasa realmente cuando el asfalto se limpia?</strong>
        </p>
      </div>

      {/* 5. La Invitación al Scroll Animada (LA INVITACIÓN SE MUEVE) */}
      <div className="flex flex-col items-center justify-center gap-1.5 animate-soft-pulse mt-3 mb-10">
        <span className="hero-counter text-[11px] uppercase tracking-widest text-vial-red font-bold">
          Desliza para ver lo que decidimos no ver.
        </span>
        <MoveDown
          strokeWidth={1.5}
          size={24}         
          className="text-vial-red/60 animate-bounce-soft mt-1" 
        />
      </div>

    </div>
  )
}
