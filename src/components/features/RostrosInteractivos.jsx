import React, { useState } from 'react';

import {
    Truck,
    User,
    Users as UsersIcon,
    GraduationCap,
    ShieldAlert,
    FileText,
    TrendingUp,
    HeartHandshake,
    BabyIcon
} from 'lucide-react';

const rostrosNoticias = [
    {
        id: 1,
        año: "2021",
        rol: "Núcleo familiar / Motociclistas",
        titular: "Tragedia en Putumayo: choque de motocicletas deja cuatro muertos, entre ellos una menor",
        youtubeId: "8IFRtgX40zQ",
        fuente: "Noticias Caracol",
        microrrelato: "Un choque frontal en Putumayo evidenció la extrema fragilidad de la movilidad rural. Más allá de la pérdida instantánea de vidas, el siniestro desintegró a un núcleo familiar casi por completo. Mientras la prensa local redujo la tragedia al exceso de velocidad, se ignoró cómo este hecho colapsó la red de salud primaria del municipio y forzó traslados médicos de alta complejidad que afectaron directamente el fondo común de salud pública.",
        costosOcultos: [
            {
                categoria: "Saturación de Redes Rurales",
                descripcion: "El costo logístico de movilizar servicios de emergencia y forenses en zonas apartadas, donde la infraestructura de salud no está preparada para siniestros múltiples."
            },
            {
                categoria: "Desestructuración Social",
                descripcion: "La pérdida simultánea de proveedores y cuidadores en una familia traslada al Estado el costo de asistencia social y protección para los parientes sobrevivientes."
            }
        ],
        Icono: User
    },
    {
        id: 2,
        año: "2022",
        rol: "Transportador de carga pesada",
        titular: "Tragedia en el Túnel de Los Venados: tractomula sin frenos apaga ocho vidas en el Alto de La Línea",
        youtubeId: "3X6taeC-x7U",
        fuente: "Noticias Caracol",
        microrrelato: "El país se estremeció ante el brutal choque múltiple en el túnel de La Línea. La cobertura mediática se limitó a la espectacularidad de las imágenes y al conteo de fallecidos. Sin embargo, nadie reportó el impacto sistémico del evento: la parálisis por doce horas del principal corredor logístico de Colombia, provocando pérdidas incalculables en fletes y cadenas de suministro que afectaron la economía nacional.",
        costosOcultos: [
            {
                categoria: "Daño a la Infraestructura",
                descripcion: "Costo de reparación de infraestructura pública debido a daños mecánicos y estructurales severos en el túnel nacional."
            },
            {
                categoria: "Presión al Sistema de Salud",
                descripcion: "Movilización de ambulancias y cirugías de alta complejidad para los heridos, asumidas inmediatamente por el sistema de salud a través del SOAT."
            }
        ],
        Icono: Truck
    },
    {
        id: 3,
        año: "2023",
        rol: "Madre de familia",
        titular: "Tragedia por intolerancia en Bogotá: madre de familia muere arrollada en medio de riña de conductores",
        youtubeId: "hbJUQLSjUb0",
        fuente: "Noticias Caracol",
        microrrelato: "Diana Marcela Alvarado, de 40 años, murió arrollada al quedar atrapada en una riña de tránsito ajena al sur de Bogotá. La prensa cubrió con afán la captura judicial del conductor agresor y el morbo de la intolerancia ciudadana, pero dejó en absoluto abandono la realidad del hogar. Nadie investigó la orfandad en la que quedaron sus hijas pequeñas ni el vacío afectivo y económico que ahora padece su familia.",
        costosOcultos: [
            {
                categoria: "Vulnerabilidad Familiar Destructiva",
                descripcion: "La pérdida repentina de una madre deja a menores en situación de desamparo emocional y socioeconómico, trasladando al mediano plazo costos de asistencia estatal y apoyo psicosocial."
            },
            {
                categoria: "Costo Penal e Institucional",
                descripcion: "La escalada de un incidente menor de tránsito a un homicidio doloso activa todo el aparato de la Fiscalía, peritajes forenses y audiencias de juicio, con un alto coste administrativo para el Estado."
            }
        ],
        Icono: UsersIcon
    },
    {
        id: 4,
        año: "2024",
        rol: "Menor de edad / Estudiante",
        titular: "Susto en Bogotá: volcamiento de ruta escolar en la Circunvalar deja 13 niños lesionados",
        youtubeId: "U_Yjb6RzBtI",
        fuente: "Noticias RCN",
        microrrelato: "El volcamiento de una ruta escolar en plena Avenida Circunvalar de Bogotá conmovió brevemente a la opinión pública. Aunque afortunadamente no hubo decesos, el suceso develó fallas de control severas en el transporte de menores y colapsó la movilidad de la zona. Las noticias ignoraron el alto costo operativo de la emergencia y el trauma psicológico prolongado de los niños y sus familias.",
        costosOcultos: [
            {
                categoria: "Despliegue de Emergencias de Alta Densidad",
                descripcion: "La movilización inmediata de más de 20 ambulancias, personal de bomberos y agentes de tránsito representa un costo operativo masivo para el Centro de Comando de la ciudad."
            },
            {
                categoria: "Falla en Infraestructura de Monitoreo",
                descripcion: "La inoperancia de las cámaras de vigilancia estatales traslada el costo de la investigación a peritos privados y prolonga los tiempos de resolución judicial del caso."
            }
        ],
        Icono: GraduationCap
    },
    {
        id: 5,
        año: "2025",
        rol: "Estudiante / Pasajero",
        titular: "Tragedia en la vía Bogotá - La Mesa: volcamiento de bus deja cinco muertos y 23 heridos",
        youtubeId: "zHXhFg_DR5E",
        fuente: "Noticias Caracol",
        microrrelato: "Un bus con estudiantes universitarios se volcó al salir de una curva en la vía Bogotá - La Mesa, cobrando la vida de cinco jóvenes. El colapso obligó a dispersar la atención médica crítica en hospitales de tres municipios diferentes. Este suceso evidenció la total falta de un centro de trauma unificado en las rutas de acceso a la capital, encareciendo y fragmentando las facturas de traslado y urgencias del SOAT.",
        costosOcultos: [
            {
                categoria: "Dispersión de Costos Hospitalarios",
                descripcion: "La distribución de pacientes de alta complejidad en múltiples centros asistenciales (Mosquera, Facatativá y Funza) fragmenta y eleva las facturaciones al SOAT y al ADRES por traslados intermunicipales."
            },
            {
                categoria: "Investigación y Reconstrucción Forense",
                descripcion: "El costo de las horas de peritaje técnico y análisis de fotogrametría por parte de inspectores de la Policía de Tránsito para certificar las fallas mecánicas o humanas en la vía nacional."
            }
        ],
        Icono: ShieldAlert
    },
    {
        id: 6,
        año: "2026",
        rol: "Padres de familia / Comerciantes",
        titular: "Tragedia en la vía Buga–Buenaventura: choque provocado por camión sin frenos deja dos huérfanos",
        youtubeId: "Z98W8dV7wxc",
        fuente: "Noticias Caracol",
        microrrelato: "Un camión sin frenos embistió un vehículo familiar en la vía Buga-Buenaventura, matando al instante a ambos padres y dejando huérfanos a dos menores. Los medios reportaron la fatalidad del choque mecánico, pero ocultaron las secuelas definitivas: la destrucción del micronegocio familiar del que dependía su sustento y el inicio de un costoso proceso estatal de protección y restablecimiento de derechos de los sobrevivientes.",
        costosOcultos: [
            {
                categoria: "Restablecimiento de Derechos y Custodia",
                descripcion: "La asistencia estatal requerida a mediano y largo plazo a través de defensores de familia (ICBF), procesos de custodia legal y acompañamiento psicoterapéutico continuo para menores en situación de orfandad."
            },
            {
                categoria: "Quiebra y Pérdida de Unidades Productivas",
                descripcion: "La muerte de los líderes del hogar extingue de inmediato el micronegocio familiar que generaba ingresos autónomos, trasladando al sistema cargas de subsistencia y vulnerabilidad económica."
            }
        ],
        Icono: BabyIcon
    }
];

export default function RostrosInteractivos() {
    // Inicializamos con el primer ID (1) para evitar el estado de reposo vacío y asegurar que siempre haya una noticia cargada de inicio.
    const [activoId, setActivoId] = useState(null);

    const casoActivo = rostrosNoticias.find(r => r.id === activoId);

    return (
        <div className="w-full max-w-4xl flex flex-col mb-4">

            {/* 1. COMPOSICIÓN DE ROSTROS COMPACTADA */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center justify-center w-full max-w-lg gap-8">
                    {rostrosNoticias.map((rostro) => {
                        const IconoComponente = rostro.Icono;
                        const isSelected = activoId === rostro.id;
                        const isDimmed = activoId !== null && activoId !== rostro.id;

                        return (
                            <button
                                key={rostro.id}
                                // ELIMINADOS onMouseEnter y onMouseLeave para evitar spam de peticiones a la API de YouTube
                                onClick={() => setActivoId(rostro.id)}
                                className={`flex flex-col items-center gap-1.5 cursor-pointer transition-all duration-300 gap-2
                                    ${isDimmed
                                        ? 'opacity-40 scale-90 blur-[0.5px]'
                                        : 'opacity-100 scale-100'
                                    }`}
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border transition-all duration-300
                                    ${isSelected
                                        ? 'bg-vial-red/5 border-vial-red shadow-[0_0_12px_rgba(239,68,68,0.2)] text-vial-red'
                                        : 'bg-muted/30 border-border/70 text-muted-foreground hover:border-foreground/30 hover:text-foreground/80'
                                    }`}
                                >
                                    <IconoComponente strokeWidth={1} size={22} />
                                </div>

                                <span className={`font-mono text-[9px] uppercase tracking-wider font-bold transition-colors
                                    ${isSelected ? 'text-vial-red' : 'text-muted-foreground'}`}
                                >
                                    {rostro.año}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 2. BLOQUE INFORMATIVO DINÁMICO */}
            <div className="min-h-[300px] md:min-h-[240px] flex items-center justify-center mt-6">
                {casoActivo && (
                    <div className="w-full flex flex-col md:flex-row gap-8 text-left animate-fadeIn">

                        {/* Lado Izquierdo: Narración y titular */}
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 font-mono text-[10px] font-bold bg-vial-red text-white rounded">
                                    Año {casoActivo.año}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    {casoActivo.rol}
                                </span>
                            </div>

                            <h3 className="hero-counter text-lg md:text-xl text-foreground font-bold tracking-tight leading-snug">
                                “{casoActivo.titular}”
                            </h3>

                            {/* REPRODUCTOR DE VIDEO SEGURO (CON CONTROL DE CLIC) */}
                            {casoActivo.youtubeId && (
                                <div className="w-full aspect-video rounded overflow-hidden border border-border/40 bg-zinc-950 shadow-sm relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        // Construimos la URL con el origen dinámico de la ventana para producción
                                        src={`https://www.youtube.com/embed/${casoActivo.youtubeId}?rel=0&modestbranding=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                        title={`Reporte de prensa ${casoActivo.año}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full"
                                    />
                                </div>
                            )}
                            <h1 className="text-[10px] text-muted-foreground leading-relaxed">
                                Tomado de {casoActivo.fuente}
                            </h1>

                        </div>

                        {/* Lado Derecho: VIDEO DE YOUTUBE VISIBLE + La Cuenta de la Imprudencia */}
                        <div className="w-full md:w-80 flex flex-col gap-4 self-start">

                            {/* COSTOS OCULTOS */}
                            <div className="bg-muted/10 border border-border/40 p-5 rounded-lg flex flex-col gap-4">
                                <span className="text-[10px] font-black uppercase tracking-wider text-vial-red flex items-center gap-1.5 border-b border-border/40 pb-2">
                                    <FileText size={14} /> La Cuenta de la Imprudencia
                                </span>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {casoActivo.microrrelato}
                                </p>
                                {casoActivo.costosOcultos.map((costo, index) => (
                                    <div key={index} className="space-y-1">
                                        <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                            {index === 0 ? <TrendingUp size={12} className="text-vial-teal" /> : <HeartHandshake size={12} className="text-vial-teal" />}
                                            {costo.categoria}
                                        </p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">
                                            {costo.descripcion}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                )}
            </div>

        </div>
    );
}