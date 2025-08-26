"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import enCookiePolicy from "../../../messages/CookiePolicy/en.json";

interface ModalCookiePolicyProps {
  locale: string;
  onClose: () => void;
  onNavigateToPrivacy: () => void;
}

export default function ModalCookiePolicy({ locale, onClose, onNavigateToPrivacy }: ModalCookiePolicyProps) {
  const [localizedFallbacks, setLocalizedFallbacks] = useState(enCookiePolicy);
  const t = useTranslations('CookiePolicy');
  
  // Dynamically import locale-specific translations when the locale changes
  useEffect(() => {
    const loadLocaleSpecificTranslations = async () => {
      try {
        // Try to import the locale-specific translation file
        const translationModule = await import(`../../../messages/CookiePolicy/${locale}.json`)
          .catch(() => ({ default: enCookiePolicy })); // Fallback to English if not found
        
        setLocalizedFallbacks(translationModule.default);
      } catch (error) {
        // If there's an error, use English as fallback
        setLocalizedFallbacks(enCookiePolicy);
        console.log(`Could not load translations for locale: ${locale}. Using English fallback.`);
      }
    };
    
    loadLocaleSpecificTranslations();
  }, [locale]);
  
  // Function to get translated text with fallback
  const getTranslation = (key: string): string => {
    const translation = t(key);
    // If translation is just returning the key, use fallback
    return translation === `CookiePolicy.${key}` ? localizedFallbacks[key as keyof typeof localizedFallbacks] || key : translation;
  };

  return (
    <div className="relative h-full overflow-y-auto">
      {/* Content - using translations based on the current locale */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-16 text-center text-gray-800">
          {getTranslation('title')}
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('types_cookies_heading')}</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('essential_cookies_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('essential_cookies_text')}
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('security_cookies_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('security_cookies_text')}
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('analytics_cookies_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('analytics_cookies_text')}
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('advertising_cookies_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('advertising_cookies_text')}
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('personalization_cookies_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('personalization_cookies_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('your_control_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('your_control_text')}
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl"><span className="font-semibold text-gray-800">{getTranslation('browser_settings_label')}</span> {getTranslation('browser_settings_text')}</li>
            <li className="text-2xl">
              <span className="font-semibold text-gray-800">{getTranslation('privacy_settings_label')}</span> {getTranslation('privacy_settings_text')}{' '}
              <button 
                onClick={onNavigateToPrivacy}
                className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 underline cursor-pointer"
              >
                {getTranslation('privacy_policy_link')}
              </button>.
            </li>
            <li className="text-2xl"><span className="font-semibold text-gray-800">{getTranslation('mobile_devices_label')}</span> {getTranslation('mobile_devices_text')}</li>
          </ul>
          
          <p className="mb-12 text-2xl font-medium text-amber-700 py-4 px-6 border-l-6 border-amber-500 bg-amber-50">
            {getTranslation('please_note_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('questions_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('questions_text')} <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <p className="mb-8 text-2xl">
            {getTranslation('informed_experience_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('changes_policy_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('changes_policy_text')}
          </p>
        </div>
      </div>
    </div>
  );
}
