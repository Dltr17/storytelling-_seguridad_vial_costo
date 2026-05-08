import React, { useState } from 'react';
import { Users, Landmark, Activity, HelpCircle } from 'lucide-react';

// Datos históricos oficiales para los accesos rápidos
const datosHistoricos = {
    "2016": 6936,
    "2017": 6505,
    "2018": 6629,
    "2019": 6424,
    "2020": 5320,
    "2021": 7104,
    "2022": 8030,
    "2023": 8168,
    "2024": 8030,
    "2025 (Ene-Abr)": 2485,
    "2026 (Ene-Mar)": 1869
};

export default function InteractiveCost() {
    const [victimas, setVictimas] = useState(1869);
    const [periodoActivo, setPeriodoActivo] = useState("2026 (Trim.)");

    const seleccionarPeriodo = (periodo, valor) => {
        setPeriodoActivo(periodo);
        setVictimas(valor);
    };

    // Fórmulas matemáticas compactas
    const calcularImpactoSocial = (v) => Math.round(v * 2.82);

    const calcularImpactoPIBMin = (v) => {
        // Proporción basada en el estándar del BID/OMS para el volumen de pérdidas
        const factor = v >= 5000 ? 25.1 / 8201 : 6.5 / 1869;
        return (v * factor).toFixed(1);
    };

    const calcularImpactoPIBMax = (v) => {
        const factor = v >= 5000 ? 50.2 / 8201 : 13.1 / 1869;
        return (v * factor).toFixed(1);
    };

    const calcularImpactoSalud = (v) => {
        const factor = v >= 5000 ? 3.8 / 8201 : 1.0 / 1869;
        return (v * factor).toFixed(2);
    };

    return (
        <div className="w-full max-w-4xl bg-background text-center px-2">

            {/* 1. CONTROLADOR UNIFICADO Y COMPACTO */}
            <div className="w-full max-w-3xl mx-auto mb-2 border border-border/40 rounded-lg p-5 bg-muted/5">

                {/* Selector de periodo histórico (Estilo pastillas minimalistas) */}
                <div className="flex flex-col items-center gap-2 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                        Seleccionar histórico de muertes (ANSV):
                    </span>
                    <div className="flex flex-wrap justify-center gap-1">
                        {Object.entries(datosHistoricos).map(([año, valor]) => (
                            <button
                                key={año}
                                onClick={() => seleccionarPeriodo(año, valor)}
                                className={`px-2.5 py-1 text-xs font-mono rounded transition-all cursor-pointer border
                  ${periodoActivo === año
                                        ? 'bg-vial-red text-white border-vial-red font-bold'
                                        : 'bg-background text-foreground/80 border-border/60 hover:border-vial-red/50'
                                    }`}
                            >
                                {año}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fila del Slider y Cifra Principal */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-3 border-t border-border/30">
                    <div className="text-left w-full sm:flex-1">
                       
                        <h4 className="text-xs font-bold text-foreground/90">
                            Numero de víctimas:
                        </h4>

                        {/* Slider de rango */}
                        <div className="w-full flex items-center gap-4 mt-3">
                            <span className="font-mono text-[10px] text-muted-foreground">0</span>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                step="50"
                                value={victimas}
                                onChange={(e) => {
                                    setVictimas(Number(e.target.value));
                                    setPeriodoActivo("Personalizado");
                                }}
                                className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-vial-red"
                            />
                            <span className="font-mono text-[10px] text-muted-foreground">10 k</span>
                        </div>
                    </div>

                    {/* Cifra de control */}
                    <div className="flex flex-col items-center sm:items-end px-4 py-2">
                        <span className="font-mono text-5xl font-black text-vial-red tracking-tight leading-none">
                            {victimas.toLocaleString()}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-bold mt-1.5">
                            Muertes registradas
                        </span>
                    </div>
                </div>

            </div>

            {/* 2. LAS TRES COLUMNAS CONTINUAS Y COMPACTAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 ">

                {/* COLUMNA 1: IMPACTO SOCIAL */}
                <div className="flex flex-col items-center px-4 md:border-r border-dashed border-border/40">
                    <div className="mt-4 mb-2 text-foreground/30">
                        <Users strokeWidth={1} size={28} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                        Impacto Social
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-vial-red font-bold mb-3">
                        Duelo Directo
                    </span>

                    <span className="font-mono text-3xl font-light text-foreground tracking-tight mb-2">
                        {calcularImpactoSocial(victimas).toLocaleString()}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground">
                        Promedio: 2.82 familiares
                    </span>

                    <p className="text-[11px] text-muted-foreground leading-snug text-center max-w-xs h-[48px] overflow-hidden">
                        Padres, hijos y cónyuges promedio sumergidos en el duelo directo.
                    </p>

                </div>

                {/* COLUMNA 2: COSTO MACRO */}
                <div className="flex flex-col items-center px-4 md:border-r border-dashed border-border/40">
                    <div className="mt-4 mb-2 text-foreground/30">
                        <Landmark strokeWidth={1} size={28} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                        Costo Macroeconómico
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-vial-red font-bold mb-3">
                        Pérdida de PIB
                    </span>

                    <span className="font-mono text-2xl font-light text-foreground tracking-tight mb-2 py-0.5">
                        {calcularImpactoPIBMin(victimas)} - {calcularImpactoPIBMax(victimas)} B
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground">
                        Rango OMS/BID: 1.5% - 3% PIB
                    </span>

                    <p className="text-[11px] text-muted-foreground leading-snug text-center max-w-xs h-[48px] overflow-hidden">
                        Pérdida en billones de pesos por reducción de productividad país y capital humano.
                    </p>

                </div>

                {/* COLUMNA 3: SALUD */}
                <div className="flex flex-col items-center px-4">
                    <div className="mt-4 mb-2 text-foreground/30">
                        <Activity strokeWidth={1} size={28} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                        Atención y Aseguramiento
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-vial-red font-bold mb-3">
                        Cargos de Salud (SOAT)
                    </span>

                    <span className="font-mono text-3xl font-light text-foreground tracking-tight mb-2">
                        ~ {calcularImpactoSalud(victimas)} B
                    </span>

                    <span className="font-mono text-[9px] text-muted-foreground">
                        Fuente base: Fasecolda
                    </span>
                    <p className="text-[11px] text-muted-foreground leading-snug text-center max-w-xs h-[48px] overflow-hidden">
                        Billones absorbidos en atención médica de urgencias, cirugías complejas y pólizas.
                    </p>

                </div>

            </div>

            {/* 3. METODOLOGÍA DEL PIE (MICRO TEXTO) */}
            <div className="mt-4 flex items-start justify-center gap-2 max-w-3xl mx-auto text-muted-foreground">
                <HelpCircle size={12} className="shrink-0 mt-0.5 opacity-50" />
                <p className="text-[9px] leading-relaxed text-left opacity-80">
                    Metodología: Impacto social calculado a partir de 2.82 familiares directos por víctima en Colombia. Pérdida del PIB anual del 1.5% al 3% (OMS/BID) adaptado al volumen proporcional seleccionado. Costos de salud basados en el consolidado nacional de reclamaciones SOAT. Los calculos son aproximados a partir de las cifras oficiales.
                </p>
            </div>

        </div>
    );
}