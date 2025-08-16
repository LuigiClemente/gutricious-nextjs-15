'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Cookiebeleid() {
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
          Cookiebeleid
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Soorten Cookies die Wij Gebruiken</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Essentiële Cookies</h3>
          <p className="mb-8 text-2xl">
            Deze zijn noodzakelijk voor het functioneren van onze website. Ze doen dingen zoals het opslaan van uw winkelwagenartikelen, het onthouden van uw taalinstellingen en u ingelogd houden.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Beveiligings Cookies</h3>
          <p className="mb-8 text-2xl">
            Deze beschermen uw account en voorkomen fraude. Ze verifiëren uw identiteit en zorgen ervoor dat niemand anders toegang kan krijgen tot uw informatie.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Analyse Cookies</h3>
          <p className="mb-8 text-2xl">
            Deze helpen ons begrijpen hoe mensen onze site gebruiken. We leren welke pagina's populair zijn, welke functies verbetering nodig hebben en hoe we u een betere ervaring kunnen bieden.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Advertentie Cookies</h3>
          <p className="mb-8 text-2xl">
            Deze cookies helpen ons u advertenties te tonen die u daadwerkelijk zouden kunnen interesseren, gebaseerd op uw interesses. Ze voorkomen ook dat u dezelfde advertenties herhaaldelijk ziet.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Personalisatie Cookies</h3>
          <p className="mb-8 text-2xl">
            Deze cookies maken uw ervaring meer op maat voor u. Ze onthouden uw voorkeuren, zodat u meer relevante aanbevelingen, zoekresultaten en advertenties krijgt.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Uw Controle over Cookies</h2>
          <p className="mb-8 text-2xl">
            U heeft keuzes over hoe we cookies gebruiken. Zo kunt u ze beheren:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Browser Instellingen:</span> U kunt de instellingen van uw browser wijzigen om bepaalde cookies te blokkeren of toe te staan.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Onze Privacy-instellingen:</span> Bezoek onze privacy-instellingenpagina om uw voorkeuren aan te passen <a href="/nl/Privacybeleid" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Privacybeleid</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Mobiele Apparaten:</span> U vindt cookie-controles meestal in het instellingenmenu van uw apparaat.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Let Op: Het blokkeren van sommige cookies kan delen van onze website minder functioneel maken.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Vragen?</h2>
          <p className="mb-8 text-2xl">
            Als u vragen heeft over ons cookiebeleid, neem dan contact met ons op via <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            We willen dat u zich geïnformeerd en in controle voelt over uw online ervaring. Dit beleid is bedoeld om u de duidelijke informatie te geven die u nodig heeft.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Wijzigingen in Dit Beleid</h2>
          <p className="mb-8 text-2xl">
            We kunnen dit beleid van tijd tot tijd bijwerken. Als we significante wijzigingen aanbrengen, zullen we u op de juiste manier informeren.
          </p>
        </div>
      </div>
    </div>
  );
}
