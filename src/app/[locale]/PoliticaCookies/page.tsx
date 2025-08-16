'use client';

import { useRouter } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function PoliticaCookies() {
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
          Política de Cookies
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Tipos de Cookies que Utilizamos</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies Esenciales</h3>
          <p className="mb-8 text-2xl">
            Estas son necesarias para que nuestro sitio web funcione. Hacen cosas como almacenar los artículos de tu carrito, recordar tu configuración de idioma y mantenerte conectado.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Seguridad</h3>
          <p className="mb-8 text-2xl">
            Estas protegen tu cuenta y previenen el fraude. Verifican tu identidad y se aseguran de que nadie más pueda acceder a tu información.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Análisis</h3>
          <p className="mb-8 text-2xl">
            Estas nos ayudan a entender cómo las personas usan nuestro sitio. Aprendemos qué páginas son populares, qué características necesitan mejoras y cómo podemos darte una mejor experiencia.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Publicidad</h3>
          <p className="mb-8 text-2xl">
            Estas cookies nos ayudan a mostrarte anuncios que realmente te puedan interesar, basados en tus intereses. También evitan que veas los mismos anuncios repetidamente.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Cookies de Personalización</h3>
          <p className="mb-8 text-2xl">
            Estas cookies hacen que tu experiencia sea más personalizada. Recuerdan tus preferencias, para que obtengas recomendaciones, resultados de búsqueda y anuncios más relevantes.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Tu Control Sobre las Cookies</h2>
          <p className="mb-8 text-2xl">
            Tienes opciones sobre cómo usamos las cookies. Así es como puedes gestionarlas:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Configuración del Navegador:</span> Puedes cambiar la configuración de tu navegador para bloquear o permitir ciertas cookies.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Nuestras Configuraciones de Privacidad:</span> Visita nuestra página de configuraciones de privacidad para ajustar tus preferencias <a href="/es/PoliticaPrivacidad" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Política de Privacidad</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Dispositivos Móviles:</span> Generalmente encontrarás controles de cookies en el menú de configuración de tu dispositivo.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Nota Importante: Bloquear algunas cookies podría hacer que partes de nuestro sitio web sean menos funcionales.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">¿Preguntas?</h2>
          <p className="mb-8 text-2xl">
            Si tienes preguntas sobre nuestra política de cookies, por favor contáctanos en <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            Queremos que te sientas informado y en control de tu experiencia en línea. Esta política tiene como objetivo darte la información clara que necesitas.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Cambios a Esta Política</h2>
          <p className="mb-8 text-2xl">
            Podemos actualizar esta política de vez en cuando. Si hacemos cambios significativos, te notificaremos apropiadamente.
          </p>
        </div>
      </div>
    </div>
  );
}
