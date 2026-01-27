import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function MarinaMilitarePage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Marina Militare"
        subtitle="Sicurezza marittima, difesa degli interessi nazionali e proiezione internazionale"
        heroImage="/marina-hero.webp"
        heroColor="#1B345C"
        quote="“Patria e Onore”"
        quoteAuthor="Motto della Marina Militare"
        sections={[
          {
            blockTitle: "Storia e rinascita",
            image: "/marina1.webp",
            imageAlt: "La flotta italiana",
            paragraphs: [
              "La Marina Militare Italiana costituisce la componente operativa marittima della difesa della Repubblica. Le sue origini risalgono alla denominazione di Regia Marina, istituita il 17 marzo 1861 all'indomani dell'Unità d’Italia. Essa nacque dalla fusione delle marine preunitarie: quella delle Due Sicilie, del Granducato di Toscana, quella pontificia e quella del Regno di Sardegna. Quest'ultima, che aveva acquisito importanza già dal 1713 per collegare il regno ai nuovi territori siciliani, fornì l'ossatura principale della nuova forza navale.",
              "Un momento fondamentale nella storia del corpo è l'impresa di Premuda, avvenuta il 10 giugno 1918 durante la Prima Guerra Mondiale, quando due piccoli MAS italiani (il 15 e il 21) riuscirono nell'impresa epica di affondare la corazzata austriaca SMS Szent István. Proprio in onore di quel giorno, il 10 giugno si celebra annualmente la festa della Marina.",
              "Dopo le pesanti condizioni imposte dagli Alleati al termine della Seconda Guerra Mondiale, la Marina ha saputo rialzarsi e modernizzarsi. Grazie all'ingresso nella NATO, è tornata ad assumere un ruolo strategico centrale nel Mediterraneo, divenendo oggi un reparto fondamentale per la sicurezza internazionale."
            ],
          },
          {
            blockTitle: "Vittime del dovere e rischi invisibili",
            image: "/marina2.jpg",
            imageAlt: "Navi e personale",
            paragraphs: [
              "Servire in mare comporta rischi che vanno oltre il confronto bellico. Una delle problematiche più gravi affrontate dal personale è stata l’esposizione all’amianto, materiale utilizzato come isolante termico sulle navi costruite tra gli anni Trenta e Novanta. L’esposizione prolungata a questa sostanza, unitamente agli agenti tossici presenti nei gas di scarico dei motori, ha causato nel tempo gravi patologie e tumori, portando alla morte di numerosi militari riconosciuti oggi come vittime del dovere.",
              "Il tributo di sangue è stato versato anche in missioni di pace all'estero. Si ricorda il sacrificio di Filippo Montesi, Sottocapo Fuciliere del Battaglione San Marco. Inviato in Libano nel 1983 con la forza multinazionale per proteggere i campi profughi palestinesi dopo le stragi di Sabra e Chatila, Montesi rimase vittima di un’imboscata il 15 marzo. Investito da una pioggia di fuoco mentre pattugliava il campo di Burj el-Barajneh, morì una settimana dopo all'Ospedale Militare del Celio a Roma. Fu insignito della Croce al Valor Militare alla Memoria.",
              "Drammatica è anche la storia di Cosimo Carlino, giovane di soli ventun anni imbarcato sulla Rifornitrice Stromboli durante la Guerra del Golfo nel 1991. Durante uno scalo tecnico a Dubai, mentre si recava a una cabina telefonica per chiamare casa, fu ucciso a coltellate alle spalle. Questi episodi ricordano come il compito della Marina non sia solo bellico, ma volto al mantenimento della pace, spesso a costo della vita dei suoi uomini più giovani."
            ], 
          },
          {
            blockTitle: "L'onore e la scelta: l'8 settembre",
            image: "/marina3.webp",
            imageAlt: "La Corazzata Roma",
            paragraphs: [
              "Un capitolo indelebile nella memoria della Marina è legato all'armistizio dell'8 settembre 1943. In quel momento di caos, la gran parte della Marina scelse di mettere da parte le ideologie politiche per restare fedele alla Patria e al giuramento prestato, rifiutando di consegnarsi ai tedeschi.",
              "Figure come l'ammiraglio Carlo Bergamini, comandante delle forze navali da battaglia, incarnarono questa scelta. Pur contrario alle modalità dell'armistizio, Bergamini obbedì agli ordini per salvaguardare la flotta, salpando da La Spezia per ricongiungersi con gli Alleati. La sua nave ammiraglia, la corazzata Roma, ebbe però una sorte tragica: individuata dai bombardieri tedeschi il pomeriggio del 9 settembre al largo dell'Asinara, fu affondata.",
              "I morti furono ben 1353, incluso l'ammiraglio Bergamini. Tra i pochissimi superstiti vi fu Gustavo Bellazzini, che fino all'età di 102 anni ha testimoniato l'orrore di quei momenti e il valore di chi scelse di non piegarsi. La storia della corazzata Roma rimane l'esempio più alto di come la Marina abbia saputo servire il popolo italiano con onore anche nelle ore più buie della nazione."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}