import React from 'react'
import BlockRenderer from '../common/BlockRenderer';

const contenidoInmersion = [
  {
    id: 1,
    tipo: "parrafo",
    texto: "El testimonio que acabas de escuchar desvanece de golpe la frivolidad con la que consumimos las cifras de accidentalidad diaria. Detrás de los números con los que pretendemos medir la tragedia, queda un hogar fracturado que debe reconstruir su existencia sobre la ausencia y el dolor real del cuidado."
  },
   {
    id: 1,
    tipo: "parrafo",
    texto: "Como sociedad, no podemos seguir siendo esos ciegos que, viendo, no ven de los que escribía José Saramago. No podemos continuar sentados frente a las pantallas, asumiendo con pasividad que la muerte es el desenlace cotidiano y natural de cada trayecto por nuestras vías."
  },
 {
    id: 1,
    tipo: "parrafo",
    texto: "Romper esta ceguera exige dejar de esperar pasivamente la identidad del próximo herido o fallecido en el periódico. Nos exige reconocer la agencia social de las cifras y entender que cada decisión ética que tomamos en el espacio público es un acto consciente para proteger la vida del otro."
  },
 {
    id: 1,
    tipo: "parrafo",
    texto: "La cuenta de la imprudencia sigue corriendo en cada kilómetro de nuestro país."
  },
  {
    id: 1,
    tipo: "cita",
    texto: "Frente a esta ceguera, ¿cuál va a ser tu decisión hoy?"
  }
];



export default function DespertarEtico() {
  return (
     <div className="w-full flex flex-col items-center">
    
          {/* Indicador superior editorial de sección */}
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-vial-teal mb-8 text-center opacity-70">
            05 / EL DESPERTAR
          </span>
    
          {/* Renderizador de bloques desacoplado */}
          <BlockRenderer blocks={contenidoInmersion} />
       
        </div>
  )
}
