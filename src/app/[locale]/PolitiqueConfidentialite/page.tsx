'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PolitiqueConfidentialite() {
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
          Politique de Confidentialité
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Aperçu</h2>
          <p className="mb-8 text-2xl">
            Ce document explique comment nous gérons vos informations personnelles lorsque vous utilisez nos services. "Informations personnelles" signifie tout détail qui pourrait être utilisé pour vous identifier. Cette politique ne couvre pas les pratiques d'entreprises que nous ne contrôlons pas ou de personnes extérieures à notre organisation.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Collecte et Utilisation des Données Personnelles</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Types de Données Personnelles que Nous Collectons (et Pourquoi)</h3>
          <p className="mb-8 text-2xl">
            Voici un résumé des informations personnelles que nous avons collectées au cours des 12 derniers mois, ainsi que les raisons et comment nous les utilisons :
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Informations Client</h4>
          <p className="mb-8 text-2xl">
            Nous avons besoin de votre nom, coordonnées et adresse pour gérer votre compte et fournir nos services (comme expédier des produits, envoyer des mises à jour et gérer les aspects légalement requis).
          </p>
          <p className="mb-8 text-2xl">
            Nous utilisons également ces informations pour améliorer nos services et pour le marketing ciblé avec votre permission.
          </p>
          <p className="mb-8 text-2xl">
            Nous utiliserons votre email pour partager des nouvelles sur nos produits, les mises à jour de l'application et les webinaires pertinents.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Stockage des Informations Client</h4>
          <p className="mb-8 text-2xl">
            Nous conservons vos informations client pendant six ans après la fin de votre abonnement au cas où vous souhaiteriez revenir, ou si des problèmes juridiques surviennent. Nos partenaires de laboratoire peuvent avoir besoin de les conserver plus longtemps pour se conformer aux lois locales.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Données de Santé Auto-déclarées</h4>
          <p className="mb-8 text-2xl">
            Vous pouvez choisir de partager des détails de santé comme vos habitudes alimentaires ou conditions préexistantes.
          </p>
          <p className="mb-8 text-2xl">
            Nous utilisons ces informations pour nous assurer que nos services vous conviennent, pour aider à l'analyse d'échantillons de laboratoire et dans nos efforts de recherche.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Comment Nous Utilisons Vos Données</h3>
          <p className="mb-8 text-2xl">
            Notre objectif principal est de rechercher comment l'alimentation impacte la santé.
          </p>
          <p className="mb-8 text-2xl">
            Vos informations nous aident à fournir un support, répondre aux exigences légales et atteindre d'autres objectifs comme expliqué ci-dessus.
          </p>
          <p className="mb-8 text-2xl">
            Nous nous engageons à être ouverts et honnêtes sur la façon dont nous utilisons vos données, et nous respectons toujours la loi.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Divulgation de Vos Données Personnelles</h2>
          <p className="mb-8 text-2xl">
            Nous partageons vos Données Personnelles dans des situations limitées :
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Notre Entreprise :</span> Avec d'autres parties de notre groupe d'entreprises, y compris GUTRICIOUS et d'autres filiales internationales.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Partenaires de Recherche :</span> Avec des institutions académiques et des entreprises pharmaceutiques pour des études de santé et diététiques. Nous protégeons votre identité en ne partageant que des données anonymisées.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Laboratoires de Tests :</span> Avec des laboratoires autorisés par nous pour traiter les tests. Nous partageons les informations personnelles et de santé nécessaires, surtout si les lois locales exigent l'approbation d'un médecin pour les tests directs au consommateur.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fournisseurs d'Appareils :</span> Avec les fournisseurs d'appareils qui surveillent votre santé (comme les moniteurs de glucose). Nous partageons les données nécessaires au fonctionnement des appareils.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Partenaires d'Expédition :</span> Avec les entreprises qui livrent nos produits et transportent les échantillons.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fournisseurs de Services :</span> Avec des entreprises qui nous aident avec des choses comme :
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Stockage cloud, technologie et communication</li>
                <li className="text-2xl">Sécurité et prévention de la fraude</li>
                <li className="text-2xl">Analyse de données</li>
                <li className="text-2xl">Support client</li>
                <li className="text-2xl">Traitement des paiements</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Conseillers Professionnels :</span> Avec nos avocats et autres conseillers (qui sont tenus de garder vos informations confidentielles).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Changements d'Entreprise :</span> Si nous sommes impliqués dans une fusion, acquisition, faillite ou événement similaire, vos données peuvent être transférées à la nouvelle entreprise. Nous vous préviendrons avant que cela n'arrive et avant que vos données ne soient soumises à une nouvelle Politique de Confidentialité.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Note Importante :</span> Nous pouvons convertir les Données Personnelles en données anonymes qui ne peuvent pas vous identifier. Nous pouvons utiliser ou partager ceci à des fins commerciales sans restriction.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Suivi Numérique et Publicités</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Comment Nous Vous Suivons</h3>
          <p className="mb-8 text-2xl">
            Nous utilisons des cookies et des technologies similaires pour comprendre comment vous utilisez nos services, vous reconnaître et améliorer votre expérience. Nous n'honorons actuellement pas les paramètres "Do Not Track". Veuillez consulter notre <a href="/fr/PolitiqueCookies" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Politique de Cookies</a> pour plus de détails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Publicité Meta</h3>
          <p className="mb-8 text-2xl">
            Nous utilisons les outils de Meta (Meta Pixel et Conversions API) pour mieux cibler nos publicités. Cela implique de partager certaines données utilisateur non réversibles avec Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Vos Droits</h3>
          <p className="mb-8 text-2xl">
            Nous et Meta sommes tous deux considérés comme des contrôleurs de données sous le RGPD. Vous pouvez en savoir plus sur la façon dont Meta utilise vos données et vos droits dans leur Politique de Données. Les détails sont également dans nos accords légaux avec Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Listes de Diffusion</h3>
          <p className="mb-8 text-2xl">
            Vous pouvez vous inscrire à nos listes de diffusion même sans compte. Vous pouvez toujours vous désabonner en utilisant le lien fourni dans nos emails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Recherche Utilisateur</h3>
          <p className="mb-8 text-2xl">
            Si vous êtes client, nous pouvons vous inviter à donner des commentaires sur nos produits pour nous aider à améliorer.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Protection et Rétention de Vos Données</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Sécurité</h3>
          <p className="mb-8 text-2xl">
            Nous mettons en place des mesures de sécurité conçues pour protéger vos Données Personnelles contre l'accès non autorisé. Nous vous encourageons également à prendre des mesures pour garder vos informations en sécurité.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Rétention</h3>
          <p className="mb-8 text-2xl">
            Nous conservons vos données aussi longtemps que nécessaire pour les objectifs expliqués dans cette politique. Certaines données peuvent être conservées plus longtemps pour répondre aux exigences légales ou pour des raisons commerciales valides. Vous trouverez des périodes de rétention spécifiques dans chaque section de catégorie de données.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Données Personnelles des Enfants</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Limite d'Âge</h3>
          <p className="mb-8 text-2xl">
            Nous ne collectons pas sciemment de Données Personnelles d'enfants de moins de 18 ans sans consentement parental. Nos Conditions de Service reflètent cela.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Âge 13-18</h3>
          <p className="mb-8 text-2xl">
            Nous pouvons collecter des Données Personnelles d'enfants entre 13 et 18 ans si nous avons le consentement parental et que la collecte se fait sous supervision parentale.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Collecte Non Autorisée</h3>
          <p className="mb-8 text-2xl">
            Si vous croyez que nous avons collecté des Données Personnelles d'un enfant sans le consentement approprié, veuillez nous contacter immédiatement à <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Nous prendrons des mesures pour supprimer ces informations.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Droits pour les Sujets de Données de l'Union Européenne (UE)</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Vos Droits Sous le RGPD</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS stocke vos données dans l'UE et se conforme au Règlement Général sur la Protection des Données (RGPD). Cela vous donne des droits spécifiques sur vos Données Personnelles, même si vous vivez en dehors de l'UE.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Comprendre Vos Droits</h3>
          <p className="mb-8 text-2xl">
            Nous avons expliqué les types de Données Personnelles que nous collectons, comment nous les utilisons, la base légale pour le traitement et avec qui nous les partageons.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Exercer Vos Droits</h3>
          <p className="mb-8 text-2xl">
            Pour demander l'accès, la correction, la suppression ou d'autres actions concernant vos Données Personnelles, contactez-nous à <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Vous pouvez également gérer certaines demandes via notre portail de confidentialité.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Mises à Jour de la Politique</h2>
          <p className="mb-8 text-2xl">
            Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps pour refléter les changements dans la façon dont nous gérons vos données. Veuillez vérifier régulièrement pour rester informé.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Nous Contacter</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Questions ou Commentaires</h3>
          <p className="mb-8 text-2xl">
            Contactez-nous à <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> pour toute question sur cette politique ou pour exercer vos droits de données.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Demandes Générales</h3>
          <p className="mb-8 text-2xl">
            Pour les questions générales, envoyez un email à <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Portail de Confidentialité</h3>
          <p className="mb-8 text-2xl">
            Notre portail dédié est le meilleur moyen de faire des demandes d'accès ou de suppression de données.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Délégué à la Protection des Données</h3>
          <p className="mb-8 text-2xl">
            Notre DPO est toujours disponible à <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> pour assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
