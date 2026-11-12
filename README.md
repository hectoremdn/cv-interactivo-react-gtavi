# CV Interactivo & Portfolio - Estilo GTA VI (React + Vite)

Este proyecto consiste en un Curriculum Vitae y portfolio web interactivo desarrollado con **React**, **Vite** y **CSS3**, personalizado con una interfaz temática inspirada en el sistema Heads-Up Display (HUD) y la estética visual de **Grand Theft Auto VI (GTA VI)**.

---

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Uso de Inteligencia Artificial (IA)](#uso-de-inteligencia-artificial-ia)
   - [Contexto del Proyecto](#contexto-del-proyecto)
   - [Widget 1: Contador Regresivo GTA VI](#widget-1-contador-regresivo-gta-vi)
   - [Widget 2: Viñeta de Arma React 3D & Nivel de Búsqueda (Estrellas)](#widget-2-viñeta-de-arma-react-3d--nivel-de-búsqueda-estrellas)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Compilación para Producción](#compilación-para-producción)
7. [Autor](#autor)

---

## 🚀 Descripción General

El proyecto combina una presentación profesional formal (datos de contacto, sobre mí, experiencia, formación y proyectos) con elementos dinámicos en capas superpuestas (*overlay*) que imitan la interfaz gráfica del futuro videojuego GTA VI. 

Esta fusión busca reflejar una doble faceta profesional: la solidez técnica como estudiante y desarrollador en **Desarrollo de Aplicaciones Multiplataforma (DAM)** y el perfil creativo en diseño corporativo y maquetación web.

---

## 🛠️ Tecnologías Utilizadas

- **React 18**: Librería principal para la construcción de la interfaz por componentes.
- **Vite**: Entorno de desarrollo rápido y empaquetador de módulos.
- **JavaScript (ES6+)**: Lógica de los widgets dinámicos, temporizadores y manejo de estado con React Hooks (`useState`, `useEffect`).
- **SVG Vectorial**: Gráficos incrustados y escalables a medida para la palmera temática del contador, la viñeta de arma estilo HUD y el logo 3D con sombras compuestas.
- **CSS3 Puro**: Estilizado receptivo, efectos de desenfoque (`backdrop-filter`), animaciones parpadeantes (`keyframes`) y posicionamiento fijo `overlay`.

---

## 📁 Estructura del Proyecto

```text
.
├── public/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos
│   ├── App.jsx          # Componente principal que integra el CV y los widgets
│   ├── App.css          # Estilos globales y maquetación del HUD
│   ├── WidgetsGTA.jsx   # Componente dinámico de los widgets de GTA VI
│   └── main.jsx         # Punto de entrada de React
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🤖 Uso de Inteligencia Artificial (IA)

En el marco del desarrollo de este proyecto, se ha utilizado la **Inteligencia Artificial** como herramienta de co-creación, asistencia técnica en el cálculo de SVG y optimización de componentes interactivos. 

### Contexto del Proyecto
El objetivo de integrar estos widgets es enriquecer la experiencia visual del usuario situando al observador dentro de un entorno inmersivo basado en la iconografía de Vice City / GTA VI, sin interferir con la legibilidad del contenido del CV.

### Widget 1: Contador Regresivo GTA VI (Esquina Superior Izquierda)
- **Función:** Muestra un temporizador dinámico en tiempo real que realiza la cuenta atrás hasta la fecha estimada de lanzamiento de GTA VI (19 de noviembre de 2026 a las 00:00).
- **Desarrollo asistido por IA:** 
  - La IA ayudó en la programación de la lógica en JavaScript mediante `setInterval` dentro del hook `useEffect` de React, garantizando la conversión correcta de milisegundos a días, horas, minutos y segundos (`d hh:mm:ss`), así como en la limpieza de la memoria (*cleanup function*).
  - Adicionalmente, se generó un vector **SVG** personalizado que reproduce la palmera estilizada del logo oficial de GTA VI incrustada dentro del texto `VI`.

### Widget 2: Viñeta de Arma React 3D & Nivel de Búsqueda (Esquina Superior Derecha)
- **Función:** Representa el HUD clásico del juego donde habitualmente se muestra el arma equipada y el nivel de búsqueda (*wanted level*):
  - **Viñeta de Arma:** En lugar de un arma de fuego convencional, se diseñó una caja con borde grueso estilo selección de armas de GTA que contiene un **logo tridimensional de React sobresaliente**, simbolizando a React como el "arma principal" del desarrollador.
  - **Las 6 Estrellas Dinámicas:** Simulan el nivel de búsqueda con un ciclo automatizado de **46 segundos**:
    1. **Fase de incremento progresivo (0s a 25s):** Se enciende 1 estrella cada 5 segundos hasta alcanzar 6.
    2. **Fase fija (25s a 31s):** Las 6 estrellas permanecen fijas iluminadas.
    3. **Fase de parpadeo normal (31s a 36s):** Parpadean simulando alerta policial.
    4. **Fase de parpadeo rápido (36s a 41s):** Parpadean a mayor frecuencia.
    5. **Fase de desaparición (41s a 46s):** Se ocultan simulando que se ha evadido el nivel de búsqueda, tras lo cual el ciclo vuelve a comenzar.
- **Desarrollo asistido por IA:** 
  - La IA diseñó la estructura SVG de doble capa (trazo base negro grueso para lograr el efecto "pegatina/3D" + trazo superior blanco en contraste) alineando los vectores para que sobresalgan armónicamente de la viñeta.
  - Creación de la máquina de estados dentro de React para gestionar el temporizador del ciclo de 46 segundos y la sincronización de las clases CSS de animación de las estrellas.

---

## 🔧 Instalación y Configuración

Sigue estos pasos para clonar y ejecutar el proyecto localmente en tu equipo:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/NOMBRE-DE-TU-REPO.git
   ```

2. **Acceder a la carpeta del proyecto:**
   ```bash
   cd NOMBRE-DE-TU-REPO
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abrir el navegador e ingresar a la dirección que indica la terminal (usualmente `http://localhost:5173/`).

---

## 📦 Compilación para Producción

Para generar los archivos optimizados de producción:

```bash
npm run build
```

Los archivos compilados se generarán dentro del directorio `dist/`, listos para ser desplegados en plataformas como Vercel, Netlify o GitHub Pages.

---

## 👤 Autor

**Héctor Reyes Medina**  
*Intern Software Developer / Estudiante de DAM (Desarrollo de Aplicaciones Multiplataforma)*
- **GitHub:** [hectoremdn](https://github.com/hectoremdn)
- **LinkedIn:** [hecctorrm](https://linkedin.com/in/hecctorrm)