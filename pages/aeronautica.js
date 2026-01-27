import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function AeronauticaMilitarePage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Aeronautica Militare"
        subtitle="Sorveglianza dei cieli, eccellenza tecnologica e servizio alla collettività"
        heroImage="/aeronautica-hero.jpg"
        heroColor="#5D8AA8"
        quote="“Virtute Siderum Tenus”"
        quoteAuthor="Motto dell'Aeronautica Militare"
        sections={[
          {
            blockTitle: "Etica, competenza e passione: una missione continua",
            image: "/aeronautica1.jpg",
            imageAlt: "Difesa aerea e soccorso",
            paragraphs: [
              "Coloro che vestono l'uniforme dell’Aeronautica Militare esprimono il valore della Forza Armata garantendo la sicurezza del Paese e la protezione degli interessi nazionali. Alla base di questo impegno vi sono tre pilastri fondamentali: l'etica, che unisce l'organizzazione; la competenza professionale, requisito imprescindibile in un settore ad alta tecnologia; e la passione, motore necessario per chi dedica il proprio servizio all'Italia. L'Aeronautica garantisce la sorveglianza e la difesa dello spazio aereo nazionale 365 giorni all’anno, 24 ore su 24, operando in un sistema di difesa integrato con i Paesi NATO.",
              "Oltre alla difesa, la Forza Armata svolge un ruolo cruciale per la comunità attraverso il trasporto aereo in biocontenimento e il trasporto sanitario d’urgenza per persone in imminente pericolo di vita, operazioni che richiedono una prontezza operativa assoluta. Fondamentale è anche il contributo della componente elicotteri, impegnata nel servizio di ricerca e soccorso (SAR) per il recupero di equipaggi, ma anche nel supporto alla popolazione in caso di calamità naturali. Le moderne tecnologie permettono oggi di fronteggiare minacce trasversali e imprevedibili, dal terrorismo all'instabilità regionale, garantendo una risposta efficace e tempestiva."
            ],
          },
          {
            blockTitle: "Il prezzo del servizio: i rischi invisibili",
            image: "/aeronautica2.jpg",
            imageAlt: "Memoria e salute",
            paragraphs: [
              "L’Aeronautica Militare custodisce la memoria dei propri caduti nell’Albo d’Oro, un tributo a chi ha perso la vita per il Paese. Tuttavia, le vittime del dovere non sono solo quelle cadute in combattimento o in volo. Una parte dolorosa della storia del corpo riguarda le malattie professionali, in particolare quelle legate all'esposizione all'amianto, materiale un tempo presente nei velivoli e nelle infrastrutture.",
              "Dati ufficiali hanno registrato centinaia di casi di patologie asbesto-correlate, come il mesotelioma. Tra le vittime di questa battaglia silenziosa si ricordano il Primo Aviere Aldo Aliboni, l’Aviere Scelto Specializzato Carmelo Chiove e l’Aviere Scelto Allievo Autiere Giuseppe Lattanzi. Questi uomini hanno pagato con la salute e la vita l'esposizione a rischi ambientali che, per decenni, sono rimasti nell'ombra."
            ], 
          },
          {
            blockTitle: "Caduti nei cieli: il sacrificio del volo",
            image: "/aeronautica3.jpg",
            imageAlt: "Frecce Tricolori e piloti",
            paragraphs: [
              "La natura stessa del volo militare comporta rischi elevati, sia in contesto bellico che addestrativo. La storia dell'Arma Azzurra è segnata da perdite in combattimento, come quelle del Capitano Pilota Guglielmo Chiarini, del Sottotenente Pilota Nicolò Cobolli Gigli e del Maresciallo Armiere Armando Di Tullio, caduti durante la Seconda Guerra Mondiale. Tuttavia, è l'incidente di volo a rappresentare la causa più frequente di lutto anche in tempo di pace.",
              "Episodi recenti hanno scosso profondamente l'opinione pubblica e la Forza Armata. Rimane impressa la tragedia del 7 marzo 2023, quando il Tenente Colonnello Giuseppe Cipriano e il Maggiore Marco Meneghello persero la vita in uno scontro tra velivoli durante un’esercitazione a Guidonia. Altrettanto drammatico è stato l'incidente avvenuto il 1 ottobre 2025, che ha visto la scomparsa del Colonnello Simone Mettini, esperto comandante e istruttore, e del giovane allievo pilota Lorenzo Nucheli durante una missione addestrativa. Questi eventi testimoniano come l'addestramento al limite e la dedizione al servizio comportino un rischio costante, affrontato ogni giorno con coraggio per garantire la sicurezza di tutti."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}