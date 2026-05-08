import React from 'react'
import BlockRenderer from '../common/BlockRenderer';


const contenidoInmersion = [
  {
    id: 1,
    tipo: "parrafo",
    texto: "Hasta este punto, hemos intentado dar agencia a la cifra a través de dimensiones macroeconómicas, multiplicadores sociales y facturas financieras que asume el Estado. Sin embargo, la abstracción de los números —incluso de aquellos que miden billones de pesos— sigue corriendo el riesgo de convertirse en un nuevo velo que oculta la tragedia individual."
  },
  {
    id: 2,
    tipo: "parrafo",
    texto: "Para desvelar la última capa de nuestra ceguera colectiva, es necesario desplazar la mirada desde el frío análisis estadístico nacional hacia la micro-realidad del hogar colombianizado."
  },
  {
    id: 3,
    tipo: "parrafo",
    texto: "Detrás de cada trayecto interrumpido hay un entorno familiar que no solo debe procesar el vacío y el duelo afectivo; de un día para otro, se ven forzados a asumir la pérdida del proveedor económico principal, los costos catastróficos asociados al cuidado de heridos con secuelas crónicas y una reconfiguración total de su subsistencia."
  },
  {
    id: 4,
    tipo: "destacado",
    texto: "El siguiente testimonio, recuperado del Instituto de Transporte y Tránsito del Huila (ITTH), nos confronta con esa cruda realidad que ningún boletín de prensa o balance financiero de aseguradoras alcanza a registrar."
  }
];



export default function ImpactoCrudeza() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Indicador superior editorial de sección */}
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-vial-teal mb-8 text-center opacity-70">
        04 / LA REALIDAD EN EL HOGAR
      </span>

      {/* Renderizador de bloques desacoplado */}
      <BlockRenderer blocks={contenidoInmersion} />
      
<div className="w-full max-w-xl mx-auto flex flex-col gap-2 mt-8 mb-4">
        
        {/* Contenedor del marco interactivo para asegurar el aspect-ratio */}
        <div className="w-full aspect-video rounded overflow-hidden border border-border/40 bg-zinc-950 shadow-sm relative">
          <iframe
            width="100%"
            height="100%"
            // URL Optimizada: showinfo=0 (oculta título), modestbranding=1 (oculta logo), controls=2 (limpia interfaz)
            src={`https://www.youtube.com/embed/XgH-ISJm1Qs?rel=0&showinfo=0&modestbranding=1&controls=2&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
            title={`Testimonio víctima de accidente de tránsito - ITTH Huila`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* PIE DE FOTO / CRÉDITO EDITORIAL */}
        <p className="text-[11px] text-muted-foreground leading-relaxed text-right italic pt-1 border-t border-border/20">
          Fuente: Instituto de Transporte y Tránsito del Huila (ITTH)
        </p>

      </div>

    </div>
  )
}
