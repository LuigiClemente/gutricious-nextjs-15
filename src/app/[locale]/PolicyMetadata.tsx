import { getJsonLd } from "@/utils/schema";
import { Metadata } from "next";
import Script from "next/script";
import { generateMetadata as createMetadata } from "@/utils/metadata";

type PolicyType = 'privacy' | 'cookie' | 'terms';

interface PolicyMetadataProps {
  locale: string;
  policyType: PolicyType;
  path: string;
}

// Helper to get policy title based on type and locale
function getPolicyTitle(policyType: PolicyType, locale: string): string {
  const titles: Record<PolicyType, Record<string, string>> = {
    privacy: {
      en: 'Privacy Policy',
      de: 'Datenschutzrichtlinie',
      fr: 'Politique de Confidentialité',
      es: 'Política de Privacidad',
      pt: 'Política de Privacidade',
      it: 'Politica sulla Privacy',
      nl: 'Privacybeleid'
    },
    cookie: {
      en: 'Cookie Policy',
      de: 'Cookie-Richtlinie',
      fr: 'Politique des Cookies',
      es: 'Política de Cookies',
      pt: 'Política de Cookies',
      it: 'Politica dei Cookie',
      nl: 'Cookiebeleid'
    },
    terms: {
      en: 'Terms of Service',
      de: 'Nutzungsbedingungen',
      fr: 'Conditions d\'Utilisation',
      es: 'Términos de Servicio',
      pt: 'Termos de Serviço',
      it: 'Termini di Servizio',
      nl: 'Servicevoorwaarden'
    }
  };
  
  return titles[policyType][locale] || titles[policyType].en;
}

// Helper to get policy description based on type and locale
function getPolicyDescription(policyType: PolicyType, locale: string): string {
  const descriptions: Record<PolicyType, Record<string, string>> = {
    privacy: {
      en: 'Learn how Gutricious collects, uses, and protects your personal information and privacy.',
      de: 'Erfahren Sie, wie Gutricious Ihre persönlichen Daten sammelt, verwendet und schützt.',
      fr: 'Découvrez comment Gutricious collecte, utilise et protège vos informations personnelles.',
      es: 'Conozca cómo Gutricious recopila, utiliza y protege su información personal.',
      pt: 'Saiba como a Gutricious coleta, usa e protege suas informações pessoais.',
      it: 'Scopri come Gutricious raccoglie, utilizza e protegge le tue informazioni personali.',
      nl: 'Lees hoe Gutricious uw persoonlijke gegevens verzamelt, gebruikt en beschermt.'
    },
    cookie: {
      en: 'Information about how Gutricious uses cookies and similar technologies on our website.',
      de: 'Informationen darüber, wie Gutricious Cookies und ähnliche Technologien auf unserer Website verwendet.',
      fr: 'Informations sur l\'utilisation des cookies et technologies similaires par Gutricious sur notre site.',
      es: 'Información sobre cómo Gutricious utiliza cookies y tecnologías similares en nuestro sitio web.',
      pt: 'Informações sobre como a Gutricious usa cookies e tecnologias semelhantes em nosso site.',
      it: 'Informazioni su come Gutricious utilizza i cookie e tecnologie simili sul nostro sito web.',
      nl: 'Informatie over hoe Gutricious cookies en vergelijkbare technologieën op onze website gebruikt.'
    },
    terms: {
      en: 'The terms and conditions governing your use of Gutricious services and products.',
      de: 'Die Allgemeinen Geschäftsbedingungen für die Nutzung von Gutricious-Diensten und -Produkten.',
      fr: 'Les termes et conditions régissant votre utilisation des services et produits Gutricious.',
      es: 'Los términos y condiciones que rigen su uso de los servicios y productos de Gutricious.',
      pt: 'Os termos e condições que regem o seu uso dos serviços e produtos da Gutricious.',
      it: 'I termini e le condizioni che regolano l\'utilizzo dei servizi e dei prodotti Gutricious.',
      nl: 'De algemene voorwaarden die uw gebruik van Gutricious-diensten en -producten bepalen.'
    }
  };
  
  return descriptions[policyType][locale] || descriptions[policyType].en;
}

export async function generatePolicyMetadata(
  { params }: { params: { locale: string } },
  policyType: PolicyType,
  path: string
): Promise<Metadata> {
  const { locale } = params;
  const title = getPolicyTitle(policyType, locale);
  const description = getPolicyDescription(policyType, locale);
  
  return createMetadata(locale, path, `Gutricious - ${title}`, description);
}

export default function PolicyMetadata({ locale, policyType, path }: PolicyMetadataProps) {
  // Get the structured data for this page
  const policyJsonLd = getJsonLd(locale, policyType);
  const orgJsonLd = getJsonLd(locale, 'organization');

  return (
    <>
      <Script
        id="policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(policyJsonLd)
        }}
      />
      <Script
        id="org-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgJsonLd)
        }}
      />
    </>
  );
}
