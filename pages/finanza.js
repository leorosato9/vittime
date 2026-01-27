import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function GuardiaDiFinanzaPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Guardia di Finanza"
        subtitle="Tutela dell’economia, contrasto all’illegalità e difesa degli interessi nazionali"
        heroImage="/finanza-hero.webp"
        heroColor="#4F5D50"
        quote="“Nec recisa recedit”"
        quoteAuthor="Motto della Guardia di Finanza"
        sections={[
          {
            blockTitle: "Storia, organizzazione e compiti",
            image: "/finanza1.jpg",
            imageAlt: "Compiti della Guardia di Finanza",
            paragraphs: [
              "La Guardia di Finanza è uno degli organi fondamentali dello Stato italiano e rappresenta un unicum nel panorama delle forze di polizia nazionali ed europee. È una forza di polizia a ordinamento militare, specializzata nella tutela dell’economia e delle finanze pubbliche, che opera a difesa degli interessi economici dello Stato, dell’Unione Europea e dei cittadini.",
              "Dal punto di vista istituzionale, la Guardia di Finanza dipende dal Ministero dell’Economia e delle Finanze, che ne indirizza l’azione in materia economico-finanziaria e di tutela delle entrate e delle spese pubbliche. Per l’impiego operativo in ambito di ordine e sicurezza pubblica e per le attività di polizia giudiziaria, il Corpo opera invece alle dipendenze funzionali del Ministero dell’Interno e dell’Autorità Giudiziaria, svolgendo un ruolo trasversale tra economia e sicurezza dello Stato.",
              "La missione principale è la tutela della legalità economica e finanziaria, contrastando fenomeni illeciti come evasione fiscale, riciclaggio di denaro, frodi e uso illecito di fondi pubblici. Dal punto di vista operativo, è presente su tutto il territorio nazionale e dispone di una componente aeronavale e del Soccorso Alpino (SAGF), che consentono di operare anche in mare e in ambienti montani."
            ],
          },
          {
            blockTitle: "Il sacrificio e il dovere",
            image: "/finanza3.jpg",
            imageAlt: "Impegno e rischio",
            paragraphs: [
              "“Neanche spezzata retrocede”. Questa frase d'annuniziana incarna la resilienza e la tenacia delle Fiamme Gialle. Nel corso della sua storia, la Guardia di Finanza ha visto numerosi suoi appartenenti perdere la vita nell’adempimento del dovere, uomini riconosciuti dallo Stato come vittime poiché deceduti durante attività di servizio a tutela della legalità.",
              "Le cause delle morti sono spesso legate all’elevato rischio delle funzioni svolte: molti finanzieri sono caduti durante il contrasto al contrabbando, specialmente tra gli anni Settanta e Ottanta, in conflitti a fuoco o inseguimenti in mare. Altri hanno perso la vita in operazioni contro la criminalità organizzata, in attentati, o in tragici incidenti aerei e marittimi durante attività di pattugliamento e soccorso."
            ], 
          },
          {
            blockTitle: "Esempi di eroico sacrificio",
            image: "/finanza2.jpg",
            imageAlt: "Antonio Zara e i caduti",
            paragraphs: [
              "Tra le figure simbolo del Corpo spicca quella del Finanziere Antonio Zara, Medaglia d’Oro al Valor Militare. Arruolatosi giovanissimo, prestava servizio all'aeroporto di Fiumicino quando, il 17 dicembre 1973, un commando terroristico palestinese dirottò un aereo Pan Am. Zara tentò coraggiosamente di opporsi alla fuga dei terroristi per proteggere i civili, ma fu colpito mortalmente alle spalle da una raffica di mitra.",
              "Un’altra pagina drammatica è quella scritta dai Finanzieri di Mare Salvatore De Rosa e Daniele Zoccola, decorati con la Medaglia d’Oro al Valor Civile. Il 24 luglio 2000, nel Canale d’Otranto, intercettarono un gommone impegnato nel traffico di esseri umani. Gli scafisti, per fuggire, si gettarono in mare lasciando l'imbarcazione senza controllo, la quale speronò violentemente l'unità navale italiana uccidendo i due militari. Oggi, navi intitolate ai loro nomi mantengono vivo il ricordo della loro dedizione."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}