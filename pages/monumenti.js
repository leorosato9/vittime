import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MonumentiPage() {
  return (
    <>
      <Head>
        <title>Monumenti di Aquileia</title>
      </Head>

      <Header />

      <main className="slugContainer">
        <div style={{ margin: '0 10vw' }}>
          <div className="slugTop">
            <div>
              <h1 className='slugTitle'>I Monumenti</h1>
              <h2 className="slugSubtitle">Racconti scolpiti nel tempo</h2>
            </div>
            <div className="slugRight">
              <img src="/slugMonumenti.jpg" alt="Monumenti" className="slugImage" />
            </div>
          </div>
        </div>

        <section className="slugApprofondimento">
          <h2 className='rightSubtitle'>Echi di eternità</h2>
          <div className='slugTextImageLeft'>
            <div className='slugsubImage'>
              <img src="/mausoleo.jpeg" alt="Storia" className="slugsubImageLeft" />
            </div>
            <div className='slugsubText'>
              <h3 className='ph3left'>Il Mausoleo di Candia</h3>
            <p className="p1">
            Il ‘Mausoleo di Candia’ è un importante monumento funerario romano situato nei pressi di Aquileia, lungo il cardo principale. È una delle testimonianze più significative dell’architettura sepolcrale romana della regione, e il suo stato di conservazione permette di apprezzare le tecniche costruttive e i modelli estetici dell’epoca imperiale. La struttura, a pianta circolare e tipica dei monumenti funerari di alto rango, è stata ricostruita con pietre locali e mattoni, garantendo una notevole stabilità.            
            L’edificio si compone di: <br></br><br></br>

            - La base: solida e leggermente rialzata, per isolare la struttura dall’umidità e conferire imponenza. <br></br><br></br>

            - Il tamburo: il corpo principale, a pianta circolare, con decorazioni e nicchie che probabilmente ospitavano statue o urne cinerarie.  <br></br><br></br>

            - La copertura: originariamente a forma di cupola (oggi perduta), che completava l’armonia del monumento.  <br></br><br></br>

            Gli elementi decorativi, con fregi scolpiti, colonne e iscrizioni commemorative, richiamano i modelli romani classici. Il mausoleo, destinato a una famiglia di alto rango – forse un funzionario imperiale, un militare di alto grado o un membro dell’aristocrazia locale – non era solo un luogo di sepoltura, ma un emblema di status e potere, testimonianza della ricchezza della comunità locale e dell’influenza culturale di Roma sulle province. </p>            <br />
            <p className="p1">
            Il mausoleo era destinato probabilmente a una famiglia di alto rango, considerando la grandezza e la qualità costruttiva, si trattava di un personaggio di notevole prestigio, forse un funzionario imperiale, un militare di alto grado o un membro dell’aristocrazia locale.  Infatti le sepolture monumentali come questa non erano solo luoghi di giacenza per i defunti, ma anche emblemi di status e potere.  Inoltre la sua presenza testimonia la ricchezza della comunità locale e l’influenza culturale di Roma sulle province.              </p>
            </div>
          </div>
          <div className='centralP'>
            <h3>Cardo e Decumano</h3>
            <p>Aquileia seguiva la tipica struttura urbana romana, basata su un  impianto ortogonale con due assi viari principali: il cardo Maximus e il decumanus Maximus. Queste strade non solo regolavano l’organizzazione della città, ma rappresentavano anche i principali percorsi commerciali e militari. Al loro incrocio sorgeva il forum(foro), cuore politico, amministrativo ed economico della città.  </p>
          </div>
          <div className='slugTextImageRight'>
            <div className='slugsubText'>
            <h3 className='ph3right'>Il Cardo Massimo</h3>
              <p className="p2">
              Il Cardo Maximus’ era la strada principale che attraversava Aquileia in direzione nord-sud, . Questa via collegava la città al porto fluviale sul Natisone, rendendola un importante snodo commerciale per il traffico di merci provenienti dall'Adriatico e dalle province settentrionali dell’Impero. <br></br><br></br>Il ‘Cardo Maximus’ era pavimentato con grandi lastre di pietra, con marciapiedi laterali e fognature sotterranee per il drenaggio delle acque. Lungo il percorso si trovavano ‘tabernae’ (botteghe commerciali), terme, edifici pubblici e residenze aristocratiche.   </p>          <br />
            <h3 className='ph3left'>Il Decumano Massimo</h3>
              <p className="p2">
            Il ‘Decumanus Maximus’, dedicato alla nobildonna Aratria Gallia, perpendicolare al cardo, attraversava la città in  direzione est-ovest, collegandola con altre città e province. Costituiva l’asse principale di transito per chi giungeva da Aquileia verso il Veneto e l’Istria.  Anch’esso era lastricato e fiancheggiato da edifici pubblici e privati. Il decumano era attraversato da vie minori (cardi e decumani secondari), creando una rete viaria ben strutturata e funzionale, tipica delle città romane.  Uno degli elementi più importanti era la ‘porta urbica’, situata alle estremità del decumano, che regolava l’ingresso e l’uscita dalla città, servendo sia a scopi difensivi che commerciali. Inoltre  il Decumano della città di Aquileia è stato recentemente riacquistato dal comune per poterne apportare delle modifiche, in modo da ricostruire in futuro una struttura ancora più verosimile a quella originaria della città.   </p>       <br />
            </div>
            <div className='slugsubImage'>
              <img src="/cardo.jpeg" alt="Cardo" className="slugsubImageRight" />
            </div>
          </div>
          <div className='slugTextImageLeft'>
            <div className='doublephoto'>
            <div className='slugsubImage double'>
              <img src="/foro1.jpeg" alt="Foro" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/foro2.jpeg" alt="Foro" className="slugsubImageLeft" />
            </div>
            </div>
            <div className='slugsubText'>
            <h3 className='ph3right'>Il Foro di Aquileia</h3>
            <p className="p1">
            Il foro di Aquileia era il cuore della vita pubblica della città. Situato nell’area centrale, all’incrocio tra il cardo e il decumano maggiore, era il centro politico, amministrativo, commerciale e religioso di Aquileia.      <br></br> <br></br> Con una platea di circa 10000 m2 , il foro aveva una pianta rettangolare ed era circondato da portici con colonne di marmo: durante il periodo fascista ricostruite in mattoni e poi negli anni ’70 con marmo di Aurisina . La sua pavimentazione era in lastre di pietra calcarea, mentre lungo il perimetro si trovavano statue, monumenti onorari e iscrizioni dedicate a personaggi illustri. <br></br><br></br>Gli edifici principali presenti nel foro erano: <br></br><br></br>
            
            - La basilica civile, utilizzata per attività giuridiche e amministrative.  <br></br><br></br>

            - La curia, sede del consiglio cittadino.  <br></br><br></br>

            - Il comitium, spazio dedicato alle assemblee pubbliche. <br></br><br></br> 

            - I templi, dedicati alle principali divinità romane.  <br></br><br></br>

            - diversi segmenti murari , occupati dalle vare botteghe.<br></br><br></br>

            Una caratteristica interessante è quella legata al problema idrico del foro, infatti esso sorge su una pianura che converge con un lieve declino. Infatti il foro presentava una sequenza di mattoncini posti diagonalmente per poter drenare l’acqua.
            </p>
            </div>
          </div>

          <div className='slugTextImageRight'>
            <div className='slugsubText'>
            <h3 className='ph3right'>Il Porto Fluviale</h3>
              <p className="p2">
              Il porto fluviale di Aquileia era uno degli elementi più strategici della città romana, un punto di snodo fondamentale per il commercio e i trasporti. Situato lungo il fiume Natissa, il quale presentava una distanza fra le due sponde di circa 48 metri, e che collegava Aquileia al mare Adriatico, il porto permetteva il transito di merci e persone tra l’entroterra e le rotte mediterranee.  <br></br><br></br> Struttura: <br></br><br></br> Il porto era costruito con una serie di banchine per l’ormeggio lastricate in pietra che costeggiavano il fiume per diverse centinaia di metri. Queste banchine erano dotate di scalini che consentivano il facile accesso alle imbarcazioni, facilitando le operazioni di carico e scarico delle merci. <br></br><br></br>
              
              I principali elementi erano:  <br></br><br></br>

              - Moli e approdi: piattaforme di attracco dove le navi potevano ormeggiare in sicurezza.  <br></br><br></br>

              - Magazzini e depositi: costruzioni adibite alla conservazione delle merci in attesa di essere distribuite o trasportate altrove, qui sono state rinvenute innumerevoli anfore oggi conservate al Museo di Aquileia. <br></br><br></br>

              - Rampe e scale: utilizzate per il trasporto delle merci dalle navi alle aree di stoccaggio e sopraelevate in modo da non subire inondazioni.  <br></br><br></br>

              - Strade lastricate: collegavano direttamente il porto al foro e alla rete viaria della città, facilitando il commercio.  Lungo il porto si trovavano anche ‘tabernae e officinae’ che servivano i mercanti e i viaggiatori, offrendo ristoro e assistenza ai navigatori.  <br></br><br></br>
              </p>
              <p className="p2">
              Oltre alla funzione commerciale, il porto aveva un ruolo strategico-militare. Era utilizzato per il trasporto di truppe e rifornimenti durante le campagne nelle province settentrionali, fungendo da base logistica per l’espansione romana lungo il limes danubiano.  Tuttavia con il progressivo declino dell’Impero Romano e le devastazioni causate dalle invasioni barbariche, il porto fluviale perse importanza. Il fiume Natissa si interrò progressivamente, rendendo le sue acque meno navigabili, e l’attività commerciale si spostò verso altre città. Infatti già a partire dal IV secolo d.C. il porto non avrà più grande rilievo. </p>            
            </div>
            <div className='doublephoto'>
            <div className='slugsubImage double'>
              <img src="/porto1.jpeg" alt="Porto" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/porto2.jpeg" alt="Porto" className="slugsubImageLeft" />
            </div>
            </div>
          </div>

          <div className='slugTextImageLeft'>
          <div className='doublephoto'>
            <div className='slugsubImage double'>
              <img src="/domus1.jpg" alt="Domus" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/domus3.jpg" alt="Domus" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/domus4.webp" alt="Domus" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/domus5.jpg" alt="Domus" className="slugsubImageLeft" />
            </div>
            </div>
            <div className='slugsubText'>
              <h3 className='ph3left'>Domus di Tito Macro</h3>
            <p className="p1">
            La ‘Domus di Tito Macro’ è una delle più importanti e meglio ricostruite abitazioni romane di Aquileia. Si tratta di una grande residenza aristocratica risalente al I secolo d.C., che rappresenta un esempio eccezionale dell’architettura domestica romana e testimonia il lusso e la raffinatezza delle élite locali.   <br></br><br></br> Struttura: <br></br><br></br> 
            La domus si estende per circa 1.700 metri quadrati, rendendola una delle più vaste abitazioni private dell’Italia settentrionale in epoca romana. L’organizzazione degli spazi segue lo schema tipico delle residenze patrizie, con ambienti disposti attorno a cortili interni e dotati di pavimenti a mosaico e pareti decorate.  

            - L’ atrio nella domus romana era l’ingresso principale della casa, uno spazio ampio e decorato dove i visitatori venivano accolti.  <br></br><br></br>

            - Il peristilio, un cortile colonnato con giardino interno, rappresentava il cuore della domus, attorno al quale si diramavano gli ambienti principali.  <br></br><br></br>

            - Il ‘triclinium’ (sala da pranzo) era ornato con mosaici e affreschi raffinati, dimostrando l’elevato status sociale del proprietario.  <br></br><br></br>

            - Le 'cubicula' (camere da letto) erano distribuite lungo il peristilio e garantivano un ambiente privato ai membri della famiglia.  <br></br><br></br>

            - La casa comprendeva anche  ambienti di servizio, tra cui una cucina e stanze per la servitù.  <br></br><br></br>

            Mosaici e Decorazioni  <br></br><br></br>

            Uno degli elementi più affascinanti della Domus di Tito Macro sono i suoi mosaici pavimentali, che rappresentano motivi geometrici, figure animali e scene mitologiche, con temi bianchi e neri. Questi mosaici testimoniano l’influenza dell’arte romana e la ricchezza del proprietario.  <br></br><br></br>

            Sebbene non si abbiano informazioni certe sulla figura di quest’ultimo, il suo nome è stato identificato grazie a un’iscrizione ritrovata su una maniglia della domus. Si ipotizza che fosse un ricco mercante o un membro dell’aristocrazia locale, che grazie ai commerci e all’attività economica di Aquileia poté costruire una residenza di grande prestigio.  <br></br><br></br>

            La Domus di Tito Macro è stata riportata alla luce grazie agli scavi archeologici iniziati nel XX secolo. Oggi è uno dei siti più importanti di Aquileia ed è visitabile all’interno dell’area archeologica, con percorsi che permettono di ammirare i mosaici originali e le strutture restaurate, costituendo una testimonianza della vita quotidiana romana.<br></br><br></br>
            </p>
            <br />
            </div>
          </div>

          <div className='slugTextImageRight'>
            <div className='slugsubText'>
            <h3 className='ph3right'>La Basilica</h3>
              <p className="p2">
              La ‘Basilica di Santa Maria Assunta’ ad ‘Aquileia’ è uno dei monumenti più importanti del cristianesimo primitivo e un capolavoro dell’arte medievale. Dichiarata ‘Patrimonio dell’Umanità dall’Unesco nel 1998. La basilica attuale è il risultato di numerose fasi costruttive che si sono susseguite dal IV al XIV secolo. Il suo interno conserva il più vasto pavimento musivo paleocristiano del mondo occidentale contando circa 760 metri quadrati, oltre a una straordinaria cripta affrescata.                
              Storia  <br></br><br></br>

              La prima basilica fu costruita nel 313-320 d.C. per volontà del vescovo Teodoro, poco dopo l’Editto di Milano con cui Costantino legalizzò il cristianesimo. Questa primitiva chiesa era formata da due grandi aule parallele, utilizzate per il culto e le attività della comunità cristiana. In seguito , sotto il patriarca Massenzio, la basilica fu ampliata e decorata con nuovi elementi, tra cui l'iconostasi e la famosa ‘cripta degli affreschi’. Ulteriori restauri e abbellimenti vennero eseguiti nel XI secolo dal patriarca Poppone, che ricostruì il presbiterio e fece innalzare il maestoso campanile romanico, alto 73 metri.  Inoltre in seguito ad un terremoto nel 1348, la basilica subì importanti restauri in stile gotico, con la costruzione delle volte a crociera e nuove decorazioni.  <br></br><br></br>

              La struttura attuale della basilica presenta una pianta a croce latina con tre navate, separate da colonne di pietra con capitelli scolpiti mentre l’abside è decorata con affreschi medievali.  La facciata è austera e in stile romanico invece il campanile rappresenta una delle torri più imponenti dell’architettura medievale friulana.  <br></br><br></br>
              
              Il Pavimento musivo <br></br><br></br>

              Uno degli elementi più straordinari della basilica è il suo pavimento musivo, risalente al IV secolo d.C. e conservato quasi interamente. Si tratta di oltre 750 metri quadrati di mosaici, che rappresentano:                
              
              -Scene bibliche e simboliche, come il ‘Buon Pastore’ e la ‘lotta tra l’uccello e la tartaruga’ (simbolo del trionfo del bene sul male, l’oscurità contro la luce).  <br></br><br></br>

              - Ritratti di personaggi dell’epoca, tra cui il vescovo Teodoro e alcuni fedeli.  <br></br><br></br>

              - Scene di vita marina e animale, con pesci, delfini, cervi e pavoni, simboli dell’eternità e della resurrezione.  
              <br></br><br></br>
              Il pavimento è suddiviso in sei riquadri principali, ciascuno con una propria narrazione teologica e sormontato da passerelle in vetro per consentire ai visitatori di perlustrare la basilica senza rovinare la particolarità musiva<br></br><br></br>

              La cripta degli affreschi
              <br></br><br></br>
              Si trova sotto il presbiterio ed è decorata con affreschi bizantini dell’XI secolo. Le pitture raffigurano scene della vita di Cristo, degli Apostoli e dei Patriarchi di Aquileia, con uno stile che richiama l’arte bizantina e carolingia.  
              <br></br><br></br>
              La Cripta degli Scavi  
              <br></br><br></br>
              Quest’area conserva i resti delle prime costruzioni cristiane di Aquileia, tra cui le fondamenta della prima basilica Teodoriana e frammenti di affreschi paleocristiani.   <br></br><br></br>
              </p>
            </div>
            <div className='doublephoto'>
            <div className='slugsubImage double'>
              <img src="/bas1.jpeg" alt="Basilica" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/bas2.jpeg" alt="Basilica" className="slugsubImageLeft" />
            </div>            
            <div className='slugsubImage double'>
              <img src="/bas3.jpeg" alt="Basilica" className="slugsubImageLeft" />
            </div>
            <div className='slugsubImage double'>
              <img src="/bas4.jpeg" alt="Basilica" className="slugsubImageLeft" />
            </div>
            </div>
          </div>
        </section>

        <div className="slugQuote">
          <p className="quoteText">
            “La pietra è la memoria della Terra: ogni monumento è un eco silenzioso di antichi splendori.”
          </p>
          <p className="quoteAuthor">— Autore sconosciuto</p>
        </div>

      
      </main>

      <Footer />
    </>
  );
}