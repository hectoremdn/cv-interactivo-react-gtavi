import './App.css'
import WidgetsGTA from './WidgetsGTA';

function App() {
  return (
    <>
      <WidgetsGTA />
      
      <div className="contenedor-principal">
        {/* Header */}
        <div className="header">
          <img
            src="/hector_for_dni_3.png"
            alt="Mi foto"
            className="foto-perfil"
          />

          <div className="header-texto">
            <h1>Héctor Reyes Medina</h1>
            <h2>Intern Software Developer</h2>

            <div className="contacto-info">
              <div className="contacto-fila">
                <span className="contacto-item">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  hector2004rm@gmail.com
                </span>
                <span className="contacto-item">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  672-380-928
                </span>
                <span className="contacto-item">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Zaragoza, España
                </span>
              </div>

              <div className="contacto-fila">
                <span className="contacto-item">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <a href="https://www.linkedin.com/in/hectoremdn/" target="_blank" rel="noreferrer">in/hectoremdn</a>
                </span>
                <span className="contacto-item">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <a href="https://github.com/hectoremdn" target="_blank" rel="noreferrer">gh/hectoremdn</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-body">
          {/* COLUMNA IZQUIERDA */}
          <div className="columna-principal">
            <div className="seccion">
              <h2 className="titulo-seccion">Sobre Mí</h2>
              <p>Estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM) en modalidad FP Dual. Poseo un perfil híbrido que combina la formación técnica con una sólida trayectoria en diseño corporativo y trato con el cliente.</p>
              <p>Extrovertido, social y con ambición, motivado por aplicar mis conocimientos en programación o bases de datos directamente en proyectos reales. Aporto una visión integral que une la eficiencia del código con la experiencia de usuario, respaldada por una actitud proactiva, rápida adaptación y capacidad para gestionar el estrés y resolver problemas de forma ágil y autónoma.</p>
            </div>
            <div className="seccion">
              <h2 className="titulo-seccion">Experiencia Laboral</h2>
              <div className="item-experiencia">
                <h3>Desarrollador Web (FP Dual Intensiva)</h3>
                <p className="empresa">rIL Estudio</p>
                <p className="periodo">Septiembre 2026 - Presente</p>
                <p>Desarrollo de módulos funcionales y maquetación de interfaces responsivas utilizando frameworks modernos (PHP/Laravel) y consumo de bases de datos MySQL/MariaDB.</p>
              </div>
              <div className="item-experiencia">
                <h3>Diseñador Gráfico UI/UX</h3>
                <p className="empresa">Freelance / Proyectos Corporativos</p>
                <p className="periodo">2023 - 2025</p>
                <p>Diseño orientado a branding y maquetación comercial. Gestión integral del branding del centenario del C.D. Peña Azagresa y rediseño de packaging para líneas de Mercadona.</p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="columna-secundaria">
            <div className="seccion">
              <h2 className="titulo-seccion">Educación</h2>
              <div className="item-experiencia">
                <h3>C.F.G.S. Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                <p className="empresa">CPIFP Los Enlaces</p>
                <p className="periodo">2025 - Actualidad</p>
              </div>
              <div className="item-experiencia">
                <h3>C.F.G.S. Animación y Audiovisuales / Diseño Interactivo</h3>
                <p className="empresa">EASDI Corella</p>
                <p className="periodo">2020 - 2024</p>
              </div>
            </div>
            <div className="seccion">
              <h2 className="titulo-seccion">Habilidades</h2>
              <div className="lista-habilidades">
                <div className="habilidad">PHP & Laravel</div>
                <div className="habilidad">Java (POO)</div>
                <div className="habilidad">SQL & BBDD</div>
                <div className="habilidad">HTML5, CSS3, XML</div>
                <div className="habilidad">React & JavaScript</div>
                <div className="habilidad">Adobe Photoshop & Illustrator</div>
                <div className="habilidad">Trabajo en Equipo</div>
                <div className="habilidad">Resolución de Problemas</div>
                <div className="habilidad">Capacidad de Autoaprendizaje</div>
              </div>
            </div>
            <div className="seccion">
              <h2 className="titulo-seccion">Idiomas</h2>
              <div className="item-experiencia">
                <h3>Español</h3>
                <p className="empresa">Nativo (C2)</p>
              </div>
              <div className="item-experiencia">
                <h3>Inglés</h3>
                <p className="empresa">Avanzado Técnico (B2/C1)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;