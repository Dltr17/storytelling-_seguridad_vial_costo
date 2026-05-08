
import ScrollytellingLayout from "./components/layout/ScrollytellingLayout";
import { 
  Portada, 
  Inmersion, 
  AgenciaCifra, 
  RetornoCiegos, 
  ImpactoCrudeza, 
  DespertarEtico, 
  ContextoAcademico,
  FichaTecnica
} from './components/sections';


function App() {
  return (
    <main className="selection:bg-vial-red selection:text-white">

      <div className="fixed bottom-4 right-6 z-50">
        <ContextoAcademico />
        <FichaTecnica />
      </div>
      <ScrollytellingLayout>
        <Portada />
        <Inmersion />
        <RetornoCiegos />
        <ImpactoCrudeza />

        <AgenciaCifra />
        <DespertarEtico />
      </ScrollytellingLayout>
    </main>
  );
}

export default App;