'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaPrivacy() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const [hovered, setHovered] = useState(false);

  const handleClose = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Close Button */}
      <button
        onClick={handleClose}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed rounded-full border-none text-white cursor-pointer flex items-center justify-center z-50 transition-all duration-200"
        style={{
          top: '20px',
          right: '20px',
          width: '44px',
          height: '44px',
          fontSize: '24px',
          background: hovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Close and return to home"
      >
        <IoMdClose />
      </button>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-16 text-center text-gray-800">
          Politica Privacy
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Panoramica</h2>
          <p className="mb-8 text-2xl">
            Questo documento spiega come gestiamo le tue informazioni personali quando usi i nostri servizi. "Informazioni personali" significa qualsiasi dettaglio che potrebbe essere usato per identificarti. Questa politica non copre le pratiche di aziende che non controlliamo o persone al di fuori della nostra organizzazione.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Raccolta e Uso dei Dati Personali</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Tipi di Dati Personali che Raccogliamo (e Perché)</h3>
          <p className="mb-8 text-2xl">
            Ecco un riassunto delle informazioni personali che abbiamo raccolto negli ultimi 12 mesi, insieme ai motivi e come le usiamo:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Informazioni Cliente</h4>
          <p className="mb-8 text-2xl">
            Abbiamo bisogno del tuo nome, dettagli di contatto e indirizzo per gestire il tuo account e fornire i nostri servizi (come spedire prodotti, inviare aggiornamenti e gestire aspetti legalmente richiesti).
          </p>
          <p className="mb-8 text-2xl">
            Usiamo anche queste informazioni per migliorare i nostri servizi e per marketing mirato con il tuo permesso.
          </p>
          <p className="mb-8 text-2xl">
            Useremo la tua email per condividere notizie sui nostri prodotti, aggiornamenti dell'app e webinar rilevanti.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Archiviazione Informazioni Cliente</h4>
          <p className="mb-8 text-2xl">
            Conserviamo le tue informazioni cliente per sei anni dopo la fine del tuo abbonamento nel caso volessi tornare, o se sorgono problemi legali. I nostri partner di laboratorio potrebbero aver bisogno di conservarle più a lungo per rispettare le leggi locali.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Dati Sanitari Auto-dichiarati</h4>
          <p className="mb-8 text-2xl">
            Puoi scegliere di condividere dettagli sulla salute come le tue abitudini alimentari o condizioni preesistenti.
          </p>
          <p className="mb-8 text-2xl">
            Usiamo queste informazioni per assicurarci che i nostri servizi siano giusti per te, per aiutare con l'analisi dei campioni di laboratorio e nei nostri sforzi di ricerca.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Come Usiamo i Tuoi Dati</h3>
          <p className="mb-8 text-2xl">
            Il nostro obiettivo principale è ricercare come la dieta impatta la salute.
          </p>
          <p className="mb-8 text-2xl">
            Le tue informazioni ci aiutano a fornire supporto, soddisfare requisiti legali e raggiungere altri scopi come spiegato sopra.
          </p>
          <p className="mb-8 text-2xl">
            Ci impegniamo ad essere aperti e onesti su come usiamo i tuoi dati, e seguiamo sempre la legge.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Divulgazione dei Tuoi Dati Personali</h2>
          <p className="mb-8 text-2xl">
            Condividiamo i tuoi Dati Personali in situazioni limitate:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">La Nostra Azienda:</span> Con altre parti del nostro gruppo aziendale, incluso GUTRICIOUS e altre filiali internazionali.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Partner di Ricerca:</span> Con istituzioni accademiche e aziende farmaceutiche per studi sulla salute e dietetici. Proteggiamo la tua identità condividendo solo dati anonimizzati.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Laboratori di Test:</span> Con laboratori autorizzati da noi per processare i test. Condividiamo informazioni personali e sanitarie necessarie, specialmente se le leggi locali richiedono l'approvazione di un medico per test diretti al consumatore.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fornitori di Dispositivi:</span> Con fornitori di dispositivi che monitorano la tua salute (come monitor del glucosio). Condividiamo i dati necessari per il funzionamento dei dispositivi.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Partner di Spedizione:</span> Con aziende che consegnano i nostri prodotti e trasportano campioni.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fornitori di Servizi:</span> Con aziende che ci aiutano con cose come:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Archiviazione cloud, tecnologia e comunicazione</li>
                <li className="text-2xl">Sicurezza e prevenzione frodi</li>
                <li className="text-2xl">Analisi dati</li>
                <li className="text-2xl">Supporto clienti</li>
                <li className="text-2xl">Elaborazione pagamenti</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Consulenti Professionali:</span> Con i nostri avvocati e altri consulenti (che sono tenuti a mantenere le tue informazioni confidenziali).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Cambiamenti Aziendali:</span> Se siamo coinvolti in una fusione, acquisizione, fallimento o evento simile, i tuoi dati potrebbero essere trasferiti alla nuova azienda. Ti avviseremo prima che questo accada e prima che i tuoi dati siano soggetti a una nuova Politica Privacy.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Nota Importante:</span> Potremmo convertire i Dati Personali in dati anonimi che non possono identificarti. Possiamo usare o condividere questo per scopi commerciali senza restrizioni.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Tracciamento Digitale e Pubblicità</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Come Ti Tracciamo</h3>
          <p className="mb-8 text-2xl">
            Utilizziamo cookie e tecnologie simili per capire come usi i nostri servizi, riconoscerti e migliorare la tua esperienza. Attualmente non rispettiamo le impostazioni "Do Not Track". Consulta la nostra <a href="/it/PoliticaCookie" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Politica Cookie</a> per maggiori dettagli.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Pubblicità Meta</h3>
          <p className="mb-8 text-2xl">
            Usiamo gli strumenti di Meta (Meta Pixel e Conversions API) per targetizzare meglio i nostri annunci. Questo comporta la condivisione di alcuni dati utente non reversibili con Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">I Tuoi Diritti</h3>
          <p className="mb-8 text-2xl">
            Sia noi che Meta siamo considerati controllori dei dati sotto il GDPR. Puoi trovare di più su come Meta usa i tuoi dati e i tuoi diritti nella loro Politica Dati. I dettagli sono anche nei nostri accordi legali con Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Mailing List</h3>
          <p className="mb-8 text-2xl">
            Puoi iscriverti alle nostre mailing list anche senza account. Puoi sempre disiscriverti usando il link fornito nelle nostre email.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ricerca Utenti</h3>
          <p className="mb-8 text-2xl">
            Se sei un cliente, potremmo invitarti a dare feedback sui nostri prodotti per aiutarci a migliorare.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Protezione e Conservazione dei Tuoi Dati</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Sicurezza</h3>
          <p className="mb-8 text-2xl">
            Implementiamo misure di sicurezza progettate per proteggere i tuoi Dati Personali dall'accesso non autorizzato. Ti incoraggiamo anche a prendere misure per mantenere le tue informazioni sicure.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Conservazione</h3>
          <p className="mb-8 text-2xl">
            Conserviamo i tuoi dati per il tempo necessario per gli scopi spiegati in questa politica. Alcuni dati potrebbero essere conservati più a lungo per soddisfare requisiti legali o per valide ragioni commerciali. Troverai periodi di conservazione specifici in ogni sezione di categoria dati.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Dati Personali dei Bambini</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Limite di Età</h3>
          <p className="mb-8 text-2xl">
            Non raccogliamo consapevolmente Dati Personali da bambini sotto i 18 anni senza consenso parentale. I nostri Termini di Servizio riflettono questo.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Età 13-18</h3>
          <p className="mb-8 text-2xl">
            Potremmo raccogliere Dati Personali da bambini tra 13 e 18 anni se abbiamo il consenso parentale e la raccolta avviene sotto supervisione parentale.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Raccolta Non Autorizzata</h3>
          <p className="mb-8 text-2xl">
            Se credi che abbiamo raccolto Dati Personali di un bambino senza il consenso appropriato, contattaci immediatamente a <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Prenderemo provvedimenti per eliminare quelle informazioni.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Diritti per Soggetti Dati dell'Unione Europea (UE)</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">I Tuoi Diritti Sotto il GDPR</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS archivia i tuoi dati nell'UE e rispetta il Regolamento Generale sulla Protezione dei Dati (GDPR). Questo ti dà diritti specifici sui tuoi Dati Personali, anche se vivi fuori dall'UE.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Comprendere i Tuoi Diritti</h3>
          <p className="mb-8 text-2xl">
            Abbiamo spiegato i tipi di Dati Personali che raccogliamo, come li usiamo, la base legale per il trattamento e con chi li condividiamo.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Esercitare i Tuoi Diritti</h3>
          <p className="mb-8 text-2xl">
            Per richiedere accesso, correzione, cancellazione o altre azioni riguardo ai tuoi Dati Personali, contattaci a <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Puoi anche gestire alcune richieste attraverso il nostro portale privacy.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Aggiornamenti Politica</h2>
          <p className="mb-8 text-2xl">
            Potremmo aggiornare questa Politica Privacy di tanto in tanto per riflettere cambiamenti nel modo in cui gestiamo i tuoi dati. Controlla regolarmente per rimanere informato.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Contattarci</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Domande o Feedback</h3>
          <p className="mb-8 text-2xl">
            Contattaci a <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> per qualsiasi domanda su questa politica o per esercitare i tuoi diritti sui dati.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Richieste Generali</h3>
          <p className="mb-8 text-2xl">
            Per domande generali, invia un'email a <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Portale Privacy</h3>
          <p className="mb-8 text-2xl">
            Il nostro portale dedicato è il modo migliore per fare richieste di accesso o cancellazione dati.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Responsabile Protezione Dati</h3>
          <p className="mb-8 text-2xl">
            Il nostro DPO è sempre disponibile a <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> per assistenza.
          </p>
        </div>
      </div>
    </div>
  );
}
