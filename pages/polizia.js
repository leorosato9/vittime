import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function CarabinieriPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Polizia di Stato"
        subtitle="Tutela dell’ordine pubblico, garanzia della legalità e vicinanza al cittadino."
        heroImage="/polizia-hero.jpg"
        heroColor="#007fff"
        quote="“Esserci sempre”"
        quoteAuthor="Motto della Polizia di Stato Italiana"
        sections={[
          {
            blockTitle: "Storia, organizzazione e compiti",
            image: "/polizia1.jpg",
            imageAlt: "Carabinieri",
            paragraphs: [
              "La Polizia di Stato rappresenta l'autorità nazionale di pubblica sicurezza ed è una forza di polizia civile ad ordinamento speciale, dipendente direttamente dal Ministero dell’Interno. La sua fisionomia attuale deriva dalla storica legge di riforma del 1981, che ha smilitarizzato il vecchio Corpo delle Guardie di Pubblica Sicurezza, aprendo le porte anche alle donne e sindacalizzando il personale. La sua missione primaria è garantire la sicurezza pubblica, l'ordine e il rispetto della legge, operando su tutto il territorio nazionale a tutela dei diritti dei cittadini e delle istituzioni democratiche.",
              "Le sue funzioni sono molteplici e articolate. Il controllo del territorio è assicurato dalle Volanti che garantiscono il pronto intervento tramite il numero di emergenza, mentre la prevenzione e il contrasto dei reati sono affidati alle attività investigative della Squadra Mobile. La Polizia di Stato opera inoltre attraverso specialità di eccellenza come la Polizia Stradale, per la sicurezza sulla viabilità, la Polizia Ferroviaria, che vigila sulla rete dei trasporti, e la Polizia Postale, oggi in prima linea nella lotta al crimine informatico e alla pedopornografia online. Per svolgere questi compiti, gli operatori si avvalgono di mezzi moderni e tecnologie avanzate, agendo sempre nel rigoroso rispetto dei protocolli di sicurezza."
            ],
          },
          {
            blockTitle: "Una testimonianza di coraggio",
            image: "/polizia3.jpg",
            imageAlt: "Memoria e impegno",
            paragraphs: [
            "Una storia emblematica di sacrificio e resilienza è quella di Nicola Barbato, Sovrintendente della Polizia di Stato e Medaglia d’Oro al Valor Civile. In servizio presso la Squadra Mobile di Napoli, Barbato ha dedicato la sua carriera alla lotta contro la criminalità organizzata, in particolare nel contrasto al racket delle estorsioni. Il 25 settembre 2015, mentre svolgeva un servizio antiracket in borghese nel quartiere di Fuorigrotta, a Napoli, l'auto civetta su cui viaggiava fu crivellata di colpi da un sicario della camorra. Barbato fece da scudo al collega, rimanendo gravemente ferito. Sopravvissuto miracolosamente all'agguato, ha riportato lesioni permanenti che lo costringono su una sedia a rotelle. Nonostante le difficoltà fisiche, Nicola Barbato non ha smesso di indossare la divisa, anche se in modo diverso: oggi è un simbolo vivente della lotta alla camorra e incontra regolarmente gli studenti nelle scuole per testimoniare che la legalità è una scelta che va difesa ogni giorno, trasformando la sua dolorosa esperienza in un potente messaggio di speranza per le nuove generazioni."            ], 
          },
        ]}
      />

      <Footer />
    </>
  );
}
