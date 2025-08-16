'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function CookieRichtlinie() {
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
          Cookie-Richtlinie
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Arten von Cookies, die wir verwenden</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Wesentliche Cookies</h3>
          <p className="mb-8 text-2xl">
            Diese sind notwendig für das Funktionieren unserer Website. Sie tun Dinge wie das Speichern Ihrer Warenkorbartikel, das Merken Ihrer Spracheinstellungen und das Eingeloggt-Halten.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Sicherheits-Cookies</h3>
          <p className="mb-8 text-2xl">
            Diese schützen Ihr Konto und verhindern Betrug. Sie verifizieren Ihre Identität und stellen sicher, dass niemand sonst auf Ihre Informationen zugreifen kann.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Analyse-Cookies</h3>
          <p className="mb-8 text-2xl">
            Diese helfen uns zu verstehen, wie Menschen unsere Website nutzen. Wir erfahren, welche Seiten beliebt sind, welche Funktionen Verbesserungen benötigen und wie wir Ihnen eine bessere Erfahrung bieten können.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Werbe-Cookies</h3>
          <p className="mb-8 text-2xl">
            Diese Cookies helfen uns, Ihnen Werbung zu zeigen, die Sie tatsächlich interessieren könnte, basierend auf Ihren Interessen. Sie verhindern auch, dass Sie dieselben Anzeigen wiederholt sehen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Personalisierungs-Cookies</h3>
          <p className="mb-8 text-2xl">
            Diese Cookies machen Ihre Erfahrung persönlicher für Sie. Sie merken sich Ihre Präferenzen, damit Sie relevantere Empfehlungen, Suchergebnisse und Anzeigen erhalten.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Ihre Kontrolle über Cookies</h2>
          <p className="mb-8 text-2xl">
            Sie haben Wahlmöglichkeiten bezüglich der Verwendung von Cookies. So können Sie sie verwalten:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Browser-Einstellungen:</span> Sie können die Einstellungen Ihres Browsers ändern, um bestimmte Cookies zu blockieren oder zu erlauben.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Unsere Datenschutzeinstellungen:</span> Besuchen Sie unsere Datenschutzeinstellungsseite, um Ihre Präferenzen anzupassen <a href="/de/Datenschutzrichtlinie" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Datenschutzrichtlinie</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Mobile Geräte:</span> Sie finden Cookie-Kontrollen normalerweise im Einstellungsmenü Ihres Geräts.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Bitte beachten Sie: Das Blockieren einiger Cookies könnte Teile unserer Website weniger funktional machen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Fragen?</h2>
          <p className="mb-8 text-2xl">
            Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            Wir möchten, dass Sie sich informiert und in Kontrolle Ihrer Online-Erfahrung fühlen. Diese Richtlinie zielt darauf ab, Ihnen die klaren Informationen zu geben, die Sie benötigen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Änderungen an dieser Richtlinie</h2>
          <p className="mb-8 text-2xl">
            Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Wenn wir bedeutende Änderungen vornehmen, werden wir Sie angemessen benachrichtigen.
          </p>
        </div>
      </div>
    </div>
  );
}
