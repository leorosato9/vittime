import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MosaiciPage() {
  return (
    <>
      <Head>
        <title>I Mosaici ad Aquileia</title>
      </Head>

      <Header />

      <main className="slugContainer">
        <div style={{ margin: '0 10vw' }}>
          <div className="slugTop">
            <div>
              <h1 className='slugTitle'>I Mosaici</h1>
              <h2 className="storiaSubtitle">Frammenti di un passato colorato</h2>
            </div>
            <div className="slugRight">
              <img src="/slugmosaico.jpg" alt="Storia" className="slugImage" />
            </div>
          </div>
        </div>

        <section className="slugApprofondimento">
        <div className='slugTextImageLeft'>
            <div className='slugsubImage'>
              <img src="/mos1.jpg" alt="Mosaici" className="slugsubImageLeft" />
            </div>
            <div className='slugsubText'>
            <h3 className='ph3right'>Il mosaico Romano</h3>
            <p className="p1">
            Il mosaico romano si sviluppò a partire dal III secolo a.C., raggiungendo il suo massimo splendore tra il I secolo a.C. e il IV secolo d.C. Durante questo periodo, il mosaico era utilizzato principalmente per decorare pavimenti di ville, terme e edifici pubblici. Le tessere, venivano fatte di pietra, vetro, ceramica, o anche metallo, e venivano incastonate su una superficie preparata, spesso di intonaco o malta, con grande attenzione al dettaglio per creare disegni geometrici, scene mitologiche, naturali e allegoriche.       <br></br>   <br></br>  </p>
            <br />
            <p className="p1">
            Un elemento distintivo dei mosaici romani era l'uso della ‘opus tessellatum’, una tecnica che impiegava tessere di dimensioni regolari per formare motivi complessi. Inoltre, si sviluppò anche ‘l’opus vermiculatum’, una tecnica più fine, che prevedeva l’uso di tessere molto più piccole e varie per creare immagini ancora più dettagliate. L’uso del colore era estremamente variegato, e le composizioni visive spaziavano dalla rappresentazione di animali, scene mitologiche e paesaggi, a veri e propri ritratti.
            </p>
            </div>

        </div>

        <div className='slugTextImageRight'>
            <div className='slugsubText'>
            <h3 className='ph3right'>I mosaici di Aquileia</h3>
              <p className="p2">
              Aquileia, come abbiamo già visto famosa per i suoi mosaici,  rappresentante alcuni degli esempi più significativi della tecnica del mosaico romano e della sua evoluzione in età bizantina. <br></br><br></br> Tra i mosaici più celebri di Aquileia vi sono quelli che abbiamo già annoverato nella sezione  della Basilica di Aquileia.  </p>
              <p className="p2">
              Una delle scene più emblematiche è quella che rappresenta il ‘Pesce’, simbolo cristiano, che appare frequentemente in questi mosaici come un segno di fede e di speranza. <br></br>Altri mosaici raffigurano scene dell’Antico Testamento, come quella di ‘Noè nell’Arcà, e allegorie cristiane, tutte caratterizzate dall'uso di una tecnica raffinata e da un’attenta disposizione delle tessere per ottenere una resa visiva estremamente dettagliata. Inoltre la basilica ospita  numerosi mosaici raffiguranti il cosiddetto ‘Nodo di Salomone’. <br></br><br></br> 

              Gli altri esempi di mosaici già citati sono quelli della Domus di Tito Macro, raffiguranti scene di caccia e di natura, tipiche dell'arte romana, ma con accenni alla tradizione religiosa che prenderà piede nei mosaici bizantini. <br></br><br></br>

              Inoltre i mosaici di Aquileia, in particolare, sono testimoni della trasformazione culturale e religiosa tra tecnica romana e quella bizantina, e oggi costituiscono una delle più straordinarie testimonianze artistiche dell'Occidente antico.       </p>             
            </div>
            <div>
            <div className='slugsubImage double'>
              <img src="/mos2.webp" alt="Foro" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/mos3.jpg" alt="Foro" className="slugsubImageLeft" />
            </div>
            </div>
          </div>
          <br />

        </section>

        <div className="slugQuote">
          <p className="quoteText">
            “I mosaici sono l’arte della memoria: ogni frammento racconta una storia, e insieme formano un racconto eterno.”
          </p>
          <p className="quoteAuthor">— Autore sconosciuto</p>
        </div>
      </main>

      <Footer />
    </>
  );
}