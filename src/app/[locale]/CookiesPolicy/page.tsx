"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function CookiesPolicy() {
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
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Cookies Policy
        </h1>

        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Essential Cookies</h3>
          <p className="mb-4">
            These are necessary for our website to function. They do things like store your cart items, remember your language settings, and keep you logged in.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Security Cookies</h3>
          <p className="mb-4">
            These protect your account and prevent fraud. They verify your identity and make sure no one else can access your information.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Analytics Cookies</h3>
          <p className="mb-4">
            These help us understand how people use our site. We learn what pages are popular, what features need improving, and how we can give you a better experience.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Advertising Cookies</h3>
          <p className="mb-4">
            These cookies help us show you ads you might actually care about, based on your interests. They also stop you from seeing the same ads repeatedly.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Personalization Cookies</h3>
          <p className="mb-4">
            These cookies make your experience more tailored to you. They remember your preferences, so you get recommendations, search results, and ads that are more relevant.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Control Over Cookies</h2>
          <p className="mb-4">
            You have choices about how we use cookies. Here's how you can manage them:
          </p>
          
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Browser Settings:</strong> You can change your browser's settings to block or allow certain cookies.</li>
            <li className="mb-2"><strong>Our Privacy Settings:</strong> Visit our privacy settings page to adjust your preferences <a href="/${locale}/PrivacyPolicy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>.</li>
            <li className="mb-2"><strong>Mobile Devices:</strong> You'll usually find cookie controls in your device's settings menu.</li>
          </ul>
          
          <p className="mb-4 font-medium">
            Please Note: Blocking some cookies might make parts of our website less functional.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Questions?</h2>
          <p className="mb-4">
            If you have questions about our cookie policy, please contact us at dpo@gutricious.com.
          </p>
          
          <p className="mb-4">
            We want you to feel informed and in control of your online experience. This policy aims to give you the clear information you need.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. If we make significant changes, we'll notify you appropriately.
          </p>
        </div>
      </div>
    </div>
  );
}
