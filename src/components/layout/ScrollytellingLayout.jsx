
import { useInView } from 'react-intersection-observer';
import { Share2, Compass } from 'lucide-react';
import React, { useState } from 'react';

export default function ScrollytellingLayout({ children }) {
  const [activeSection, setActiveSection] = useState(1);

  // Convertimos los hijos en un array para saber cuántas secciones hay
  const childrenArray = React.Children.toArray(children);
  const totalSections = childrenArray.length;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="narrative-layout-centered">
      
      {/* NAVBAR DINÁMICO */}
      <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-2 font-bold text-sm tracking-tight text-foreground/90">
            <Compass className="h-5 w-5 text-vial-red animate-pulse" />
            <span className="uppercase tracking-widest text-xs">Lo que Colombia pierde con cada muerte en la vía</span>
          </div>

          {/* Menú generado dinámicamente según el número de hijos */}
          <nav className="flex items-center gap-1 md:gap-3">
            <span className="text-xs uppercase tracking-wider text-muted-foreground mr-2 hidden sm:inline">
              Secciones:
            </span>
            {Array.from({ length: totalSections }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => scrollToSection(`step-${num}`)}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer
                  ${activeSection === num 
                    ? 'bg-vial-red text-white scale-110 shadow-sm' 
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
              >
                {num}
              </button>
            ))}
          </nav>

          <button className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* FLUJO DE LA NARRATIVA */}
      <main className="narrative-stream">
        {childrenArray.map((child, index) => {
          const stepNumber = index + 1;
          return (
            <ObservedSection
              key={stepNumber}
              id={`step-${stepNumber}`}
              index={stepNumber}
              setActive={setActiveSection}
            >
              {child}
            </ObservedSection>
          );
        })}
      </main>
    </div>
  );
}

// Subcomponente que observa de manera aislada cada sección
function ObservedSection({ id, index, setActive, children }) {
  const { ref } = useInView({
    threshold: 0.35, // Se activa cuando el 35% de la sección es visible
    onChange: (inView) => {
      if (inView) {
        setActive(index);
      }
    }
  });

  return (
    <section id={id} ref={ref} className="narrative-step">
      {children}
    </section>
  );
}