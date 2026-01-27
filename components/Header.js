import { useEffect, useState } from 'react';

export default function Header() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    // 1. Selezioniamo ENTRAMBE le sezioni che devono avere l'header bianco
    const whoSection = document.getElementById('who-section');
    const interviewSection = document.getElementById('interview-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Se una di queste sezioni è visibile (isIntersecting è true), invertiamo i colori.
          // Se smette di essere visibile, l'header torna normale.
          if (entry.isIntersecting) {
            setInverted(true);
          } else {
            setInverted(false);
          }
        });
      },
      {
        threshold: 0.4, // Scatta quando il 40% della sezione è visibile
      }
    );

    // 2. Diciamo all'observer di controllare entrambe (se esistono)
    if (whoSection) observer.observe(whoSection);
    if (interviewSection) observer.observe(interviewSection);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header ${inverted ? 'header--inverted' : ''}`}>
      <div className="header-item">
        <a href="/">
          <p className="textH">A servizio degli altri - Vittime del dovere</p>
        </a>
      </div>
    </header>
  );
}