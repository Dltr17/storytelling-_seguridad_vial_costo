import React from 'react'
import BlockRenderer from '../common/BlockRenderer';


const contenidoInmersion = [
  {
    id: 1,
    tipo: "parrafo",
    texto: "Recorrer los hechos viales significativos de los últimos años nos permite confrontar la inmediatez de la noticia y desvelar el impacto que queda suspendido en el tiempo. Cuando un siniestro ocurre, los titulares se limitan al registro del impacto, la culpa o el caos vehicular del momento. Al día siguiente, la página pasa y la tragedia se archiva. Pero el costo real —el dolor familiar silencioso, la pérdida de productividad y la fractura económica— apenas comienza."
  },
  {
    id: 2,
    tipo: "destacado",
    texto: "Pasa el cursor o haz clic sobre los rostros para desvelar el impacto oculto detrás de la noticia:"
  }
];


export default function RetornoCiegos() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Indicador superior editorial de sección */}
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-vial-teal mb-8 text-center opacity-70">
        02 / EL RETORNO DE LOS CIEGOS
      </span>

      {/* Renderizador de bloques desacoplado */}
      <BlockRenderer blocks={contenidoInmersion} />
      
      <div>
      <p>aqui van las noticias</p>
      </div>
    </div>
  )
}
