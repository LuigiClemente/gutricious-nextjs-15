'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PolitiqueCookies() {
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
          Politique des Cookies
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Types de Cookies que Nous Utilisons</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies Essentiels</h3>
          <p className="mb-8 text-2xl">
            Ceux-ci sont nécessaires au fonctionnement de notre site web. Ils font des choses comme stocker les articles de votre panier, mémoriser vos paramètres de langue et vous maintenir connecté.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Sécurité</h3>
          <p className="mb-8 text-2xl">
            Ceux-ci protègent votre compte et préviennent la fraude. Ils vérifient votre identité et s'assurent que personne d'autre ne peut accéder à vos informations.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies d'Analyse</h3>
          <p className="mb-8 text-2xl">
            Ceux-ci nous aident à comprendre comment les gens utilisent notre site. Nous apprenons quelles pages sont populaires, quelles fonctionnalités ont besoin d'amélioration et comment nous pouvons vous offrir une meilleure expérience.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies Publicitaires</h3>
          <p className="mb-8 text-2xl">
            Ces cookies nous aident à vous montrer des publicités qui pourraient réellement vous intéresser, basées sur vos intérêts. Ils vous empêchent également de voir les mêmes publicités de manière répétée.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Personnalisation</h3>
          <p className="mb-8 text-2xl">
            Ces cookies rendent votre expérience plus adaptée à vous. Ils mémorisent vos préférences, pour que vous obteniez des recommandations, des résultats de recherche et des publicités plus pertinents.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Votre Contrôle sur les Cookies</h2>
          <p className="mb-8 text-2xl">
            Vous avez des choix sur la façon dont nous utilisons les cookies. Voici comment vous pouvez les gérer :
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Paramètres du Navigateur :</span> Vous pouvez modifier les paramètres de votre navigateur pour bloquer ou autoriser certains cookies.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Nos Paramètres de Confidentialité:</span> Visitez notre page de paramètres de confidentialité pour ajuster vos préférences <a href="/fr/PolitiqueConfidentialite" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Politique de Confidentialité</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Appareils Mobiles :</span> Vous trouverez généralement les contrôles de cookies dans le menu des paramètres de votre appareil.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Veuillez Noter : Bloquer certains cookies pourrait rendre certaines parties de notre site web moins fonctionnelles.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Des Questions ?</h2>
          <p className="mb-8 text-2xl">
            Si vous avez des questions sur notre politique de cookies, veuillez nous contacter à <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            Nous voulons que vous vous sentiez informé et en contrôle de votre expérience en ligne. Cette politique vise à vous donner les informations claires dont vous avez besoin.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Modifications de Cette Politique</h2>
          <p className="mb-8 text-2xl">
            Nous pouvons mettre à jour cette politique de temps en temps. Si nous apportons des changements significatifs, nous vous en informerons de manière appropriée.
          </p>
        </div>
      </div>
    </div>
  );
}
