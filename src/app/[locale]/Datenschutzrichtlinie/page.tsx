'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Datenschutzrichtlinie() {
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
          Datenschutzrichtlinie
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Überblick</h2>
          <p className="mb-8 text-2xl">
            Dieses Dokument erklärt, wie wir Ihre persönlichen Informationen handhaben, wenn Sie unsere Dienste nutzen. "Persönliche Informationen" bedeutet alle Details, die zur Identifizierung verwendet werden könnten. Diese Richtlinie deckt nicht die Praktiken von Unternehmen ab, die wir nicht kontrollieren, oder Personen außerhalb unserer Organisation.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Sammlung und Verwendung persönlicher Daten</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Arten persönlicher Daten, die wir sammeln (und warum)</h3>
          <p className="mb-8 text-2xl">
            Hier ist eine Zusammenfassung der persönlichen Informationen, die wir in den letzten 12 Monaten gesammelt haben, zusammen mit den Gründen und wie wir sie verwenden:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Kundeninformationen</h4>
          <p className="mb-8 text-2xl">
            Wir benötigen Ihren Namen, Kontaktdaten und Adresse, um Ihr Konto zu verwalten und unsere Dienste zu erbringen (wie Produktversand, Updates senden und rechtlich erforderliche Aspekte handhaben).
          </p>
          <p className="mb-8 text-2xl">
            Wir verwenden diese Informationen auch zur Verbesserung unserer Dienste und für gezieltes Marketing mit Ihrer Erlaubnis.
          </p>
          <p className="mb-8 text-2xl">
            Wir werden Ihre E-Mail verwenden, um Neuigkeiten über unsere Produkte, App-Updates und relevante Webinare zu teilen.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Speicherung von Kundeninformationen</h4>
          <p className="mb-8 text-2xl">
            Wir bewahren Ihre Kundeninformationen sechs Jahre nach Ende Ihres Abonnements auf, falls Sie zurückkehren möchten oder rechtliche Probleme auftreten. Unsere Laborpartner müssen sie möglicherweise länger aufbewahren, um lokale Gesetze zu erfüllen.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Selbst gemeldete Gesundheitsdaten</h4>
          <p className="mb-8 text-2xl">
            Sie können wählen, Gesundheitsdetails wie Ihre Ernährungsgewohnheiten oder Vorerkrankungen zu teilen.
          </p>
          <p className="mb-8 text-2xl">
            Wir verwenden diese Informationen, um sicherzustellen, dass unsere Dienste für Sie geeignet sind, um bei der Laborprobenanalyse zu helfen und in unseren Forschungsbemühungen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Wie wir Ihre Daten verwenden</h3>
          <p className="mb-8 text-2xl">
            Unser Hauptziel ist es zu erforschen, wie Ernährung die Gesundheit beeinflusst.
          </p>
          <p className="mb-8 text-2xl">
            Ihre Informationen helfen uns, Support zu bieten, rechtliche Anforderungen zu erfüllen und andere oben erklärte Zwecke zu erreichen.
          </p>
          <p className="mb-8 text-2xl">
            Wir verpflichten uns, offen und ehrlich über die Verwendung Ihrer Daten zu sein und befolgen immer das Gesetz.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Offenlegung Ihrer persönlichen Daten</h2>
          <p className="mb-8 text-2xl">
            Wir teilen Ihre persönlichen Daten in begrenzten Situationen:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Unser Unternehmen:</span> Mit anderen Teilen unserer Unternehmensgruppe, einschließlich GUTRICIOUS und anderen internationalen Niederlassungen.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Forschungspartner:</span> Mit akademischen Institutionen und Pharmaunternehmen für Gesundheits- und Ernährungsstudien. Wir schützen Ihre Identität, indem wir nur anonymisierte Daten teilen.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Testlabore:</span> Mit von uns autorisierten Laboren zur Testverarbeitung. Wir teilen notwendige persönliche und Gesundheitsinformationen, besonders wenn lokale Gesetze eine ärztliche Genehmigung für direkte Verbrauchertests erfordern.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Geräteanbieter:</span> Mit Anbietern von Geräten, die Ihre Gesundheit überwachen (wie Glukosemonitore). Wir teilen die für das Funktionieren der Geräte erforderlichen Daten.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Versandpartner:</span> Mit Unternehmen, die unsere Produkte liefern und Proben transportieren.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Dienstleister:</span> Mit Unternehmen, die uns bei Dingen helfen wie:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Cloud-Speicher, Technologie und Kommunikation</li>
                <li className="text-2xl">Sicherheit und Betrugsprävention</li>
                <li className="text-2xl">Datenanalyse</li>
                <li className="text-2xl">Kundensupport</li>
                <li className="text-2xl">Zahlungsverarbeitung</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Professionelle Berater:</span> Mit unseren Anwälten und anderen Beratern (die verpflichtet sind, Ihre Informationen vertraulich zu behandeln).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Geschäftsänderungen:</span> Wenn wir an einer Fusion, Übernahme, Insolvenz oder ähnlichem Ereignis beteiligt sind, können Ihre Daten an das neue Unternehmen übertragen werden. Wir werden Sie benachrichtigen, bevor dies geschieht und bevor Ihre Daten einer neuen Datenschutzrichtlinie unterliegen.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Wichtiger Hinweis:</span> Wir können persönliche Daten in anonyme Daten umwandeln, die Sie nicht identifizieren können. Wir können diese ohne Einschränkung für Geschäftszwecke verwenden oder teilen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Digitale Verfolgung und Werbung</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Wie wir Sie verfolgen</h3>
          <p className="mb-8 text-2xl">
            Wir verwenden Cookies und ähnliche Technologien, um zu verstehen, wie Sie unsere Dienste nutzen, Sie zu erkennen und Ihre Erfahrung zu verbessern. Wir respektieren derzeit keine "Do Not Track"-Einstellungen. Bitte sehen Sie unsere <a href="/de/Cookie-Richtlinie" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Cookie-Richtlinie</a> für weitere Details.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Meta-Werbung</h3>
          <p className="mb-8 text-2xl">
            Wir verwenden Metas Tools (Meta Pixel und Conversions API), um unsere Anzeigen besser zu zielen. Dies beinhaltet das Teilen einiger nicht umkehrbarer Benutzerdaten mit Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ihre Rechte</h3>
          <p className="mb-8 text-2xl">
            Sowohl wir als auch Meta gelten unter der DSGVO als Datenverantwortliche. Sie können mehr darüber erfahren, wie Meta Ihre Daten verwendet und Ihre Rechte in ihrer Datenrichtlinie. Details stehen auch in unseren rechtlichen Vereinbarungen mit Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Mailinglisten</h3>
          <p className="mb-8 text-2xl">
            Sie können sich für unsere Mailinglisten auch ohne Konto anmelden. Sie können sich jederzeit über den in unseren E-Mails bereitgestellten Link abmelden.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Benutzerforschung</h3>
          <p className="mb-8 text-2xl">
            Wenn Sie Kunde sind, können wir Sie einladen, Feedback zu unseren Produkten zu geben, um uns bei der Verbesserung zu helfen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Schutz und Aufbewahrung Ihrer Daten</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Sicherheit</h3>
          <p className="mb-8 text-2xl">
            Wir implementieren Sicherheitsmaßnahmen zum Schutz Ihrer persönlichen Daten vor unbefugtem Zugriff. Wir ermutigen Sie auch, Schritte zu unternehmen, um Ihre Informationen sicher zu halten.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Aufbewahrung</h3>
          <p className="mb-8 text-2xl">
            Wir bewahren Ihre Daten so lange auf, wie es für die in dieser Richtlinie erklärten Zwecke erforderlich ist. Einige Daten können länger aufbewahrt werden, um rechtliche Anforderungen zu erfüllen oder aus gültigen Geschäftsgründen. Sie finden spezifische Aufbewahrungszeiten in jedem Datenkategorieabschnitt.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Persönliche Daten von Kindern</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Altersgrenze</h3>
          <p className="mb-8 text-2xl">
            Wir sammeln wissentlich keine persönlichen Daten von Kindern unter 18 Jahren ohne elterliche Zustimmung. Unsere Nutzungsbedingungen spiegeln dies wider.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Alter 13-18</h3>
          <p className="mb-8 text-2xl">
            Wir können persönliche Daten von Kindern zwischen 13 und 18 Jahren sammeln, wenn wir elterliche Zustimmung haben und die Sammlung unter elterlicher Aufsicht erfolgt.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Unbefugte Sammlung</h3>
          <p className="mb-8 text-2xl">
            Wenn Sie glauben, dass wir persönliche Daten eines Kindes ohne ordnungsgemäße Zustimmung gesammelt haben, kontaktieren Sie uns bitte sofort unter <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Wir werden Schritte unternehmen, um diese Informationen zu löschen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Rechte für Datensubjekte der Europäischen Union (EU)</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ihre Rechte unter der DSGVO</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS speichert Ihre Daten in der EU und entspricht der Datenschutz-Grundverordnung (DSGVO). Dies gibt Ihnen spezifische Rechte über Ihre persönlichen Daten, auch wenn Sie außerhalb der EU leben.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ihre Rechte verstehen</h3>
          <p className="mb-8 text-2xl">
            Wir haben die Arten persönlicher Daten erklärt, die wir sammeln, wie wir sie verwenden, die rechtliche Grundlage für die Verarbeitung und mit wem wir sie teilen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ausübung Ihrer Rechte</h3>
          <p className="mb-8 text-2xl">
            Um Zugang, Korrektur, Löschung oder andere Aktionen bezüglich Ihrer persönlichen Daten zu beantragen, kontaktieren Sie uns unter <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Sie können auch einige Anfragen über unser Datenschutzportal verwalten.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Richtlinien-Updates</h2>
          <p className="mb-8 text-2xl">
            Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren, um Änderungen in der Art zu reflektieren, wie wir Ihre Daten handhaben. Bitte überprüfen Sie regelmäßig, um informiert zu bleiben.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Kontakt zu uns</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Fragen oder Feedback</h3>
          <p className="mb-8 text-2xl">
            Kontaktieren Sie uns unter <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> für Fragen zu dieser Richtlinie oder um Ihre Datenrechte auszuüben.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Allgemeine Anfragen</h3>
          <p className="mb-8 text-2xl">
            Für allgemeine Fragen senden Sie eine E-Mail an <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Datenschutzportal</h3>
          <p className="mb-8 text-2xl">
            Unser spezielles Portal ist der beste Weg, um Datenzugriffs- oder Löschanfragen zu stellen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Datenschutzbeauftragter</h3>
          <p className="mb-8 text-2xl">
            Unser DSB ist immer unter <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> für Unterstützung verfügbar.
          </p>
        </div>
      </div>
    </div>
  );
}
