import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function PoliziaPenitenziariaPage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Polizia Penitenziaria"
        subtitle="Sicurezza degli istituti, legalità nell'esecuzione penale e rieducazione del condannato"
        heroImage="/penitenziaria-hero.jpg"
        heroColor="#3A506B"
        quote="“Despondere spem munus nostrum”"
        quoteAuthor="Motto della Polizia Penitenziaria"
        sections={[
          {
            blockTitle: "Storia ed evoluzione: dalla custodia alla rieducazione",
            image: "/penitenziaria1.jpg",
            imageAlt: "Agenti in servizio",
            paragraphs: [
              "La storia della Polizia Penitenziaria italiana è un percorso di progressiva evoluzione che riflette i cambiamenti sociali e giuridici del Paese. Le radici del corpo affondano nelle strutture di sorveglianza sorte dopo l'Unità d'Italia, inizialmente affidate a corpi locali focalizzati sulla mera detenzione. Per gran parte del XX secolo, con l'istituzione del Corpo degli Agenti di Custodia, l'organizzazione mantenne un'impronta militare, ponendo l'accento sulla sorveglianza e la repressione, talvolta in contrasto con l'obiettivo costituzionale della rieducazione della pena sancito dall'articolo 27 della Costituzione.",
              "La svolta decisiva iniziò con l'Ordinamento Penitenziario del 1975 e si concretizzò con la riforma del 1990, che portò alla smilitarizzazione del Corpo degli Agenti di Custodia e alla nascita dell'attuale Polizia Penitenziaria. Questa transizione verso un ordinamento civile ha integrato il Corpo nel sistema delle Forze di Polizia, mantenendo però le sue peculiarità.",
              "Oggi la Polizia Penitenziaria opera sotto il Ministero della Giustizia. I suoi compiti sono essenziali e complessi: garantisce la sicurezza interna degli istituti e gestisce i trasferimenti, ma funge soprattutto da interfaccia fondamentale tra la popolazione reclusa e l'area educativa, partecipando attivamente al progetto trattamentale per il reinserimento sociale dei condannati."
            ],
          },
          {
            blockTitle: "Il rischio e il sacrificio quotidiano",
            image: "/penitenziaria2.jpg",
            imageAlt: "Rischi del mestiere",
            paragraphs: [
              "Le cause che portano un agente a diventare vittima del dovere sono molteplici, spesso legate alla natura usurante e pericolosa dell'ambiente carcerario. Il riconoscimento scatta frequentemente a seguito di aggressioni dirette da parte dei detenuti durante interventi per sedare risse, rivolte, o durante le delicate fasi di perquisizione e traduzione. Se tali violenze portano alla morte o a invalidità permanenti, l'agente viene riconosciuto come vittima.",
              "Tuttavia, il pericolo non deriva solo dallo scontro fisico. Il titolo di vittima del dovere spetta anche a chi subisce incidenti di servizio con nesso diretto, come cadute o eventi improvvisi durante le scorte, o a chi contrae gravi patologie invalidanti a causa dell'esposizione prolungata a rischi ambientali, sostanze nocive o condizioni di lavoro insalubri all'interno degli istituti."
            ], 
          },
          {
            blockTitle: "Volti e storie di coraggio",
            image: "/penitenziaria3.jpg",
            imageAlt: "Commemorazione vittime",
            paragraphs: [
              "La memoria del Corpo è segnata da numerosi caduti. Negli anni di piombo e della guerra alla mafia, molti hanno pagato con la vita. Ricordiamo Germana Stefanini, vigilatrice a Rebibbia, rapita e uccisa nel 1983 dalle Brigate Rosse dopo un brutale “processo proletario”, e Giuseppe Pagliei, agente ucciso nel 1978 a Frosinone nell'agguato al magistrato Calvosa. Sul fronte della criminalità organizzata spicca il sacrificio del Maresciallo Calogero Di Bona, ucciso dalla mafia nel 1979, e di Antonio Cristiano, vittima di un agguato camorristico nel 1983.",
              "Anche il terrorismo ha lasciato ferite profonde, come testimoniano le morti del Brigadiere Francesco Rucci a Milano e del Vicebrigadiere Raffaele Cinotti a Roma. Altri, come l'Agente Giuseppe Lorusso, sono stati decorati alla memoria per il loro sacrificio.",
              "Non mancano tragedie più recenti avvolte nel mistero, come quella di Maria Teresa Trovato Mazza, detta “Sissy”. Agente presso il carcere della Giudecca, fu trovata ferita da un colpo di pistola in un ascensore dell'ospedale di Venezia nel 2016. Dopo oltre due anni di coma, morì senza mai riprendere conoscenza, lasciando una ferita aperta nel cuore dei colleghi e della famiglia."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}