import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function CarabinieriPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="L’Arma dei Carabinieri"
        subtitle="Presenza quotidiana sul territorio, tutela della legalità e servizio allo Stato."
        heroImage="/carabinieri-hero.jpg"
        heroColor="#0B1F33"
        quote="“Nei secoli fedele.”"
        quoteAuthor="Motto dell’Arma dei Carabinieri"
        sections={[
          {
            blockTitle: "Storia, organizzazione e compiti",
            image: "/carabinieri1.png",
            imageAlt: "Carabinieri",
            paragraphs: [
              "L’Arma dei Carabinieri nasce ufficialmente il 13 luglio 1814, con le Regie Patenti emanate da Vittorio Emanuele I di Savoia. Fin dalla sua costituzione, al Corpo dei Carabinieri Reali viene affidata una duplice missione: difendere lo Stato e garantire l’ordine e la sicurezza pubblica.",
              "Nel corso del tempo, l’Arma ha assunto una fisionomia sempre più moderna e articolata. I Decreti Legislativi del 2000 ne hanno confermato il ruolo storico, riconoscendole il rango di Forza Armata autonoma nell’ambito del Ministero della Difesa, accanto a Esercito, Marina e Aeronautica.",
              "Dal 2016, con l’assorbimento del Corpo Forestale dello Stato, i Carabinieri sono diventati la più importante forza di polizia ambientale d’Europa, con competenze specifiche nella tutela del patrimonio forestale, ambientale e agroalimentare.",
            ],
          },
          {
            blockTitle: "Servire lo Stato, anche a costo della vita",
            image: "/carabinieri2.jpg",
            imageAlt: "Memoria e impegno",
            paragraphs: [
              "Nel corso della loro lunga storia, i Carabinieri hanno pagato un prezzo altissimo in termini di vite umane. Molti militari sono caduti nello svolgimento del servizio, difendendo la popolazione, contrastando la criminalità organizzata, il terrorismo o operando in contesti di guerra e missioni di pace.",
              "Il sacrificio del Vicebrigadiere Salvo D’Acquisto, che nel 1943 si assunse una responsabilità non sua per salvare la vita di ventidue civili, resta uno dei simboli più alti dei valori dell’Arma: onore, coraggio, senso del dovere.",
              "La strage di Nassiriya, avvenuta il 12 novembre 2003, rimane una ferita profonda nella memoria collettiva del Paese e testimonia il rischio affrontato ogni giorno da chi opera per la sicurezza.",
            ], 
          },
          {
            blockTitle: "Una testimonianza viva",
            image: "/carabinieri3.jpg",
            imageAlt: "Testimonianza",
            paragraphs: [
              "A Trieste vive Daniele Livieri, Maresciallo dei Carabinieri e sopravvissuto alla strage di Nassiriya. Arruolato nel 1982, Livieri ha partecipato a missioni ad alto rischio in Bosnia, Kosovo e Iraq, nell’ambito dell’operazione “Antica Babilonia”.",
              "Il giorno prima del suo rientro in Italia, il 12 novembre 2003, un attentato colpì la base italiana. Rimasto a lungo sotto le macerie, fu inizialmente dato per disperso. Le ferite riportate segnarono profondamente la sua vita, portando al congedo dall’Arma e al riconoscimento dello status di Vittima del Dovere.",
              "Oggi Daniele Livieri racconta la sua esperienza ai giovani, con l’obiettivo di trasmettere il valore del servizio allo Stato e la responsabilità che accompagna chi sceglie di proteggere gli altri.",
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}
