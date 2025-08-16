"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function CookiePolicy() {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale;
  const [hovered, setHovered] = useState(false);

  // Return to main page in the current language
  const handleReturn = () => {
    router.push(`/${locale}`);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Close Cross Icon */}
      <button
        onClick={handleReturn}
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
          Cookie Policy
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Types of Cookies We Use</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Essential Cookies</h3>
          <p className="mb-8 text-2xl">
            These are necessary for our website to function. They do things like store your cart items, remember your language settings, and keep you logged in.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Security Cookies</h3>
          <p className="mb-8 text-2xl">
            These protect your account and prevent fraud. They verify your identity and make sure no one else can access your information.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Analytics Cookies</h3>
          <p className="mb-8 text-2xl">
            These help us understand how people use our site. We learn what pages are popular, what features need improving, and how we can give you a better experience.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Advertising Cookies</h3>
          <p className="mb-8 text-2xl">
            These cookies help us show you ads you might actually care about, based on your interests. They also stop you from seeing the same ads repeatedly.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">Personalization Cookies</h3>
          <p className="mb-8 text-2xl">
            These cookies make your experience more tailored to you. They remember your preferences, so you get recommendations, search results, and ads that are more relevant.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Your Control Over Cookies</h2>
          <p className="mb-8 text-2xl">
            You have choices about how we use cookies. Here's how you can manage them:
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">Browser Settings:</span> You can change your browser's settings to block or allow certain cookies.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Our Privacy Settings:</span> Visit our privacy settings page to adjust your preferences <a href="/en/PrivacyPolicy" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>.</li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">Mobile Devices:</span> You'll usually find cookie controls in your device's settings menu.</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            Please Note: Blocking some cookies might make parts of our website less functional.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Questions?</h2>
          <p className="mb-8 text-2xl">
            If you have questions about our cookie policy, please contact us at <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            We want you to feel informed and in control of your online experience. This policy aims to give you the clear information you need.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">Changes to This Policy</h2>
          <p className="mb-8 text-2xl">
            We may update this policy from time to time. If we make significant changes, we'll notify you appropriately.
          </p>
        </div>
      </div>
    </div>
  );
}
