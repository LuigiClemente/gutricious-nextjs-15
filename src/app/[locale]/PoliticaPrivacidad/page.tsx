'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaPrivacidad() {
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

      {/* Sticky Get Started Button removed as per request */}

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-16 text-center text-gray-800">
          Política de Privacidad
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">1. Resumen</h2>
          <p className="mb-8 text-2xl">
            Este documento explica cómo manejamos tu información personal cuando usas nuestros servicios. "Información personal" significa cualquier detalle que podría usarse para identificarte. Esta política no cubre las prácticas de empresas que no controlamos o personas fuera de nuestra organización.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">2. Recopilación y Uso de Datos Personales</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Tipos de Datos Personales que Recopilamos (y Por Qué)</h3>
          <p className="mb-8 text-2xl">
            Aquí tienes un resumen de la información personal que hemos recopilado en los últimos 12 meses, junto con las razones y cómo la usamos:
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Información del Cliente</h4>
          <p className="mb-8 text-2xl">
            Necesitamos tu nombre, detalles de contacto y dirección para gestionar tu cuenta y entregar nuestros servicios (como enviar productos, enviar actualizaciones y manejar aspectos legalmente requeridos).
          </p>
          <p className="mb-8 text-2xl">
            También usamos esta información para mejorar nuestros servicios y para marketing dirigido con tu permiso.
          </p>
          <p className="mb-8 text-2xl">
            Usaremos tu email para compartir noticias sobre nuestros productos, actualizaciones de la app y webinars relevantes.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Almacenamiento de Información del Cliente</h4>
          <p className="mb-8 text-2xl">
            Mantenemos tu información de cliente durante seis años después de que termine tu suscripción en caso de que quieras volver, o si surgen problemas legales. Nuestros socios de laboratorio pueden necesitar mantenerla más tiempo para cumplir con las leyes locales.
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">Datos de Salud Auto-reportados</h4>
          <p className="mb-8 text-2xl">
            Puedes elegir compartir detalles de salud como tus hábitos alimentarios o condiciones preexistentes.
          </p>
          <p className="mb-8 text-2xl">
            Usamos esta información para asegurar que nuestros servicios sean adecuados para ti, para ayudar con el análisis de muestras de laboratorio y en nuestros esfuerzos de investigación.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cómo Usamos Tus Datos</h3>
          <p className="mb-8 text-2xl">
            Nuestro objetivo principal es investigar cómo la dieta impacta la salud.
          </p>
          <p className="mb-8 text-2xl">
            Tu información nos ayuda a proporcionar soporte, cumplir con requisitos legales y lograr otros propósitos como se explica arriba.
          </p>
          <p className="mb-8 text-2xl">
            Estamos comprometidos a ser abiertos y honestos sobre cómo usamos tus datos, y siempre seguimos la ley.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">3. Divulgación de Tus Datos Personales</h2>
          <p className="mb-8 text-2xl">
            Compartimos tus Datos Personales en situaciones limitadas:
          </p>
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Nuestra Empresa:</span> Con otras partes de nuestro grupo corporativo, incluyendo GUTRICIOUS y otras sucursales internacionales.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Socios de Investigación:</span> Con instituciones académicas y empresas farmacéuticas para estudios de salud y dietéticos. Protegemos tu identidad compartiendo solo datos anonimizados.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Laboratorios de Pruebas:</span> Con laboratorios autorizados por nosotros para procesar pruebas. Compartimos información personal y de salud necesaria, especialmente si las leyes locales requieren aprobación médica para pruebas directas al consumidor.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Proveedores de Dispositivos:</span> Con proveedores de dispositivos que monitorean tu salud (como monitores de glucosa). Compartimos los datos necesarios para que los dispositivos funcionen.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Socios de Envío:</span> Con empresas que entregan nuestros productos y transportan muestras.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Proveedores de Servicios:</span> Con empresas que nos ayudan con cosas como:
              <ul className="list-disc pl-12 mt-4 space-y-3">
                <li className="text-2xl">Almacenamiento en la nube, tecnología y comunicación</li>
                <li className="text-2xl">Seguridad y prevención de fraudes</li>
                <li className="text-2xl">Análisis de datos</li>
                <li className="text-2xl">Soporte al cliente</li>
                <li className="text-2xl">Procesamiento de pagos</li>
              </ul>
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Asesores Profesionales:</span> Con nuestros abogados y otros asesores (que están obligados a mantener tu información confidencial).</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Cambios Comerciales:</span> Si estamos involucrados en una fusión, adquisición, bancarrota o evento similar, tus datos pueden transferirse a la nueva empresa. Te avisaremos antes de que esto suceda y antes de que tus datos estén sujetos a una nueva Política de Privacidad.</li>
          </ul>
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            <span className="font-semibold">Nota Importante:</span> Podemos convertir Datos Personales en datos anónimos que no pueden identificarte. Podemos usar o compartir esto para propósitos comerciales sin restricción.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">4. Seguimiento Digital y Publicidad</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cómo Te Rastreamos</h3>
          <p className="mb-8 text-2xl">
            Utilizamos cookies y tecnologías similares para entender cómo usas nuestros servicios, reconocerte y mejorar tu experiencia. Actualmente no respetamos las configuraciones "Do Not Track". Por favor consulta nuestra <a href="/es/PoliticaCookies" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Política de Cookies</a> para más detalles.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Publicidad de Meta</h3>
          <p className="mb-8 text-2xl">
            Usamos las herramientas de Meta (Meta Pixel y Conversions API) para dirigir mejor nuestros anuncios. Esto implica compartir algunos datos de usuario no reversibles con Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Tus Derechos</h3>
          <p className="mb-8 text-2xl">
            Tanto nosotros como Meta somos considerados controladores de datos bajo el GDPR. Puedes encontrar más sobre cómo Meta usa tus datos y tus derechos en su Política de Datos. Los detalles también están en nuestros acuerdos legales con Meta.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Listas de Correo</h3>
          <p className="mb-8 text-2xl">
            Puedes suscribirte a nuestras listas de correo incluso sin una cuenta. Siempre puedes darte de baja usando el enlace proporcionado en nuestros emails.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Investigación de Usuario</h3>
          <p className="mb-8 text-2xl">
            Si eres cliente, podemos invitarte a dar retroalimentación sobre nuestros productos para ayudarnos a mejorar.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">5. Protección y Retención de Tus Datos</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Seguridad</h3>
          <p className="mb-8 text-2xl">
            Implementamos medidas de seguridad diseñadas para proteger tus Datos Personales del acceso no autorizado. Te alentamos a que también tomes medidas para mantener tu información segura.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Retención</h3>
          <p className="mb-8 text-2xl">
            Mantenemos tus datos tanto tiempo como sea necesario para los propósitos explicados en esta política. Algunos datos pueden mantenerse más tiempo para cumplir con requisitos legales o por razones comerciales válidas. Encontrarás períodos de retención específicos dentro de cada sección de categoría de datos.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">6. Datos Personales de Menores</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Límite de Edad</h3>
          <p className="mb-8 text-2xl">
            No recopilamos conscientemente Datos Personales de menores de 18 años sin consentimiento parental. Nuestros Términos de Servicio reflejan esto.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Edad 13-18</h3>
          <p className="mb-8 text-2xl">
            Podemos recopilar Datos Personales de menores entre 13 y 18 años si tenemos consentimiento parental y la recopilación se hace bajo supervisión parental.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Recopilación No Autorizada</h3>
          <p className="mb-8 text-2xl">
            Si crees que hemos recopilado Datos Personales de un menor sin el consentimiento adecuado, por favor contáctanos inmediatamente en <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. Tomaremos medidas para eliminar esa información.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">7. Derechos para Sujetos de Datos de la Unión Europea (UE)</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Tus Derechos Bajo el GDPR</h3>
          <p className="mb-8 text-2xl">
            GUTRICIOUS almacena tus datos en la UE y cumple con el Reglamento General de Protección de Datos (GDPR). Esto te da derechos específicos sobre tus Datos Personales, incluso si vives fuera de la UE.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Entendiendo Tus Derechos</h3>
          <p className="mb-8 text-2xl">
            Hemos explicado los tipos de Datos Personales que recopilamos, cómo los usamos, la base legal para el procesamiento y con quién los compartimos.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Ejerciendo Tus Derechos</h3>
          <p className="mb-8 text-2xl">
            Para solicitar acceso, corrección, eliminación u otras acciones con respecto a tus Datos Personales, contáctanos en <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>. También puedes gestionar algunas solicitudes a través de nuestro portal de privacidad.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">8. Actualizaciones de Política</h2>
          <p className="mb-8 text-2xl">
            Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en cómo manejamos tus datos. Por favor revisa regularmente para mantenerte informado.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">9. Contactándonos</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Preguntas o Comentarios</h3>
          <p className="mb-8 text-2xl">
            Contáctanos en <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> para cualquier pregunta sobre esta política o para ejercer tus derechos de datos.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Consultas Generales</h3>
          <p className="mb-8 text-2xl">
            Para preguntas generales, envía un email a <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Portal de Privacidad</h3>
          <p className="mb-8 text-2xl">
            Nuestro portal dedicado es la mejor manera de hacer solicitudes de acceso o eliminación de datos.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Oficial de Protección de Datos</h3>
          <p className="mb-8 text-2xl">
            Nuestro DPO siempre está disponible en <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a> para asistencia.
          </p>
        </div>
      </div>
    </div>
  );
}
