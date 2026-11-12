import { useState, useEffect } from 'react';
import './App.css'; 

function WidgetsGTA() {
  const [timeLeft, setTimeLeft] = useState('00:00:00');
  const [starTick, setStarTick] = useState(0);

  // EFECTO 1: Cuenta regresiva hasta el 19 Nov 2026 a las 00:00
  useEffect(() => {
    const targetDate = new Date('2026-11-19T00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft('00:00:00');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const fH = String(hours).padStart(2, '0');
        const fM = String(minutes).padStart(2, '0');
        const fS = String(seconds).padStart(2, '0');
        
        setTimeLeft(days > 0 ? `${days}d ${fH}:${fM}:${fS}` : `${fH}:${fM}:${fS}`);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // EFECTO 2: Lógica de las 6 estrellas (Ciclo total de 46 segundos)
  useEffect(() => {
    const starTimer = setInterval(() => {
      setStarTick(prev => (prev + 1) % 46);
    }, 1000);
    
    return () => clearInterval(starTimer);
  }, []);

  let filledCount = 1;
  let starClass = 'widget-estrellas';

  if (starTick < 25) {
    filledCount = Math.floor(starTick / 5) + 1;
  } else if (starTick >= 25 && starTick < 31) {
    filledCount = 6;
  } else if (starTick >= 31 && starTick < 36) {
    filledCount = 6;
    starClass += ' blink-normal';
  } else if (starTick >= 36 && starTick < 41) {
    filledCount = 6;
    starClass += ' blink-fast';
  } else if (starTick >= 41) {
    filledCount = 6;
    starClass += ' hidden';
  }

  return (
    <div className="widgets-gta-container">
      
      {/* Esquina Izquierda: Contador */}
      <div className="widget-contador">
        <svg width="42" height="28" viewBox="-5 -5 150 70" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="gta-palm">
              <rect x="-10" y="-10" width="160" height="80" fill="white" />
              <path d="M 40 60 Q 45 30 60 -2 h -6 Q 40 30 34 60 Z" fill="black" />
              <path d="M 55 10 Q 30 5 10 20 Q 30 20 52 18 Z" fill="black" />
              <path d="M 50 20 Q 25 30 15 45 Q 35 40 45 28 Z" fill="black" />
              <path d="M 58 10 Q 75 0 90 10 Q 75 15 62 16 Z" fill="black" />
              <path d="M 120 60 Q 115 30 105 -2 h 6 Q 120 30 126 60 Z" fill="black" />
              <path d="M 112 15 Q 130 15 140 25 Q 125 25 116 20 Z" fill="black" />
              <path d="M 116 25 Q 125 35 135 50 Q 120 40 118 35 Z" fill="black" />
            </mask>
          </defs>
          <path d="M 0 0 L 30 0 L 45 45 L 60 0 L 90 0 L 70 60 L 20 60 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" />
          <path d="M 100 0 L 130 0 L 130 60 L 100 60 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="miter" />
          <g mask="url(#gta-palm)">
              <path d="M 0 0 L 30 0 L 45 45 L 60 0 L 90 0 L 70 60 L 20 60 Z" fill="currentColor" transform="translate(45,30) scale(0.83) translate(-45,-30)" />
              <path d="M 100 0 L 130 0 L 130 60 L 100 60 Z" fill="currentColor" transform="translate(115,30) scale(0.83) translate(-115,-30)" />
          </g>
        </svg>
        <span>{timeLeft}</span>
      </div>

      {/* Esquina Derecha: Estado de Juego (Arma React + Estrellas) */}
      <div className="widget-juego">
        
        {/* HUD de Arma: Viñeta compacta centrada */}
        <div className="gta-weapon-box">
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Caja de la viñeta (Proporción compacta con borde grueso) */}
            <rect x="10" y="10" width="100" height="70" rx="14" fill="#CFFFD6" stroke="#ffcff8" strokeWidth="4" />
            
            {/* Grupo del logo de React centrado y sobresaliendo */}
            <g transform="translate(60, 45) scale(0.7) translate(-50, -50)">
              
              {/* Capa Base 1: Trazo negro extra grueso (sombra/pegatina) */}
              <g stroke="#9E2B8E " strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" />
                <circle cx="50" cy="50" r="14" fill="#9E2B8E " />
              </g>

              {/* Capa Superior 2: Logo de React en blanco puro */}
              <g stroke="#ffcff8" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" />
                <circle cx="50" cy="50" r="8" fill="#ffcff8" />
              </g>

            </g>
          </svg>
        </div>

        {/* Las 6 estrellas dinámicas debajo */}
        <div className={starClass}>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <svg key={num} width="28" height="28" viewBox="0 0 24 24" 
                 fill={num <= filledCount ? "currentColor" : "none"} 
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>

      </div>
      
    </div>
  );
}

export default WidgetsGTA;