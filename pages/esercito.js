import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function CarabinieriPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Esercito"
        subtitle="Difesa della Patria, salvaguardia della pace internazionale e sostegno alla popolazione."
        heroImage="/esercito-hero.jpg"
        heroColor="#8d8b55"
        quote="“Nei secoli fedele.”"
        quoteAuthor="Motto dell’Arma dei Carabinieri"
        sections={[
          {
            blockTitle: "Funzione e organizzazione",
            image: "/carabinieri2.jpeg",
            imageAlt: "Carabinieri",
            paragraphs: [
              "È la componente terrestre delle forze armate italiane ed è composta da marina, aeronautica e arma dei carabinieri. L’esercito italiano è diviso in 6 Armi, affiancate da 3 Corpi ciascuna, ognuna con la propria funzione specifica. La Fanteria ha la funzione di combattere via terra tramite uno scontro diretto per conquistare o difendere un territorio, mentre la Cavalleria è specializzata in ricognizione e supporto, utilizzata per la protezione dei fianchi dell’esercito. L'Artiglieria ha il compito di fornire supporto tramite l’uso di cannoni e missili. Il Genio è un corpo tecnico la quale funzione è quella di progettare strutture e superare ostacoli ed è a sua volta suddiviso in quattro categorie: pionieri, pontieri, ferrovieri e guastatori. Le Trasmissioni si occupano di gestire le comunicazioni e le tecnologie, dividendosi nelle specialità Telematica e Guerra Elettronica. Infine, l'Arma dei Trasporti e Materiali assolve i compiti legati alla logistica dell’esercito e gestisce la manovra delle risorse."
            ],
          },
          {
            blockTitle: "Servire lo Stato, anche a costo della vita",
            image: "/carabinieri1.webp",
            imageAlt: "Memoria e impegno",
            paragraphs: [
              "Nel corso della loro lunga storia, i Carabinieri hanno pagato un prezzo altissimo in termini di vite umane. Molti militari sono caduti nello svolgimento del servizio, difendendo la popolazione, contrastando la criminalità organizzata, il terrorismo o operando in contesti di guerra e missioni di pace.",
              "Il sacrificio del Vicebrigadiere Salvo D’Acquisto, che nel 1943 si assunse una responsabilità non sua per salvare la vita di ventidue civili, resta uno dei simboli più alti dei valori dell’Arma: onore, coraggio, senso del dovere.",
              "La strage di Nassiriya, avvenuta il 12 novembre 2003, rimane una ferita profonda nella memoria collettiva del Paese e testimonia il rischio affrontato ogni giorno da chi opera per la sicurezza.",
            ], 
          },
          {
            blockTitle: "Una testimonianza viva",
            image: "/carabinieri3.jpeg",
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
