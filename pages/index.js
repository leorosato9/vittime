import { useState } from 'react'; // <--- IMPORTANTE: Importa useState
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import GameQuiz from '../components/Gamequiz';

export default function HomePage() {
  
  // Stato per gestire la riproduzione del video
  const [showVideo, setShowVideo] = useState(false);

  // Funzione unica per gestire lo scroll verso qualsiasi sezione
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <Head>
        <title>Fedeltà, altruismo e senso del dovere</title>
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

        
        {/* === HERO SECTION === */}
        <div className="Title">
          <div className="TitleLeft">
            <h2 className="BigTitle">Vittime del dovere</h2>
            <h3 className="BigSubtitle">
              Storie di uomini e donne che hanno servito lo Stato fino all’estremo sacrificio
            </h3>
          </div>

          <div className="TitleRight">
            <div className="HeroImageWrapper">
              <img src="/home.jpeg" alt="Vittime del dovere" className="HeroImage homeImage" />
              
              <div className="CaptionUnder">
                <p className="CaptionText">La nostra intervista a una vittima del dovere</p>
                <button className="CaptionLink" onClick={() => scrollToSection('interview-section')}>
                  Vai all'intervista <span className="Arrow">↓</span>
                </button>
              </div>
            </div>
          </div>

          {/* MODIFICATO: La freccia ora porta alla nuova sezione art54 */}
          <div className="ScrollHint" onClick={() => scrollToSection('art54-section')}>
            <img src="/chevron.png" alt="Scorri" />
          </div>
        </div>


        {/* === NUOVA SEZIONE: ARTICOLO 54 === */}
        <section className="Slide artslide" id="art54-section">
          <div className="SlideLeft">
            <h2>
              Fedeltà allo stato e sacrificio: il valore delle vittime del dovere nella costruzione di una società giusta
            </h2>
            
            <div className="SlideText" style={{ fontSize: '1.3rem', marginTop: '2rem' }}>
              <p>
                "Tutti i cittadini hanno il dovere di essere fedeli alla Repubblica e di osservarne la Costituzione e le leggi. <br></br> I cittadini cui sono affidate funzioni pubbliche hanno il dovere di adempierle con disciplina e onore, prestando giuramento nei casi stabiliti dalla legge"
              </p>
              <p className='cost'>
                Art. 54, Costituzione Italiana
              </p>
            </div>
          </div>

          {/* Freccia che porta alla sezione successiva (Chi sono) */}
          <div
            className="ScrollHint"
            onClick={() => scrollToSection('who-section')}
          >
            <img src="/chevron.png" alt="Scorri" />
          </div>
        </section>


        {/* === WHO SECTION === */}
        <section className="Slide Slide--dark" id="who-section">
          <div className="SlideLeft">
            <h2 className="SlideTitle">Chi sono le vittime del dovere?</h2>
            <p className="SlideText">
Le vittime del dovere sono uomini e donne che hanno perso la vita o riportato gravi lesioni servendo lo Stato in contesti di rischio. Hanno protetto la collettività in situazioni di emergenza, trasformando l'impegno professionale in una scelta di responsabilità superiore.

Molti di loro hanno agito con dedizione e umiltà, lontano dai riflettori. Ricordarli significa riconoscere il valore di chi ha anteposto il bene comune alla propria incolumità.
            </p>
          </div>

          <div
            className="ScrollHint ScrollHint--light"
            onClick={() => scrollToSection('game-section')}
          >
            <img src="/chevron.png" alt="Scorri" />
          </div>
        </section>

        {/* === GAME SECTION === */}
        <section className="Slide" id="game-section">
          <div className="Game">
            <h1 className="GameTitle">Chi interviene?</h1>
            <GameQuiz />
          </div>

          <div
            className="ScrollHint"
            onClick={() => scrollToSection('interview-section')}
          >
            <img src="/chevron.png" alt="Scorri" />
          </div>
        </section>

        {/* === VIDEO SECTION === */}
        <section className="Slide Slide--dark"  id="interview-section">
          <div className="VideoLayout">
            <div className="VideoInfo">
              <h1 className="SlideTitle">La nostra intervista</h1>

              <div className="TickerContainer">
                <div className="TickerWrapper">
                  <div className="TickerTrack">
                    {/* Prima copia */}
                    <span className="TickerItem">"Per dare assistenza alla popolazione che al momento era dilaniata"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Tutt'era tranne che un ospedale, perché non c'era niente"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non è stata una disgrazia, ma un attacco programmato"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Avevamo notizie che sarebbe accaduto qualcosa..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"L'obiettivo delle milizie di questi attentatori eravamo noi"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non ci aspettavamo un attacco cosi, un attacco direttamente alla base"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non ricordo se sono riuscito ad andare giù, o se è stata l'onda d'urto a buttarmi a terra..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"...dell'esplosione ricordo il prima e il dopo"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non sentivo nulla"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Si sono fatti esplodere..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Ci ha dato una sveglia"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Credete nelle missioni di pace"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Sarebbe da pazzi credere nelle guerre..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non andare lì a credere di essere salvatori"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Leggete e informatevi"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non leggete soltanto da un giornale"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Informatevi quanto più possibile"</span>
                    <span className="TickerSeparator">•</span>

                    {/* Seconda copia per loop */}
                    <span className="TickerItem">"Per dare assistenza alla popolazione che al momento era dilaniata"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Tutt'era tranne che un ospedale, perché non c'era niente"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non è stata una disgrazia, ma un attacco programmato"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Avevamo notizie che sarebbe accaduto qualcosa..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"L'obiettivo delle milizie di questi attentatori eravamo noi"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non ci aspettavamo un attacco cosi, un attacco direttamente alla base"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non ricordo se sono riuscito ad andare giù, o se è stata l'onda d'urto a buttarmi a terra..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"...dell'esplosione ricordo il prima e il dopo"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non sentivo nulla"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Si sono fatti esplodere..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Ci ha dato una sveglia"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Credete nelle missioni di pace"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Sarebbe da pazzi credere nelle guerre..."</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non andare lì a credere di essere salvatori"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Leggete e informatevi"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Non leggete soltanto da un giornale"</span>
                    <span className="TickerSeparator">•</span>
                    <span className="TickerItem">"Informatevi quanto più possibile"</span>
                    <span className="TickerSeparator">•</span>
                  </div>
                </div>
              </div>
            </div>
            
<div className="VideoWrapper">
              {/* LOGICA: Se showVideo è falso, mostro la copertina. Se è vero, mostro YouTube */}
              {!showVideo ? (
                <div 
                  className="VideoCover" 
                  onClick={() => setShowVideo(true)}
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    aspectRatio: '16/9', 
                    backgroundImage: "url('/video.jpeg')", // <--- CAMBIA QUI CON LA TUA IMMAGINE DI COPERTINA
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20px' // Stesso raggio del wrapper
                  }}
                >
                  {/* Finto tasto Play */}
                  <div style={{
                    width: '80px',
                    height: '55px',
                    backgroundColor: '#FF0000',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                  }}>
                    <div style={{
                      width: 0, 
                      height: 0, 
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '18px solid white'
                    }}></div>
                  </div>
                </div>
              ) : (
                <iframe 
                  className="StyledVideo"
                  // AGGIUNTO &autoplay=1 per farlo partire appena si clicca la copertina
                  src="https://www.youtube.com/embed/GyVPSKXxo0o?autoplay=1&modestbranding=1&rel=0" 
                  title="Intervista YouTube"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  style={{ width: '100%', aspectRatio: '16/9' }}
                ></iframe>
              )}
            </div>
          </div>

          <div className="ScrollHint ScrollHint--light" onClick={() => scrollToSection('intro-section')}>
            <img src="/chevron.png" alt="Scorri" />
          </div>
        </section>

        {/* === BOXES GRID === */}
        <div className="introduction" id="intro-section">
          <h1 className="homeTitle">Conoscere per ricordare</h1>
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
              <div className="boxOverlay"><h2>Polizia penitenziaria</h2></div>
            </a>
          </Link>

          <Link href="/aeronautica" passHref legacyBehavior>
            <a className="boxCard" style={{ backgroundImage: "url('/aeronautica.jpg')" }}>
              <div className="boxOverlay"><h2>Aeronautica militare</h2></div>
            </a>
          </Link>

          <Link href="/locale" passHref legacyBehavior>
            <a className="boxCard" style={{ backgroundImage: "url('/locale.jpg')" }}>
              <div className="boxOverlay"><h2>Polizia locale</h2></div>
            </a>
          </Link>

        </div>
      </div>

      <Footer />
    </>
  );
}