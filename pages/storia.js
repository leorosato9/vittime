import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function StoriaPage() {
  return (
    <>
      <Head>
        <title>Storia di Aquileia</title>
      </Head>

      <Header />

      <main className="slugContainer">
        <div style={{ margin: '0 10vw' }}>
          <div className="slugTop">
            <div>
              <h1 className='slugTitle'>La Storia</h1>
              <h2 className="slugSubtitle">Un viaggio attraverso i secoli</h2>
            </div>
            <div className="slugRight">
              <img src="/storiaslug.jpg" alt="Storia" className="slugImage" />
            </div>
          </div>
        </div>

        <section className="slugApprofondimento">
          <h2 className='rightSubtitle'>Un’eredità millenaria</h2>
          <div className='slugTextImageLeft'>
            <div className='slugsubImage'>
              <img src="/storiaslug2.jpeg" alt="Storia" className="slugsubImageLeft" />
            </div>
            <div className='slugsubText'>
            <p className="p1">
              Aquileia fu fondata nel 181 a.C. come colonia romana, con lo scopo di controllare e difendere il confine nord-orientale della Repubblica romana dalle incursioni delle popolazioni celtiche e illiriche. La decisione di creare questa città strategica fu presa dal Senato romano, e vide come figure principali i consoli Publio Scipione Nasica, Gaio Flaminio e Lucio Manlio Acidino; i quali inviarono 3.000 coloni provenienti soprattutto dal centro Italia, accompagnati da un contingente militare.
            </p>
            <br />
            <p className="p1">
              La posizione di Aquileia era estremamente vantaggiosa: situata lungo il fiume Natissa (Natisone) e vicino al mare Adriatico, la città divenne presto un nodo commerciale fondamentale, che ebbe come principale produzione quella di ambra, vini, oli e ceramiche; esportati poi verso il mondo mediterraneo e l’Europa continentale. La sua crescita fu rapida, grazie alla costruzione di strade, edifici pubblici e infrastrutture che la resero una delle città più importanti dell’Impero Romano.
            </p>
            </div>
          </div>
          <div className='slugTextImageRight'>
            <div className='slugsubText'>
              <p className="p2">
              Infatti nel periodo del suo massimo splendore arrivò a contare 50-80 mila abitanti, diventando un sito fondamentale della penisola, insieme a Roma, Mediolanum e Capua. Oltre alla funzione difensiva come punto strategico per il limes danubiano, nel corso dei secoli assunse un ruolo culturale e religioso di primaria importanza, soprattutto con la diffusione del Cristianesimo.          </p>
              <br />
              <p className="p2">
              Aquileia, nel corso della sua storia, fu vittima di molte incursioni specialmente barbariche;  celebre fu il tentativo di conquista da parte di Massimino Il Trace, il quale fu poi respinto e sconfitto. Inoltre la città subì varie altre minacce come quelle da parte dei Visigoti. Infine nel 452 d.C. verrà devastata e ridotta in macerie a causa dell’avvento di Attila e degli Unni. Tuttavia, Aquileia riuscirà a mantenere un ruolo fondamentale dal punto di vista religioso come sede episcopale e del Patriarcato durante tutto il medioevo.          </p>
              <br />
            </div>
            <div className='slugsubImage'>
              <img src="/storiaslug1.jpeg" alt="Storia" className="slugsubImageRight" />
            </div>
          </div>
          <div className='slugTextImageLeft'>
            <div className='slugsubImage'>
              <img src="/storia3.jpeg" alt="Storia" className="slugsubImageLeft" />
            </div>
            <div className='slugsubText'>
            <p className="p1">
            Oggi, Aquileia è un sito archeologico di fama internazionale, inserito nella lista del ‘Patrimonio dell’Umanità dell’UNESCO’ . Tra i suoi monumenti più importanti vi sono la ‘Basilica di Santa Maria Assunta’, con i suoi spettacolari mosaici paleocristiani, e i resti del  Foro Romano e del porto fluviale.            </p>
            <br />
            <p className="p1">
            La storia di Aquileia è un esempio straordinario della grandezza e della fragilità delle civiltà. Da centro militare e commerciale dell’Impero Romano  divenne  fulcro religioso e culturale medievale, fino a essere riscoperto come tesoro archeologico. La città rappresenta una testimonianza unica della vastità del mondo romano e della sua importanza.            </p>
            </div>
          </div>
        </section>

        <div className="slugQuote">
          <p className="quoteText">
            “La storia è un grande presente, e mai solamente un passato.”
          </p>
          <p className="quoteAuthor">— Alain</p>
        </div>


      </main>

      <Footer />
    </>
  );
}