import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Database, Table2, Info, ExternalLink, Filter, Search } from "lucide-react"

function FichaTecnica() {
    return (
        <Sheet>
            <SheetTrigger className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-[#2C687B] transition-colors">
                <Database size={14} /> Ficha Técnica
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader className="text-left space-y-4">
                    <SheetTitle className="text-[#2C687B] uppercase text-sm tracking-widest border-b pb-2">
                        Metadatos
                    </SheetTitle>
                    
                    <SheetDescription className="text-slate-700 space-y-6 pt-4">
                        {/* PREGUNTA DE INVESTIGACIÓN */}
                        <section className="bg-[#2C687B]/5 p-4 rounded-lg border-l-4 border-[#2C687B]">
                            <h4 className="font-bold text-[#2C687B] text-xs uppercase flex items-center gap-2">
                                <Search size={14} /> Pregunta de estudio
                            </h4>
                            <p className="text-sm mt-2 font-medium italic">
                                "¿Qué pasa tras la muerte en el accidente?"
                            </p>
                        </section>

                        {/* UNIVERSO DE DATOS */}
                        <section>
                            <h4 className="font-bold text-black flex items-center gap-2 text-xs uppercase">
                                <Table2 size={16} /> Universo de Datos
                            </h4>
                            <p className="text-xs mt-2 text-justify">
                               El dataset procesado corresponde a los Boletines Estadísticos Oficiales de siniestralidad del Observatorio Nacional de Seguridad Vial (ONSV) para Colombia, con corte de actualización a marzo de 2026. Esta base cuantitativa registra un universo de 1.869 personas fallecidas durante el primer trimestre de 2026. Los datos se complementaron con los indicadores de la Encuesta Nacional de Calidad de Vida (ECV 2025) del DANE, estableciendo el tamaño promedio del hogar colombiano en 2.82 personas para realizar la transmutación analítica de la cifra.
                            </p>
                        </section>

                        {/* TRATAMIENTO CON OPENREFINE */}
                        <section>
                            <h4 className="font-bold text-black text-xs uppercase flex items-center gap-2">
                                <Filter size={14} /> Limpieza y Transformación
                            </h4>
                            <p className="text-xs mt-2 text-justify">
                                Se realizó una transmutación matemática y conceptual del dato plano en el entorno de desarrollo. Mediante lógica interactiva, se transformó la variable estática de fallecidos en familiares directos en duelo para calcular el impacto del tejido social roto. En paralelo, se integraron los rangos macroeconómicos globales de la OMS/BID (pérdida anual del 1.5% al 3% del PIB por siniestralidad) y las matrices de costos hospitalarios y reclamaciones del SOAT consolidadas por Fasecolda, parametrizando las proyecciones financieras que la sociedad asume tras la muerte.
                            </p>
                        </section>

                        {/* REFERENCIAS Y ECOSISTEMA */}
                        <section className="space-y-1 border-t pt-1">
                            <h4 className="font-bold text-black text-xs uppercase">Fuentes y Producción Previa</h4>
                            
<div className="space-y-2">
    {/* FUENTE 1: TESTIMONIOS ITTH */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Instituto de Transporte y Tránsito del Huila [ITTH] (2017)</p>
        <p>TESTIMONIOS VÍCTIMAS ACCIDENTES DE TRÁNSITO - Prudencia le pone #FrenoALasCifras [Archivo de Video].</p>
        <a href="https://www.youtube.com/watch?v=XgH-ISJm1Qs" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Video Testimonial <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 2: BOLETÍN ONSV 2021 */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Observatorio Nacional de Seguridad Vial (2022)</p>
        <p>Boletín estadístico Colombia: Serie nacional Enero - diciembre 2021 (Serie BTE_MPN_2021014001).</p>
        <a href="https://ansv.gov.co/es/node/6908" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Boletín (2021) <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 3: BOLETÍN ONSV 2022 */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Observatorio Nacional de Seguridad Vial (2023)</p>
        <p>Boletín estadístico Colombia: Serie nacional Enero - diciembre 2022 (Serie BTE_MPN_2022014001).</p>
        <a href="https://ansv.gov.co/es/node/9442" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Boletín (2022) <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 4: BOLETÍN ONSV 2023 */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Observatorio Nacional de Seguridad Vial (2024a)</p>
        <p>Boletín estadístico Colombia: Serie nacional Enero - diciembre 2023 (Serie BTE_MPN_2023014001).</p>
        <a href="https://ansv.gov.co/es/node/10959" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Boletín (2023) <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 5: BOLETÍN ONSV 2024 */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Observatorio Nacional de Seguridad Vial (2024b)</p>
        <p>Boletín estadístico Colombia: Serie nacional Enero - diciembre 2024 (Serie BTE_MPN_2024014001).</p>
        <a href="https://ansv.gov.co/es/node/12429" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Boletín (2024) <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 6: JOSE SARAMAGO */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Saramago, J. (1995)</p>
        <p>Ensayo sobre la ceguera. Santillana Ediciones Generales.</p>
        <a href="https://web.seducoahuila.gob.mx/biblioweb/upload/Saramago,%20Jose%20-%20Ensayo%20sobre%20la%20ceguera.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Libro de Referencia <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 7: ESTIMACIÓN DE COSTOS DE SINIESTRALIDAD (ANSV) */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Pulido Stubbs, J. D., Rodríguez, E. F., & Oyuela Soler, A. C. (2025)</p>
        <p>Estimación de los costos de la siniestralidad vial en Colombia (2023): Cálculos preliminares.</p>
        <a href="https://ansv.gov.co/sites/default/files/2026-01/Documento%20Costos%20de%20la%20Siniestralidad.pdf" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Documento de Costos <ExternalLink size={10} />
        </a>
    </div>

    {/* FUENTE 8: BOLETÍN CEPAL N.º 404 */}
    <div className="text-[11px] bg-slate-50 p-1 rounded">
        <p className="font-bold text-slate-900 text-xs">Comisión Económica para América Latina y el Caribe [CEPAL] (2025)</p>
        <p>Todos construimos la seguridad vial: intervenciones participativas en las regiones de Colombia (Boletín FAL N.º 404).</p>
        <a href="https://repositorio.cepal.org/server/api/core/bitstreams/10e2f183-cbbc-4b05-9884-2c7647af6d3e/content" target="_blank" rel="noopener noreferrer" className="text-[#2C687B] font-bold flex items-center gap-1 mt-1">
            Ver Boletín CEPAL <ExternalLink size={10} />
        </a>
    </div>
</div>
                        </section>

                        <footer className="pt-4 opacity-60">
                            <h4 className="font-bold text-black text-[10px] uppercase flex items-center gap-2">
                                <Info size={12} /> Nota de Integridad
                            </h4>
                            <p className="text-[10px] italic mt-1">
                                Procesamiento de datos orientado a la ética de la información: Selección de funetes basada en relevancia estadística y narrativa.
                            </p>
                        </footer>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default FichaTecnica