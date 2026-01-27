import React, { useState } from 'react';

export default function Footer() {
  // Logica email esistente (lasciata intatta)
  const [email, setEmail] = useState('');
  const [contenuto, setContenuto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !contenuto) {
      setMessage('Per favore, compila tutti i campi.');
      return;
    }
  };

  // === LISTA NOMI ===
  const professoressa = "Prof.ssa Milena Bodigoi";
  const studenti = [
    "Daniel Argenti", "Nicole Benevolo", "Davide Bertotti",
    "Francesco Bittolo Bon", "Veronica Braico", "Giulia Coloni",
    "Giovanni Contardo", "Francesca Forlin", "Giovanni Manià",
    "Vittoria Migliozzi", "Alessandro Murgia", "Chiara Poliaghi",
    "Leonardo Rosato", "Lia Sartori", "Adam Subotic", 
    "Giacomo Tamaro", "Federico Tessarin"
  ];

  return (
    <footer className="footer">
      <div className="footerContent">
        
        <div className="footerGrid">
          
          {/* COLONNA 1: Mappa e Indirizzo */}
          <div className="footerColumn">
            <h3 className="footerTitle">Dove siamo</h3>
            <p className="footerAddress">
              <strong>Liceo Scientifico Guglielmo Oberdan</strong><br/>
              Via P. Veronese, 1<br/>
              34144 Trieste (TS)
            </p>
            
            <div className="mapContainer" style={{ backgroundColor: '#e0e0e0' }}>
              <iframe 
                title="Mappa Liceo Oberdan"
                width="100%" 
                height="250" 
                style={{ border: 0, borderRadius: '12px' }} 
                src="https://maps.google.com/maps?q=Liceo+Scientifico+Guglielmo+Oberdan+Trieste&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
              >
              </iframe>
            </div>
          </div>

          {/* COLONNA 2: Crediti (Classe e Prof) */}
          <div className="footerColumn">
            <h3 className="footerTitle">Il Team - Classe 3C</h3>
            
            <div className="creditsWrapper">
              <div className="teacherBox">
                <span className="role">Coordinamento:</span>
                <span className="name">{professoressa}</span>
              </div>

              <div className="studentsGrid">
                {studenti.map((nome, index) => (
                  <span key={index} className="studentName">{nome}</span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Sezione Legale e Copyright */}
        <div className="footerInfo">
          <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '2rem 0' }} />
          <p>
            © {new Date().getFullYear()} Ideato, progettato e realizzato interamente <br/>
            dalla classe 3C del Liceo Oberdan, Trieste
          </p>

          {/* === LINK IUBENDA === */}
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a 
              href="https://www.iubenda.com/privacy-policy/69440163" 
              className="iubenda-white iubenda-noiframe iubenda-embed" 
              title="Privacy Policy"
              style={{ textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.iubenda.com/privacy-policy/69440163/cookie-policy" 
              className="iubenda-white iubenda-noiframe iubenda-embed" 
              title="Cookie Policy"
              style={{ textDecoration: 'none', fontSize: '0.9rem', opacity: 0.8 }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}