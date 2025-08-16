'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaCookiesPT() {
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
          Política de Cookies
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Tipos de Cookies que Utilizamos</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies Essenciais</h3>
          <p className="mb-8 text-2xl">
            Estes são necessários para o funcionamento do nosso website. Fazem coisas como armazenar os artigos do seu carrinho, lembrar as suas definições de idioma e mantê-lo ligado.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Segurança</h3>
          <p className="mb-8 text-2xl">
            Estes protegem a sua conta e previnem fraudes. Verificam a sua identidade e asseguram que mais ninguém pode aceder às suas informações.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Análise</h3>
          <p className="mb-8 text-2xl">
            Estes ajudam-nos a perceber como as pessoas usam o nosso site. Aprendemos que páginas são populares, que funcionalidades precisam de melhorias e como podemos dar-lhe uma melhor experiência.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies Publicitários</h3>
          <p className="mb-8 text-2xl">
            Estes cookies ajudam-nos a mostrar-lhe anúncios que podem realmente interessá-lo, baseados nos seus interesses. Também impedem que veja os mesmos anúncios repetidamente.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Personalização</h3>
          <p className="mb-8 text-2xl">
            Estes cookies tornam a sua experiência mais personalizada. Lembram as suas preferências, para que obtenha recomendações, resultados de pesquisa e anúncios mais relevantes.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">O Seu Controlo sobre os Cookies</h2>
          <p className="mb-8 text-2xl">
            Tem escolhas sobre como usamos cookies. Eis como os pode gerir:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Definições do Navegador:</span> Pode alterar as definições do seu navegador para bloquear ou permitir determinados cookies.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">As Nossas Definições de Privacidade:</span> Visite a nossa página de definições de privacidade para ajustar as suas preferências <a href="/pt/PoliticaPrivacidade" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Política de Privacidade</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Dispositivos Móveis:</span> Normalmente encontrará controlos de cookies no menu de definições do seu dispositivo.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Nota Importante: Bloquear alguns cookies pode tornar partes do nosso website menos funcionais.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Questões?</h2>
          <p className="mb-8 text-2xl">
            Se tem questões sobre a nossa política de cookies, contacte-nos em <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            Queremos que se sinta informado e no controlo da sua experiência online. Esta política visa dar-lhe a informação clara de que precisa.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Alterações a Esta Política</h2>
          <p className="mb-8 text-2xl">
            Podemos actualizar esta política de tempos a tempos. Se fizermos alterações significativas, informá-lo-emos adequadamente.
          </p>
        </div>
      </div>
    </div>
  );
}
