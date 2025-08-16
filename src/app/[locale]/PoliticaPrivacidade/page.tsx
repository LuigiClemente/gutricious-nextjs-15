'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaPrivacidade() {
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
          Política de Privacidade
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Visão Geral</h2>
          <p className="mb-8 text-2xl">
            Este documento explica como tratamos as suas informações pessoais quando usa os nossos serviços. "Informações pessoais" significa qualquer detalhe que possa ser usado para o identificar. Esta política não cobre as práticas de empresas que não controlamos ou pessoas fora da nossa organização.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Recolha e Uso de Dados Pessoais</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Tipos de Dados Pessoais que Recolhemos (e Porquê)</h3>
          <p className="mb-8 text-2xl">
            Aqui está um resumo das informações pessoais que recolhemos nos últimos 12 meses, juntamente com as razões e como as usamos:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Informações do Cliente</h4>
          <p className="mb-8 text-2xl">
            Precisamos do seu nome, detalhes de contacto e morada para gerir a sua conta e fornecer os nossos serviços (como enviar produtos, enviar actualizações e tratar aspectos legalmente exigidos).
          </p>
          <p className="mb-8 text-2xl">
            Também usamos estas informações para melhorar os nossos serviços e para marketing direcionado com a sua permissão.
          </p>
          <p className="mb-8 text-2xl">
            Usaremos o seu email para partilhar notícias sobre os nossos produtos, actualizações da aplicação e webinars relevantes.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Armazenamento de Informações do Cliente</h4>
          <p className="mb-8 text-2xl">
            Mantemos as suas informações de cliente durante seis anos após o fim da sua subscrição, caso queira voltar, ou se surgirem questões legais. Os nossos parceiros de laboratório podem precisar de as manter por mais tempo para cumprir as leis locais.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Dados de Saúde Auto-reportados</h4>
          <p className="mb-8 text-2xl">
            Pode escolher partilhar detalhes de saúde como os seus hábitos alimentares ou condições pré-existentes.
          </p>
          <p className="mb-8 text-2xl">
            Usamos estas informações para garantir que os nossos serviços são adequados para si, para ajudar na análise de amostras laboratoriais e nos nossos esforços de investigação.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Como Usamos os Seus Dados</h3>
          <p className="mb-8 text-2xl">
            O nosso principal objectivo é investigar como a dieta impacta a saúde.
          </p>
          <p className="mb-8 text-2xl">
            As suas informações ajudam-nos a fornecer apoio, cumprir requisitos legais e alcançar outros propósitos como explicado acima.
          </p>
          <p className="mb-8 text-2xl">
            Comprometemo-nos a ser abertos e honestos sobre como usamos os seus dados, e seguimos sempre a lei.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Divulgação dos Seus Dados Pessoais</h2>
          <p className="mb-8 text-2xl">
            Partilhamos os seus Dados Pessoais em situações limitadas:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">A Nossa Empresa:</span> Com outras partes do nosso grupo empresarial, incluindo GUTRICIOUS e outras filiais internacionais.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Parceiros de Investigação:</span> Com instituições académicas e empresas farmacêuticas para estudos de saúde e dietéticos. Protegemos a sua identidade partilhando apenas dados anonimizados.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Laboratórios de Teste:</span> Com laboratórios autorizados por nós para processar testes. Partilhamos informações pessoais e de saúde necessárias, especialmente se as leis locais exigirem aprovação médica para testes directos ao consumidor.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fornecedores de Dispositivos:</span> Com fornecedores de dispositivos que monitorizam a sua saúde (como monitores de glucose). Partilhamos os dados necessários para o funcionamento dos dispositivos.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Parceiros de Envio:</span> Com empresas que entregam os nossos produtos e transportam amostras.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Fornecedores de Serviços:</span> Com empresas que nos ajudam com coisas como:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Armazenamento na nuvem, tecnologia e comunicação</li>
                <li className="text-2xl">Segurança e prevenção de fraudes</li>
                <li className="text-2xl">Análise de dados</li>
                <li className="text-2xl">Apoio ao cliente</li>
                <li className="text-2xl">Processamento de pagamentos</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Consultores Profissionais:</span> Com os nossos advogados e outros consultores (que são obrigados a manter as suas informações confidenciais).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Mudanças Empresariais:</span> Se estivermos envolvidos numa fusão, aquisição, falência ou evento similar, os seus dados podem ser transferidos para a nova empresa. Informá-lo-emos antes de isto acontecer e antes dos seus dados estarem sujeitos a uma nova Política de Privacidade.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Nota Importante:</span> Podemos converter Dados Pessoais em dados anónimos que não o podem identificar. Podemos usar ou partilhar isto para propósitos comerciais sem restrição.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Rastreamento Digital e Publicidade</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Como o Rastreamos</h3>
          <p className="mb-8 text-2xl">
            Usamos cookies e tecnologias similares para perceber como usa os nossos serviços, reconhecê-lo e melhorar a sua experiência. Actualmente não respeitamos as definições "Do Not Track". Consulte a nossa <a href="/pt/PoliticaCookiesPT" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Política de Cookies</a> para mais detalhes.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Publicidade Meta</h3>
          <p className="mb-8 text-2xl">
            Usamos as ferramentas da Meta (Meta Pixel e Conversions API) para melhor direccionar os nossos anúncios. Isto envolve partilhar alguns dados de utilizador não reversíveis com a Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Os Seus Direitos</h3>
          <p className="mb-8 text-2xl">
            Tanto nós como a Meta somos considerados controladores de dados sob o RGPD. Pode encontrar mais sobre como a Meta usa os seus dados e os seus direitos na Política de Dados deles. Os detalhes estão também nos nossos acordos legais com a Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Listas de Email</h3>
          <p className="mb-8 text-2xl">
            Pode inscrever-se nas nossas listas de email mesmo sem conta. Pode sempre cancelar a subscrição usando o link fornecido nos nossos emails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Investigação de Utilizadores</h3>
          <p className="mb-8 text-2xl">
            Se é cliente, podemos convidá-lo a dar feedback sobre os nossos produtos para nos ajudar a melhorar.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Protecção e Retenção dos Seus Dados</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Segurança</h3>
          <p className="mb-8 text-2xl">
            Implementamos medidas de segurança concebidas para proteger os seus Dados Pessoais de acesso não autorizado. Encorajamo-lo também a tomar medidas para manter as suas informações seguras.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Retenção</h3>
          <p className="mb-8 text-2xl">
            Mantemos os seus dados pelo tempo necessário para os propósitos explicados nesta política. Alguns dados podem ser mantidos por mais tempo para cumprir requisitos legais ou por razões comerciais válidas. Encontrará períodos de retenção específicos em cada secção de categoria de dados.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Dados Pessoais de Crianças</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Limite de Idade</h3>
          <p className="mb-8 text-2xl">
            Não recolhemos conscientemente Dados Pessoais de crianças com menos de 18 anos sem consentimento parental. Os nossos Termos de Serviço reflectem isto.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Idade 13-18</h3>
          <p className="mb-8 text-2xl">
            Podemos recolher Dados Pessoais de crianças entre 13 e 18 anos se tivermos consentimento parental e a recolha for feita sob supervisão parental.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Recolha Não Autorizada</h3>
          <p className="mb-8 text-2xl">
            Se acredita que recolhemos Dados Pessoais de uma criança sem o consentimento adequado, contacte-nos imediatamente em <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Tomaremos medidas para eliminar essas informações.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Direitos para Titulares de Dados da União Europeia (UE)</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Os Seus Direitos Sob o RGPD</h3>
          <p className="mb-8 text-2xl">
            A GUTRICIOUS armazena os seus dados na UE e cumpre o Regulamento Geral sobre a Protecção de Dados (RGPD). Isto dá-lhe direitos específicos sobre os seus Dados Pessoais, mesmo que viva fora da UE.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Compreender os Seus Direitos</h3>
          <p className="mb-8 text-2xl">
            Explicámos os tipos de Dados Pessoais que recolhemos, como os usamos, a base legal para o processamento e com quem os partilhamos.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Exercer os Seus Direitos</h3>
          <p className="mb-8 text-2xl">
            Para solicitar acesso, correcção, eliminação ou outras acções relativas aos seus Dados Pessoais, contacte-nos em <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Também pode gerir alguns pedidos através do nosso portal de privacidade.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Actualizações da Política</h2>
          <p className="mb-8 text-2xl">
            Podemos actualizar esta Política de Privacidade de tempos a tempos para reflectir mudanças na forma como tratamos os seus dados. Verifique regularmente para se manter informado.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Contactar-nos</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Questões ou Feedback</h3>
          <p className="mb-8 text-2xl">
            Contacte-nos em <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> para qualquer questão sobre esta política ou para exercer os seus direitos de dados.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Consultas Gerais</h3>
          <p className="mb-8 text-2xl">
            Para questões gerais, envie um email para <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Portal de Privacidade</h3>
          <p className="mb-8 text-2xl">
            O nosso portal dedicado é a melhor forma de fazer pedidos de acesso ou eliminação de dados.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Encarregado de Protecção de Dados</h3>
          <p className="mb-8 text-2xl">
            O nosso EPD está sempre disponível em <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> para assistência.
          </p>
        </div>
      </div>
    </div>
  );
}
