import React from 'react'
import BlockRenderer from '../common/BlockRenderer';
import InteractiveCost from '../features/InteractiveCost';

const contenidoInmersion = [
  {
    id: 1,
    tipo: "parrafo",
    texto: "Al consultar de manera directa en el navegador sobre “Accidentalidad vial en Colombia”, resaltan estudios que enmarcan las causas, estadísticas de heridos y boletines con cifras oficiales."
  },
  {
    id: 2,
    tipo: "parrafo",
    texto: "Al pasar a la sección de noticias, lo común es encontrar en los titulares la palabra “aumento”: de accidentes, de muertos, de tragedias. Ante la presentación de este fenómeno como algo que cotidianamente crece cada año, se genera un escenario de infoxicación donde se vuelve costumbre leer que ocurrió un accidente, haciendo natural esperar la identidad de quien se lesiono o murió."
  },
  {
    id: 2,
    tipo: "pregunta",
    texto: "Pero, ¿por qué normalizamos que la muerte es el efecto directo de los accidentes? ¿ y qué pasa tras la lesion o la muerte en el accidente?"
  },
  {
    id: 3,
    tipo: "parrafo",
    texto: "El propósito de este recorrido no es analizar la accidentalidad vial como una cifra sobre el transito, sino conectar con los efectos de lo que ya esperamos que suceda: la lesion o la muerte."
  },
  {
    id: 3,
    tipo: "parrafo",
    texto: "Para esto, recurrimos al Observatorio Nacional de Seguridad Vial (ONSV), cuyos boletines oficiales registran, enero y marzo del 2026, la trágica cifra de 1.869 personas fallecidas en solo 3 meses. Pero no nos quedamos en la frivolidad de ese número."
  },
  {
    id: 4,
    tipo: "parrafo",
    texto: "Se propone entonces una transmutación necesaria: si tomamos como base que el hogar promedio en Colombia está compuesto por 2.82 personas por hogar (DANE, Encuesta Nacional de Calidad de Vida 2025), cada vida truncada multiplica el impacto de manera exponencial."
  },
  {
    id: 4,
    tipo: "parrafo",
    texto: " Ya no hablamos de ocho mil como unidades numéricas abstractas, sino de más de 5.000 personas que de manera directa se ven sumergidas en el duelo y, por tanto, deben reorganizar su existencia ante la ausencia."
  },
  {
    id: 5,
    tipo: "parrafo",
    texto: "Es aquí donde la cifra adquiere una agencia y un rostro social que hoy se consumen en el letargo de los titulares. Dar este paso nos permite romper la ceguera de la que hablaba José Saramago: la de esos \"ciegos que, viendo, no ven\"."
  },
  {
    id: 6,
    tipo: "destacado",
    texto: "Interactua con la cuenta de la imprudencia y calcular tú mismo el impacto real de lo que decidimos ignorar"
  },

];

export default function Inmersion() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* Indicador superior editorial de sección */}
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-vial-teal mb-16 text-center opacity-70">
        02 / LA INMERSIÓN
      </span>

      {/* Renderizador de bloques desacoplado */}
      <BlockRenderer blocks={contenidoInmersion} />
      <InteractiveCost />
    </div>
  )
}
