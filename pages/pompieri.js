import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function VigiliDelFuocoPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Vigili del Fuoco"
        subtitle="Salvaguardia della vita, soccorso tecnico urgente e protezione civile"
        heroImage="/pompieri-hero.jpeg"
        heroColor="#B71C1C"
        quote="“Flammas domamus, donamus corda”"
        quoteAuthor="Motto dei Vigili del Fuoco"
        sections={[
          {
            blockTitle: "Una storia antica, una missione moderna",
            image: "/pompieri1.jpeg",
            imageAlt: "Intervento di soccorso",
            paragraphs: [
              "Il Corpo Nazionale dei Vigili del Fuoco rappresenta una delle istituzioni cardine della sicurezza pubblica italiana. Sebbene le sue radici storiche risalgano alla 'Militia Vigilum' dell'antica Roma, l'assetto moderno è stato istituito nel 1941 per garantire un soccorso omogeneo su tutto il territorio. Dipendente dal Ministero dell’Interno, il Corpo opera attraverso una struttura capillare composta da personale permanente e da una preziosa componente volontaria, fondamentale nelle aree montane e nei piccoli centri.",
              "La missione primaria è la salvaguardia della vita umana e la tutela dei beni e dell'ambiente. I compiti vanno ben oltre il semplice spegnimento degli incendi: gli operatori sono specializzati nel soccorso tecnico urgente in caso di terremoti, alluvioni, crolli, incidenti industriali e nucleari (CBRN). Questa complessità richiede una preparazione tecnica d'eccellenza, disciplina e una prontezza operativa 24 ore su 24, spesso esercitata in condizioni di estremo rischio fisico e psicologico."
            ],
          },
          {
            blockTitle: "Il coraggio oltre la paura: Sarno 1998",
            image: "/pompieri2.jpg",
            imageAlt: "Angeli del fango",
            paragraphs: [
              "Nel corso della sua storia, il Corpo ha pagato un prezzo altissimo in termini di vite umane, con uomini che hanno sacrificato tutto per salvare gli altri. Un esempio indelebile di altruismo è quello di Marco Mattiucci, vigile del fuoco volontario, caduto durante la tragica alluvione di Sarno nel maggio 1998.",
              "In uno scenario apocalittico, Mattiucci non esitò a gettarsi nel fango per prestare soccorso alla popolazione terrorizzata. Riuscì a portare in salvo diverse persone, tra cui un bambino, strappandoli alla furia degli elementi. Mentre era ancora impegnato nelle operazioni di salvataggio, una nuova frana lo travolse, uccidendolo. Il suo gesto, dettato da un coraggio straordinario, è stato riconosciuto con la Medaglia d’Oro al Valor Civile, simbolo eterno di chi sceglie di donare il proprio cuore oltre l'ostacolo."
            ], 
          },
          {
            blockTitle: "La tragedia di Alessandria e la memoria",
            image: "/pompieri3.jpg",
            imageAlt: "Caschi e onori",
            paragraphs: [
              "Una ferita più recente, ma altrettanto profonda, è quella inferta il 5 novembre 2019 a Quargnento, in provincia di Alessandria. Antonino Candido, Marco Triches e Matteo Gastaldo intervennero presso una cascina disabitata per una fuga di gas, ignari di essere attesi da una trappola mortale. Una violenta esplosione dolosa spezzò le loro vite mentre tentavano di mettere in sicurezza l'area per l'incolumità pubblica.",
              "Onorare la memoria di Antonino, Marco, Matteo e di tutti i caduti del Corpo è un atto di dovere civile. Questi uomini hanno incarnato fino all’estremo sacrificio i valori più alti del servizio pubblico: solidarietà, responsabilità e altruismo. Ricordarli significa riconoscere il valore morale di chi, ogni giorno, sceglie di anteporre la sicurezza degli altri alla propria, rafforzando il senso di comunità e fiducia nelle istituzioni."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}