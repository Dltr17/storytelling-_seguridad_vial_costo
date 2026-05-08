import React from 'react';

export default function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="max-w-3xl w-full text-center space-y-8 md:space-y-6">
      {blocks.map((bloque) => {
        switch (bloque.tipo) {
          
          // Preguntas reflexivas solemnes y elegantes
          case "pregunta":
            return (
              <p 
                key={bloque.id} 
                className="text-2xl md:text-2xl font-light text-foreground leading-tight tracking-tight py-4 border-y border-border/10 italic"
              >
                {bloque.texto}
              </p>
            );

          // Bloques destacados / Datos con borde lateral rojo de marca
          case "destacado":
            return (
              <p 
                key={bloque.id} 
                className="text-xs md:text-sm font-medium text-foreground/95 leading-relaxed text-left border-l-2 border-vial-red pl-6 my-4"
              >
                {bloque.texto}
              </p>
            );

          // Citas de anclaje (como Saramago) con línea divisoria
          case "cita":
            return (
              <div 
                key={bloque.id} 
                className="pt-8 flex flex-col items-center gap-4"
              >
                <span className="h-[1px] w-12 bg-vial-red/40" />
                <p className="text-xl md:text-2xl font-black tracking-tight text-vial-red animate-pulse">
                  {bloque.texto}
                </p>
              </div>
            );

          // Párrafos narrativos estándar legibles
          case "parrafo":
          default:
            return (
              <p 
                key={bloque.id} 
                className="text-base md:text-lg text-foreground/80 leading-relaxed text-justify md:text-center"
              >
                {bloque.texto}
              </p>
            );
        }
      })}
    </div>
  );
}