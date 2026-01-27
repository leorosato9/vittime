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
        quote="“Salus rei publicae suprema lex esto”"
        quoteAuthor="Motto dell'Esercito Italiano"
        sections={[
          {
            blockTitle: "Funzione e organizzazione",
            image: "/esercito1.jpg",
            imageAlt: "Carabinieri",
            paragraphs: [
              "È la componente terrestre delle forze armate italiane ed è composta da marina, aeronautica e arma dei carabinieri. L’esercito italiano è diviso in 6 Armi, affiancate da 3 Corpi ciascuna, ognuna con la propria funzione specifica. La Fanteria ha la funzione di combattere via terra tramite uno scontro diretto per conquistare o difendere un territorio, mentre la Cavalleria è specializzata in ricognizione e supporto, utilizzata per la protezione dei fianchi dell’esercito. L'Artiglieria ha il compito di fornire supporto tramite l’uso di cannoni e missili. Il Genio è un corpo tecnico la quale funzione è quella di progettare strutture e superare ostacoli ed è a sua volta suddiviso in quattro categorie: pionieri, pontieri, ferrovieri e guastatori. Le Trasmissioni si occupano di gestire le comunicazioni e le tecnologie, dividendosi nelle specialità Telematica e Guerra Elettronica. Infine, l'Arma dei Trasporti e Materiali assolve i compiti legati alla logistica dell’esercito e gestisce la manovra delle risorse."
            ],
          },
          {
            blockTitle: "Vittime del lavoro",
            image: "/esercito2.webp",
            imageAlt: "Memoria e impegno",
            paragraphs: [
              "Le vittime del lavoro all’interno dell’esercito italiano sono legate principalmente a combattimenti ed esposizione ad agenti cancerogeni e contaminanti che hanno portato alla contrazione di gravi malattie. Le perdite maggiori rilevate risalgono alle due Guerre mondiali, con circa 650 mila morti nella Prima e circa 333 mila morti nella Seconda. All’interno dell’esercito l’uranio impoverito ha causato circa 400 morti. Il suo utilizzo ha causato vittime in particolar modo durante la Guerra del Golfo, le guerre in Bosnia Erzegovina, Kosovo e Afghanistan."
            ], 
          },
          {
            blockTitle: "Una testimonianza viva",
            image: "/esercito3.jpg",
            imageAlt: "Testimonianza",
            paragraphs: [
              "Un esempio significativo è quello del Colonnello del Ruolo d’Onore Carlo Calcagni. Egli è stato vittima della contaminazione di uranio impoverito, il quale si trova nei proiettili, durante una missione in Bosnia Erzegovina. Calcagni ha contratto 24 patologie ed una polineuropatia cronica con sclerosi e Parkinson. Egli è ancora in vita, ma è costretto a convivere ancora oggi, dopo anni, con varie patologie, le quali hanno causato la trasmissione di un’alterazione genetica ai suoi due figli.",
              "Calcagni è sottoposto a terapie quotidiane e tre ricoveri programmati all’anno. I suoi parenti e la bicicletta, sport che pratica da quando aveva tre anni, lo hanno salvato; ha persino provato a partecipare alle Olimpiadi di Tokyo, ma è stato escluso non avendo i requisiti minimi. Oggi combatte per far si che per coloro esposti a questi rischi siano messi a disposizione mezzi di prevenzione per evitare di avere le sue stesse ripercussioni."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}
