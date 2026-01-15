import { useEffect, useState } from 'react';

export default function Header() {
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const section = document.getElementById('who-section');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInverted(entry.isIntersecting);
      },
      {
        threshold: 0.4, // quando almeno il 40% della slide è visibile
      }
    );

    observer.observe(section);

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