"use client";

import { useState, useEffect } from "react";
import { IoMdClose, IoMdArrowBack } from "react-icons/io";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import enPrivacyPolicy from "../../../messages/PrivacyPolicy/en.json";

interface ModalPrivacyPolicyProps {
  locale: string;
  onClose: () => void;
  onNavigateToCookies: () => void;
}

export default function ModalPrivacyPolicy({ locale, onClose, onNavigateToCookies }: ModalPrivacyPolicyProps) {
  const [hovered, setHovered] = useState(false);
  const [localizedFallbacks, setLocalizedFallbacks] = useState(enPrivacyPolicy);
  const t = useTranslations('PrivacyPolicy');
  
  // Dynamically import locale-specific translations when the locale changes
  useEffect(() => {
    const loadLocaleSpecificTranslations = async () => {
      try {
        // Try to import the locale-specific translation file
        const translationModule = await import(`../../../messages/PrivacyPolicy/${locale}.json`)
          .catch(() => ({ default: enPrivacyPolicy })); // Fallback to English if not found
        
        setLocalizedFallbacks(translationModule.default);
      } catch (error) {
        // If there's an error, use English as fallback
        setLocalizedFallbacks(enPrivacyPolicy);
        console.log(`Could not load translations for locale: ${locale}. Using English fallback.`);
      }
    };
    
    loadLocaleSpecificTranslations();
  }, [locale]);
  
  // Function to get translated text with fallback
  const getTranslation = (key: string): string => {
    const translation = t(key);
    // If translation is just returning the key, use fallback
    return translation === `PrivacyPolicy.${key}` ? localizedFallbacks[key as keyof typeof localizedFallbacks] || key : translation;
  };

  return (
    <div className="relative h-full overflow-y-auto">
      {/* 
        Note: Mobile view close button positioning - Currently working correctly on desktop but needs adjustment for mobile view.
        On mobile, the close button should be positioned relative to the viewport, not the content.
        Current implementation uses sticky positioning which works well on desktop but may need adjustments for mobile.
        Consider using fixed positioning for mobile breakpoints or adjusting the z-index and positioning context.
      */}
      {/* Close Cross Icon - Matches the implementation in CookiesModal */}
      <button
        onClick={onClose}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="sticky rounded-full border-none text-white cursor-pointer flex items-center justify-center z-[10000] transition-all duration-200"
        style={{
          top: '20px',
          left: 'calc(100% - 64px)', // 44px width + 20px margin
          width: '44px',
          height: '44px',
          fontSize: '24px',
          background: hovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          float: 'right',
          marginBottom: '-44px' // Negative margin to not affect layout
        }}
        aria-label="Close modal"
      >
        <IoMdClose />
      </button>

      {/* Content - using translations based on the current locale */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-bold mb-16 text-center text-gray-800">
          {getTranslation('title')}
        </h1>

        <div className="prose prose-3xl max-w-none mx-auto text-gray-700">
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('overview_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('overview_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('personal_data_heading')}</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('types_data_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('types_data_summary')}
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">{getTranslation('customer_info_heading')}</h4>
          <p className="mb-8 text-2xl">
            {getTranslation('customer_info_text1')}
          </p>
          <p className="mb-8 text-2xl">
            {getTranslation('customer_info_text2')}
          </p>
          <p className="mb-8 text-2xl">
            {getTranslation('customer_info_text3')}
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">{getTranslation('usage_data_heading')}</h4>
          <p className="mb-8 text-2xl">
            {getTranslation('usage_data_text')}
          </p>
          
          <h4 className="text-3xl font-medium mt-12 mb-5 text-gray-800">{getTranslation('technical_info_heading')}</h4>
          <p className="mb-8 text-2xl">
            {getTranslation('technical_info_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('how_we_use_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('how_we_use_intro')}
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl">{getTranslation('use_purpose_1')}</li>
            <li className="text-2xl">{getTranslation('use_purpose_2')}</li>
            <li className="text-2xl">{getTranslation('use_purpose_3')}</li>
            <li className="text-2xl">{getTranslation('use_purpose_4')}</li>
            <li className="text-2xl">{getTranslation('use_purpose_5')}</li>
            <li className="text-2xl">{getTranslation('use_purpose_6')}</li>
          </ul>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('info_sharing_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('info_sharing_intro')}
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl">{getTranslation('sharing_circumstance_1')}</li>
            <li className="text-2xl">{getTranslation('sharing_circumstance_2')}</li>
            <li className="text-2xl">{getTranslation('sharing_circumstance_3')}</li>
          </ul>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('data_security_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('data_security_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('your_rights_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('your_rights_intro')}
          </p>
          
          <ul className="list-disc pl-12 mb-12 space-y-6">
            <li className="text-2xl">{getTranslation('right_1')}</li>
            <li className="text-2xl">{getTranslation('right_2')}</li>
            <li className="text-2xl">{getTranslation('right_3')}</li>
            <li className="text-2xl">{getTranslation('right_4')}</li>
            <li className="text-2xl">{getTranslation('right_5')}</li>
          </ul>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('cookies_tracking_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('cookies_tracking_text')}{' '}
            <button 
              onClick={onNavigateToCookies}
              className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 underline cursor-pointer"
            >
              {getTranslation('cookie_policy_link')}
            </button>.
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('changes_policy_heading')}</h2>
          <p className="mb-8 text-2xl">
            {getTranslation('changes_policy_text')}
          </p>
          
          <h2 className="text-5xl font-semibold mt-16 mb-8 text-gray-800">{getTranslation('contact_us_heading')}</h2>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('questions_feedback_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('questions_feedback_text')} <a href="mailto:dpo@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">dpo@gutricious.com</a>.
          </p>
          
          <h3 className="text-4xl font-medium mt-14 mb-6 text-gray-800">{getTranslation('general_inquiries_heading')}</h3>
          <p className="mb-8 text-2xl">
            {getTranslation('general_inquiries_text')} <a href="mailto:hello@gutricious.com" className="text-[#2ae8d3] hover:text-yellow-400 transition-colors duration-200 font-medium">hello@gutricious.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
