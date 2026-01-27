import Header from "../components/Header";
import Footer from "../components/Footer";
import CorpoTemplate from "../components/CorpoTemplate";

export default function PoliziaLocalePage() {
  return (
    <>
      <Header />

      <CorpoTemplate
        title="Polizia Locale"
        subtitle="Sicurezza urbana, prossimità al cittadino e tutela del territorio"
        heroImage="/locale-hero.jpg"
        heroColor="#DAA520"
        quote="“Urbis et civium securitas”"
        quoteAuthor="Missione della Polizia Locale"
        sections={[
          {
            blockTitle: "Radici antiche e organizzazione moderna",
            image: "/locale1.jpg",
            imageAlt: "Pattuglia in città",
            paragraphs: [
              "La storia della Polizia Locale in Italia ha origini antichissime, che affondano le radici nell'organizzazione stessa della civiltà romana. Già l'imperatore Augusto istituì i Vigiles e le coorti urbane, istituzionalizzando per la prima volta la figura delle guardie cittadine dedicate alla sicurezza dell'Urbe. Dopo la caduta dell'Impero, ci vollero secoli per rivedere corpi con funzioni simili, come i celebri Signori della Notte nella Repubblica Serenissima di Venezia durante il Medioevo. Sebbene l'attuale assetto risalga al secondo dopoguerra, lo spirito del corpo si manifestò con forza già durante la Resistenza, quando molti vigili combatterono coraggiosamente sia contro l'occupazione nazista che, sul confine orientale, contro le truppe titine.",
              "Oggi la Polizia Locale rappresenta una realtà articolata e fondamentale per il controllo del territorio. Si suddivide principalmente in Polizia Municipale, dipendente dai Comuni, che si occupa di polizia stradale, amministrativa, giudiziaria, sicurezza urbana e protezione civile; Polizia Provinciale, focalizzata sulla tutela ambientale, ittico-venatoria e faunistica; e Polizia Regionale, presente nelle regioni a statuto speciale. Questa struttura garantisce una presenza capillare e una \"polizia di prossimità\" vicina alle esigenze quotidiane dei cittadini."
            ],
          },
          {
            blockTitle: "Vittime del dovere: eroi della porta accanto",
            image: "/locale2.jpg",
            imageAlt: "Cerimonia commemorativa",
            paragraphs: [
              "Essere il primo punto di riferimento per il cittadino espone spesso gli agenti della Polizia Locale a rischi immediati e imprevedibili. La cronaca ci ricorda il sacrificio del Capitano Francesco Bruner e del Luogotenente Vincenzo Cinque della Polizia Municipale di Napoli. Nel 2015, nel quartiere di Secondigliano, intervennero per fermare la follia omicida di un uomo che aveva iniziato a sparare dal balcone. Bruner morì sul colpo nel tentativo di proteggere i civili, mentre Cinque si spense dopo due mesi di agonia per le ferite riportate. Altrettanto eroico fu il gesto dell'Ispettore Giuseppe Croce a Livorno nel 2006, stroncato da un infarto subito dopo aver salvato con uno sforzo estremo un giovane che tentava il suicidio.",
              "Il senso del dovere si manifesta anche nell'istinto di protezione dei più deboli, come dimostrò Luciano Raffa a Milano nel 1981. Il vigile perse la vita investito da un motociclo guidato da un tossicomane, facendo scudo con il proprio corpo a un bambino e a sua nonna, salvandoli da morte certa."
            ], 
          },
          {
            blockTitle: "Contro le mafie e i veleni",
            image: "/locale3.jpg",
            imageAlt: "Tutela ambientale e legalità",
            paragraphs: [
              "La Polizia Locale è spesso in prima linea anche contro la criminalità organizzata e i disastri ambientali. In Sicilia, il vigile Giovanni Fazio di Palma di Montechiaro fu ucciso nel 1997 con due colpi di pistola al torace. La sua colpa, secondo i collaboratori di giustizia, era semplicemente quella di essere \"onesto\" e incorruttibile nell'espletamento dei suoi controlli, un ostacolo per gli interessi mafiosi locali.",
              "Esiste infine un eroismo silenzioso e prolungato nel tempo, come quello del Tenente Michele Liguori della Polizia Municipale di Acerra. Impegnato per anni nel contrasto allo sversamento illegale di rifiuti nella cosiddetta \"Terra dei Fuochi\", Liguori ha pagato il suo servizio con la vita. È deceduto il 19 gennaio 2014 a causa di un tumore provocato dall'inalazione di miasmi tossici e sostanze come il PCB, respirati mentre lavorava per difendere la sua terra dall'inquinamento criminale. Le storie di questi uomini testimoniano come la Polizia Locale sia un baluardo indispensabile per la legalità e la sicurezza delle nostre comunità."
            ],
          },
        ]}
      />

      <Footer />
    </>
  );
}