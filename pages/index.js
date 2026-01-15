import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import GameQuiz from '../components/Gamequiz';

export default function HomePage() {
const handleScroll = () => {
  const target = document.getElementById('who-section');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
  
};

  return (
    <>
      <Head>
        <title>La nostra visita ad Aquileia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

<div className="Title">
  <div className="TitleLeft">
    <h2 className="BigTitle">Vittime del dovere</h2>
    <h3 className="BigSubtitle">
      Storie di uomini e donne che hanno servito lo Stato fino all’estremo sacrificio
    </h3>
  </div>

  <div className="ScrollHint" onClick={handleScroll}>
    <img src="/chevron.png" alt="Scorri" />
  </div>
</div>

<section className="Slide Slide--dark" id="who-section">
  <div className="SlideLeft">
    <h2 className="SlideTitle">Chi sono le vittime del dovere?</h2>
    <p className="SlideText">
      Le vittime del dovere sono uomini e donne dello Stato che hanno perso la vita o riportato gravi conseguenze mentre svolgevano il proprio servizio in contesti di rischio.
      Hanno operato per proteggere gli altri, spesso in situazioni di emergenza, pericolo o forte pressione.
      Il loro impegno non si è limitato a un ruolo professionale, ma è stato una scelta di responsabilità e servizio.
      Molti di loro hanno agito lontano dai riflettori, senza clamore, facendo semplicemente il proprio dovere.
      Ricordarli significa riconoscere il valore di chi ha messo il bene comune davanti a tutto.
    </p>
  </div>

  <div
    className="ScrollHint ScrollHint--light"
    onClick={() => {
      const t = document.getElementById('game-section');
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <img src="/chevron.png" alt="Scorri" />
  </div>
</section>

<section className="Slide" id="game-section">
  <div className="Game">
    <h2 className="GameTitle">Chi interviene?</h2>

    <GameQuiz />
  </div>

  <div
    className="ScrollHint"
    onClick={() => {
      const t = document.getElementById('intro-section');
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    <img src="/chevron.png" alt="Scorri" />
  </div>
</section>




        <div className="introduction" id="intro-section">
          <h2 className="homeTitle">Conoscere per ricordare</h2>
        </div>

<div className="boxesGrid">
  <Link href="/carabinieri" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/carabinieri.jpeg')" }}>
      <div className="boxOverlay"><h2>Arma dei Carabinieri</h2></div>
    </a>
  </Link>

  <Link href="/esercito" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/esercito.jpg')" }}>
      <div className="boxOverlay"><h2>Esercito</h2></div>
    </a>
  </Link>

  <Link href="/finanza" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/finanza.jpg')" }}>
      <div className="boxOverlay"><h2>Guardia di Finanza</h2></div>
    </a>
  </Link>

  <Link href="/polizia" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/polizia.jpg')" }}>
      <div className="boxOverlay"><h2>Polizia di Stato</h2></div>
    </a>
  </Link>

  <Link href="/marina" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/marina.jpg')" }}>
      <div className="boxOverlay"><h2>Marina militare</h2></div>
    </a>
  </Link>

  <Link href="/pompieri" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/pompieri.jpg')" }}>
      <div className="boxOverlay"><h2>Vigili del Fuoco</h2></div>
    </a>
  </Link>

  <Link href="/penitenziaria" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/penitenziaria.jpg')" }}>
      <div className="boxOverlay"><h2>Polizia Penitenziaria</h2></div>
    </a>
  </Link>

  <Link href="/box8" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/box8.jpg')" }}>
      <div className="boxOverlay"><h2>Box 8</h2></div>
    </a>
  </Link>

  <Link href="/box9" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/box9.jpg')" }}>
      <div className="boxOverlay"><h2>Box 9</h2></div>
    </a>
  </Link>

  <Link href="/box10" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/box10.jpg')" }}>
      <div className="boxOverlay"><h2>Box 10</h2></div>
    </a>
  </Link>

  <Link href="/box11" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/box11.jpg')" }}>
      <div className="boxOverlay"><h2>Box 11</h2></div>
    </a>
  </Link>

  <Link href="/box12" passHref legacyBehavior>
    <a className="boxCard" style={{ backgroundImage: "url('/box12.jpg')" }}>
      <div className="boxOverlay"><h2>Box 12</h2></div>
    </a>
  </Link>
</div>
</div>

      <Footer />
    </>
  );
}