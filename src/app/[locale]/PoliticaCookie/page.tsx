'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaCookie() {
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
          Politica Cookie
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Tipi di Cookie che Utilizziamo</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookie Essenziali</h3>
          <p className="mb-8 text-2xl">
            Questi sono necessari per il funzionamento del nostro sito web. Fanno cose come memorizzare gli articoli del carrello, ricordare le impostazioni della lingua e mantenerti connesso.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookie di Sicurezza</h3>
          <p className="mb-8 text-2xl">
            Questi proteggono il tuo account e prevengono le frodi. Verificano la tua identità e si assicurano che nessun altro possa accedere alle tue informazioni.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookie di Analisi</h3>
          <p className="mb-8 text-2xl">
            Questi ci aiutano a capire come le persone usano il nostro sito. Impariamo quali pagine sono popolari, quali funzionalità hanno bisogno di miglioramenti e come possiamo offrirti un'esperienza migliore.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookie Pubblicitari</h3>
          <p className="mb-8 text-2xl">
            Questi cookie ci aiutano a mostrarti pubblicità che potrebbero interessarti davvero, basate sui tuoi interessi. Ti impediscono anche di vedere gli stessi annunci ripetutamente.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookie di Personalizzazione</h3>
          <p className="mb-8 text-2xl">
            Questi cookie rendono la tua esperienza più personalizzata. Ricordano le tue preferenze, così ottieni raccomandazioni, risultati di ricerca e pubblicità più rilevanti.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Il Tuo Controllo sui Cookie</h2>
          <p className="mb-8 text-2xl">
            Hai delle scelte su come usiamo i cookie. Ecco come puoi gestirli:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Impostazioni del Browser:</span> Puoi modificare le impostazioni del tuo browser per bloccare o consentire determinati cookie.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Le Nostre Impostazioni sulla Privacy:</span> Visita la nostra pagina delle impostazioni sulla privacy per regolare le tue preferenze <a href="/it/PoliticaPrivacy" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Politica sulla Privacy</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Dispositivi Mobili:</span> Di solito troverai i controlli dei cookie nel menu delle impostazioni del tuo dispositivo.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Nota Importante: Bloccare alcuni cookie potrebbe rendere parti del nostro sito web meno funzionali.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Domande?</h2>
          <p className="mb-8 text-2xl">
            Se hai domande sulla nostra politica cookie, contattaci a <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            Vogliamo che ti senta informato e in controllo della tua esperienza online. Questa politica mira a darti le informazioni chiare di cui hai bisogno.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Modifiche a Questa Politica</h2>
          <p className="mb-8 text-2xl">
            Potremmo aggiornare questa politica di tanto in tanto. Se apportiamo modifiche significative, ti informeremo appropriatamente.
          </p>
        </div>
      </div>
    </div>
  );
}
