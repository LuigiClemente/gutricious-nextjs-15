'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function Privacybeleid() {
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
          Privacybeleid
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Overzicht</h2>
          <p className="mb-8 text-2xl">
            Dit document legt uit hoe we uw persoonlijke informatie behandelen wanneer u onze diensten gebruikt. "Persoonlijke informatie" betekent alle details die gebruikt kunnen worden om u te identificeren. Dit beleid dekt niet de praktijken van bedrijven die we niet controleren of mensen buiten onze organisatie.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Verzameling en Gebruik van Persoonlijke Gegevens</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Soorten Persoonlijke Gegevens die We Verzamelen (en Waarom)</h3>
          <p className="mb-8 text-2xl">
            Hier is een samenvatting van de persoonlijke informatie die we in de afgelopen 12 maanden hebben verzameld, samen met de redenen waarom en hoe we het gebruiken:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Klantinformatie</h4>
          <p className="mb-8 text-2xl">
            We hebben uw naam, contactgegevens en adres nodig om uw account te beheren en onze diensten te leveren (zoals producten verzenden, updates sturen en wettelijk vereiste aspecten afhandelen).
          </p>
          <p className="mb-8 text-2xl">
            We gebruiken deze informatie ook om onze diensten te verbeteren en voor gerichte marketing met uw toestemming.
          </p>
          <p className="mb-8 text-2xl">
            We zullen uw e-mail gebruiken om nieuws over onze producten, app-updates en relevante webinars te delen.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Opslag van Klantinformatie</h4>
          <p className="mb-8 text-2xl">
            We bewaren uw klantinformatie zes jaar na het einde van uw abonnement voor het geval u terug wilt komen, of als er juridische problemen ontstaan. Onze laboratoriumpartners moeten het mogelijk langer bewaren om te voldoen aan lokale wetten.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Zelf Gerapporteerde Gezondheidsgegevens</h4>
          <p className="mb-8 text-2xl">
            U kunt ervoor kiezen om gezondheidsdetails zoals uw eetgewoonten of bestaande aandoeningen te delen.
          </p>
          <p className="mb-8 text-2xl">
            We gebruiken deze informatie om ervoor te zorgen dat onze diensten geschikt voor u zijn, om te helpen bij laboratoriummonsteranalyse en in onze onderzoeksinspanningen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Hoe We Uw Gegevens Gebruiken</h3>
          <p className="mb-8 text-2xl">
            Ons hoofddoel is onderzoeken hoe voeding de gezondheid beïnvloedt.
          </p>
          <p className="mb-8 text-2xl">
            Uw informatie helpt ons ondersteuning te bieden, aan wettelijke vereisten te voldoen en andere doeleinden te bereiken zoals hierboven uitgelegd.
          </p>
          <p className="mb-8 text-2xl">
            We zijn toegewijd aan openheid en eerlijkheid over hoe we uw gegevens gebruiken, en we volgen altijd de wet.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Openbaarmaking van Uw Persoonlijke Gegevens</h2>
          <p className="mb-8 text-2xl">
            We delen uw Persoonlijke Gegevens in beperkte situaties:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Ons Bedrijf:</span> Met andere delen van onze bedrijfsgroep, inclusief GUTRICIOUS en andere internationale vestigingen.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Onderzoekspartners:</span> Met academische instellingen en farmaceutische bedrijven voor gezondheids- en voedingsstudies. We beschermen uw identiteit door alleen geanonimiseerde gegevens te delen.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Testlaboratoria:</span> Met door ons geautoriseerde laboratoria om tests te verwerken. We delen noodzakelijke persoonlijke en gezondheidsinformatie, vooral als lokale wetten een doktersgoedkeuring vereisen voor directe consumentests.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Apparaatleveranciers:</span> Met leveranciers van apparaten die uw gezondheid monitoren (zoals glucosemeters). We delen de gegevens die nodig zijn voor het functioneren van de apparaten.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Verzendpartners:</span> Met bedrijven die onze producten leveren en monsters transporteren.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Dienstverleners:</span> Met bedrijven die ons helpen met dingen zoals:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Cloud-opslag, technologie en communicatie</li>
                <li className="text-2xl">Beveiliging en fraudepreventie</li>
                <li className="text-2xl">Gegevensanalyse</li>
                <li className="text-2xl">Klantenondersteuning</li>
                <li className="text-2xl">Betalingsverwerking</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Professionele Adviseurs:</span> Met onze advocaten en andere adviseurs (die verplicht zijn uw informatie vertrouwelijk te houden).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Bedrijfsveranderingen:</span> Als we betrokken zijn bij een fusie, overname, faillissement of soortgelijke gebeurtenis, kunnen uw gegevens worden overgedragen aan het nieuwe bedrijf. We zullen u op de hoogte stellen voordat dit gebeurt en voordat uw gegevens onderworpen zijn aan een nieuw Privacybeleid.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Belangrijke Opmerking:</span> We kunnen Persoonlijke Gegevens omzetten in anonieme gegevens die u niet kunnen identificeren. We kunnen dit zonder beperking gebruiken of delen voor zakelijke doeleinden.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Digitale Tracking en Advertenties</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Hoe We U Volgen</h3>
          <p className="mb-8 text-2xl">
            We gebruiken cookies en vergelijkbare technologieën om te begrijpen hoe u onze diensten gebruikt, u te herkennen en uw ervaring te verbeteren. We respecteren momenteel geen "Do Not Track"-instellingen. Zie ons <a href="/nl/Cookiebeleid" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Cookiebeleid</a> voor meer details.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Meta Advertenties</h3>
          <p className="mb-8 text-2xl">
            We gebruiken Meta's tools (Meta Pixel en Conversions API) om onze advertenties beter te richten. Dit houdt in dat we enkele niet-omkeerbare gebruikersgegevens delen met Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Uw Rechten</h3>
          <p className="mb-8 text-2xl">
            Zowel wij als Meta worden beschouwd als gegevenscontrollers onder de AVG. U kunt meer vinden over hoe Meta uw gegevens gebruikt en uw rechten in hun Gegevensbeleid. Details staan ook in onze juridische overeenkomsten met Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Mailinglijsten</h3>
          <p className="mb-8 text-2xl">
            U kunt zich aanmelden voor onze mailinglijsten zelfs zonder account. U kunt zich altijd afmelden via de link in onze e-mails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Gebruikersonderzoek</h3>
          <p className="mb-8 text-2xl">
            Als u klant bent, kunnen we u uitnodigen om feedback te geven over onze producten om ons te helpen verbeteren.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Bescherming en Bewaring van Uw Gegevens</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Beveiliging</h3>
          <p className="mb-8 text-2xl">
            We implementeren beveiligingsmaatregelen ontworpen om uw Persoonlijke Gegevens te beschermen tegen ongeautoriseerde toegang. We moedigen u ook aan om stappen te ondernemen om uw informatie veilig te houden.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Bewaring</h3>
          <p className="mb-8 text-2xl">
            We bewaren uw gegevens zo lang als nodig is voor de doeleinden uitgelegd in dit beleid. Sommige gegevens kunnen langer bewaard worden om te voldoen aan wettelijke vereisten of om geldige zakelijke redenen. U vindt specifieke bewaringsperiodes binnen elke gegevenscategoriesectie.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Persoonlijke Gegevens van Kinderen</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Leeftijdsgrens</h3>
          <p className="mb-8 text-2xl">
            We verzamelen niet bewust Persoonlijke Gegevens van kinderen onder de 18 zonder ouderlijke toestemming. Onze Servicevoorwaarden weerspiegelen dit.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Leeftijd 13-18</h3>
          <p className="mb-8 text-2xl">
            We kunnen Persoonlijke Gegevens van kinderen tussen 13 en 18 jaar verzamelen als we ouderlijke toestemming hebben en de verzameling gebeurt onder ouderlijk toezicht.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ongeautoriseerde Verzameling</h3>
          <p className="mb-8 text-2xl">
            Als u gelooft dat we Persoonlijke Gegevens van een kind hebben verzameld zonder juiste toestemming, neem dan onmiddellijk contact met ons op via <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. We zullen stappen ondernemen om die informatie te verwijderen.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Rechten voor Europese Unie (EU) Gegevenssubjecten</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Uw Rechten Onder de AVG</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS slaat uw gegevens op in de EU en voldoet aan de Algemene Verordening Gegevensbescherming (AVG). Dit geeft u specifieke rechten over uw Persoonlijke Gegevens, zelfs als u buiten de EU woont.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Uw Rechten Begrijpen</h3>
          <p className="mb-8 text-2xl">
            We hebben de soorten Persoonlijke Gegevens uitgelegd die we verzamelen, hoe we ze gebruiken, de wettelijke basis voor verwerking en met wie we ze delen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Uw Rechten Uitoefenen</h3>
          <p className="mb-8 text-2xl">
            Om toegang, correctie, verwijdering of andere acties betreffende uw Persoonlijke Gegevens aan te vragen, neem contact met ons op via <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. U kunt ook sommige verzoeken beheren via ons privacyportaal.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Beleidsupdates</h2>
          <p className="mb-8 text-2xl">
            We kunnen dit Privacybeleid van tijd tot tijd bijwerken om veranderingen in hoe we uw gegevens behandelen weer te geven. Controleer regelmatig om op de hoogte te blijven.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Contact Met Ons Opnemen</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Vragen of Feedback</h3>
          <p className="mb-8 text-2xl">
            Neem contact met ons op via <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> voor vragen over dit beleid of om uw gegevensrechten uit te oefenen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Algemene Vragen</h3>
          <p className="mb-8 text-2xl">
            Voor algemene vragen, stuur een e-mail naar <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Privacyportaal</h3>
          <p className="mb-8 text-2xl">
            Ons toegewijde portaal is de beste manier om verzoeken voor gegevenstoegang of -verwijdering te doen.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Functionaris voor Gegevensbescherming</h3>
          <p className="mb-8 text-2xl">
            Onze DPO is altijd beschikbaar op <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> voor ondersteuning.
          </p>
        </div>
      </div>
    </div>
  );
}
