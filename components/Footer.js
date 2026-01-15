import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [contenuto, setContenuto] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !contenuto) {
      setMessage('Per favore, compila tutti i campi.');
      return;
    }

    try {
      const response = await fetch('http://enotecamorbin.it/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, contenuto }),
      });

      if (response.ok) {
        setMessage('Messaggio inviato con successo! Ti risponderemo al più presto!');
        setEmail('');
        setContenuto('');
      } else {
        setMessage('Errore durante l\'invio del messaggio. Riprova.');
      }
    } catch (error) {
      console.error('Errore:', error);
      setMessage('Errore di connessione. Riprova più tardi.');
    }
  };

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerTopRow">
          {/* Contenuto opzionale per la riga superiore */}
        </div>
        <div className="footerInfo">
          <p>
            &copy; {new Date().getFullYear()} Ideato, progettato e realizzato interamente <br></br>dalla classe 3C del Liceo Oberdan, Trieste
          </p> <br></br> <br></br> <br></br> <br></br>
        </div>
      </div>
    </footer>
  );
}