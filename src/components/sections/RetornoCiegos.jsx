import React from 'react'
import BlockRenderer from '../common/BlockRenderer';
import RostrosInteractivos from '../features/RostrosInteractivos';


const contenidoInmersion = [
  {
    id: 1,
    tipo: "parrafo",
    texto: "Escuchar la fractura de una familia real desvanece cualquier intento de justificar la muerte como un indicador tolerable de desarrollo o un efecto colateral de nuestra movilidad cotidiana."
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
        03 / EL RETORNO DE LOS CIEGOS
      </span>

      {/* Renderizador de bloques desacoplado */}
      <BlockRenderer blocks={contenidoInmersion} />
      
      <div>
      <RostrosInteractivos/>
     
      </div>
    </div>
  )
}
