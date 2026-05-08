# La Cuenta de la Imprudencia: Lo que Colombia pierde con cada muerte en la vía

[![Netlify](https://api.netlify.com/api/v1/badges/e8e8e8e8-e8e8-e8e8-e8e8-e8e8e8e8e8e8/deploy-status)](https://diegolotero-seguridadvial.netlify.app/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=Vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=React&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Especial interactivo de **Scrollytelling** y visualización de datos desarrollado para la **Maestría en Comunicación, Culturas Digitales y Visualización de Datos**. Este proyecto busca visibilizar de manera crítica, ética y rigurosa el impacto social, familiar y los costos económicos ocultos de la siniestralidad vial en Colombia, confrontando la "ceguera colectiva" frente a las cifras frías de tránsito.

🔗 **Proyecto en Vivo:** [https://diegolotero-seguridadvial.netlify.app/](https://diegolotero-seguridadvial.netlify.app/)

---

## 📌 Enfoque Conceptual e Investigación

El proyecto se estructura metodológicamente bajo la premisa de transmutar la estadística abstracta y normalizada en micro-realidades humanas situadas en el territorio nacional. 

* **El Anclaje Filosófico:** Inspirado en el *Ensayo sobre la ceguera* de José Saramago ("ciegos que, viendo, no ven"), el scrollytelling confronta la anestesia mediática y la infoxicación cotidiana de las noticias de tránsito.
* **La Cuenta de la Imprudencia (Costos Ocultos):** Basado en el marco técnico de la Agencia Nacional de Seguridad Vial y el estudio preliminar de *Pulido et al. (2025)*, se evidencian pérdidas anuales equivalentes a entre el **1.5% y el 3% del Producto Interno Bruto (PIB)** en Colombia (entre $27.8 y $55.6 billones de pesos), desagregados en dimensiones que usualmente el debate público ignora:
  * Saturación y costos logísticos de redes de salud primarias en la ruralidad.
  * Procesos de restablecimiento de derechos y custodia de menores huérfanos.
  * Desestructuración del núcleo económico familiar y pérdida de micronegocios locales.
  * Costos de peritaje y reconstrucción forense por fallos de infraestructura estatal.

---

## 🛠️ Arquitectura Tecnológica y Optimización

Este desarrollo web se concibió como una SPA (Single Page Application) ligera, de carga inmediata y alto rendimiento en dispositivos móviles.

* **Frontend Framework:** React 18 + Vite (Compilación optimizada de producción en **1.5 segundos**).
* **Estilos y Maquetación:** Tailwind CSS + Variables de Marca (Diseño de interfaz oscuro `bg-zinc-950` con tipografía legible y acentos cromáticos).
* **Iconografía Dinámica:** `lucide-react` importado de manera estructurada para optimizar el bundle mediante *Tree Shaking*.
* **Control de Estado Robusto:** Inicialización en `null` para evitar la precarga innecesaria de iFrames de YouTube, guiando al usuario mediante un llamado interactivo inicial.
* **Web Share API integrada:** Botón de compartir nativo en entornos móviles y fallback dinámico de copiado al portapapeles en escritorio.

---
