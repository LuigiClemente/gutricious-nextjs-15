import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Switch from "../Switch/switch";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import { useCallback } from "react";
import Cookies from "js-cookie";
import { trackEvent, EventCategory } from "@/utils/analytics";
import { LanguageSelector } from "../LanguageSelector";
import "../LanguageSelector/styles.css";
import ModalCookiePolicy from "./ModalCookiePolicy";
import ModalPrivacyPolicy from "./ModalPrivacyPolicy";
import { IoMdClose } from "react-icons/io";

// Make sure to set the app element for accessibility reasons
Modal.setAppElement("body");

const CookiesModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [currentView, setCurrentView] = useState<'main' | 'cookies' | 'privacy'>('main');
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('Index');

  useEffect(() => {
    // Check if user has made a cookie selection
    const hasUserSelection = Cookies.get('cookies_selection_made');
    
    // If no selection has been made yet, show the modal
    if (!hasUserSelection) {
      setModalIsOpen(true);
    }
  }, []);

  const goToStep2 = () => {
    // Transition to step 2
    setStep(2);
  };

  const goToStep1 = () => {
    // Transition back to step 1
    setStep(1);
  };

  const showCookiePolicy = () => {
    setCurrentView('cookies');
    // Reset scroll position when switching to cookie policy
    setTimeout(() => {
      const modalElement = document.querySelector('.MyModalSpecial');
      if (modalElement) {
        modalElement.scrollTop = 0;
      }
    }, 0);
  };

  const showPrivacyPolicy = () => {
    setCurrentView('privacy');
    // Reset scroll position when switching to privacy policy
    setTimeout(() => {
      const modalElement = document.querySelector('.MyModalSpecial');
      if (modalElement) {
        modalElement.scrollTop = 0;
      }
    }, 0);
  };

  const returnToMainModal = () => {
    setCurrentView('main');
  };

  // Close modal and mark that user has made a selection
  const acceptAllCookies = () => {
    // Set cookie that user has made a selection
    Cookies.set('cookies_selection_made', 'true', { expires: 365 }); // Cookie expires in 1 year
    // Set all cookie preferences to true
    cookies.forEach((cookie) => {
      if (!cookie.notChoosable) {
        Cookies.set(`cookie_pref_${cookie.type}`, 'true', { expires: 365 });
      }
    });
    
    // Track the acceptance of all cookies
    trackEvent('accept_all_cookies', EventCategory.COOKIE, {
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      locale: getLocale()
    });
    
    setModalIsOpen(false);
  };
  
  // Close modal with current selections
  const savePreferences = () => {
    // Set cookie that user has made a selection
    Cookies.set('cookies_selection_made', 'true', { expires: 365 }); // Cookie expires in 1 year
    
    // Save individual cookie preferences
    const preferences: Record<string, boolean> = {};
    cookies.forEach((cookie) => {
      if (!cookie.notChoosable) {
        Cookies.set(`cookie_pref_${cookie.type}`, cookie.isChecked ? 'true' : 'false', { expires: 365 });
        preferences[cookie.type] = cookie.isChecked;
      }
    });
    
    // Track custom preferences
    trackEvent('save_cookie_preferences', EventCategory.COOKIE, {
      ...preferences,
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      locale: getLocale()
    });
    
    setModalIsOpen(false);
  };

  const closeModal = () => {
    // This is now only used for the "Continue without accepting" link
    // Set cookie that user has made a selection but disable all optional cookies
    Cookies.set('cookies_selection_made', 'true', { expires: 365 }); // Cookie expires in 1 year
    
    // Set all non-essential cookies to false
    cookies.forEach((cookie) => {
      if (!cookie.notChoosable) {
        Cookies.set(`cookie_pref_${cookie.type}`, 'false', { expires: 365 });
      }
    });
    
    // Track rejection of optional cookies
    trackEvent('reject_optional_cookies', EventCategory.COOKIE, {
      path: typeof window !== 'undefined' ? window.location.pathname : '',
      locale: getLocale()
    });
    
    setModalIsOpen(false);
  };
  
  // Get the locale from the URL
  const getLocale = () => {
    if (typeof window === 'undefined') return 'en';
    const pathParts = window.location.pathname.split('/');
    return pathParts[1] || 'en';
  };

  // Return the correct cookie policy path based on locale
  const getCookiePolicyPath = () => {
    const locale = getLocale();
    const paths = {
      'en': '/en/CookiePolicy',
      'es': '/es/PoliticaCookies',
      'de': '/de/Cookie-Richtlinie',
      'fr': '/fr/PolitiqueCookies',
      'it': '/it/PoliticaCookie',
      'nl': '/nl/Cookiebeleid',
      'pt': '/pt/PoliticaCookiesPT'
    };
    return paths[locale as keyof typeof paths] || paths.en;
  };

  const preferenceData = [
    {
        "type": t('essential_cookies'),
        "notChoosable": true,
        "description": t('essential_cookies-define'),
        "cookies": [
          { name: t('cookies_name'), purpose: t('cookies_purpose'), duration: t('cookies_duration') },
          { name: t('next_locale_name'), purpose: t('next_locale_purpose'), duration: t('next_locale_duration') },
          { name: t('session_name'), purpose: t('session_purpose'), duration: t('session_duration') },
          { name: t('csrf_token_name'), purpose: t('csrf_token_purpose'), duration: t('csrf_token_duration') }
        ]
    },
    {
        "type": t('security_cookies'),
        "description": t('security_cookies_define'),
        "cookies": [
          { name: t('auth_token_name'), purpose: t('auth_token_purpose'), duration: t('auth_token_duration') },
          { name: t('sec_validation_name'), purpose: t('sec_validation_purpose'), duration: t('sec_validation_duration') }
        ]
    },
    {
        "type": t('analytics_cookies'),
        "description": t('analytics_cookies_define'),
        "cookies": [
          { name: t('umami_name'), purpose: t('umami_purpose'), duration: t('umami_duration') },
          { name: t('ga_name'), purpose: t('ga_purpose'), duration: t('ga_duration') },
          { name: t('ga_session_name'), purpose: t('ga_session_purpose'), duration: t('ga_session_duration') }
        ]
    },
    {
        "type": t('advertising_cookies'),
        "description": t('advertising_cookies_define'),
        "cookies": [
          { name: t('fbp_name'), purpose: t('fbp_purpose'), duration: t('fbp_duration') },
          { name: t('gcl_name') || "_gcl_au", purpose: t('gcl_purpose') || "Google AdSense conversion linking", duration: t('gcl_duration') || "90 days" }
        ]
    },
    {
      "type": t('personalization_cookies'),
      "description": t('personalization_cookies_define'),
      "cookies": [
        { name: t('user_preferences_name') || "user_preferences", purpose: t('user_preferences_purpose') || "Stores user's site preferences", duration: t('user_preferences_duration') || "1 year" },
        { name: t('recently_viewed_name') || "recently_viewed", purpose: t('recently_viewed_purpose') || "Tracks recently viewed content", duration: t('recently_viewed_duration') || "30 days" }
      ]
  }
];

const [cookies, setCookies] = useState(preferenceData.map(cookie => ({
    ...cookie,
    isChecked: true,
    isExpanded: false
  })));
  
  // Toggle cookie detail expansion
  const toggleDetails = (index: number) => {
    const newCookies = [...cookies];
    newCookies[index] = {
      ...newCookies[index],
      isExpanded: !newCookies[index].isExpanded
    };
    setCookies(newCookies);
  };

  // Handle switch toggle
  const handleToggle = (index:any) => {
    const newCookies = cookies.map((cookie, i) => {
      if (i === index) {
        const newValue = !cookie.isChecked;
        
        // Track toggle of cookie preferences
        if (!cookie.notChoosable) {
          trackEvent('toggle_cookie_preference', EventCategory.COOKIE, {
            cookie_type: cookie.type,
            new_value: newValue,
            locale: getLocale()
          });
        }
        
        return { ...cookie, isChecked: newValue }; // Toggle the checked state
      }
      return cookie;
    });
    setCookies(newCookies);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
      className="MyModalSpecial"
      overlayClassName="MyOverLayOfInformation"
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
    >
      {/* Note: Mobile view close button positioning - Currently working correctly on desktop but needs adjustment for mobile view.
           On mobile, the close button should be positioned relative to the viewport, not the content.
           Consider using fixed positioning for mobile breakpoints or adjusting the z-index and positioning context.
           Current implementation uses sticky positioning which works well on desktop but may need adjustments for mobile.
      */}
      {/* Close button for cookie policy view - using sticky positioning */}
      {currentView === 'cookies' && (
        <button
          onClick={returnToMainModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="sticky rounded-full border-none text-white cursor-pointer flex items-center justify-center z-[10000] transition-all duration-200"
          style={{
            top: '20px',
            left: 'calc(100% - 64px)', // 44px width + 20px margin
            width: '44px',
            height: '44px',
            fontSize: '24px',
            background: isHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
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
      )}

      {currentView === 'cookies' && (
        <ModalCookiePolicy 
          locale={getLocale()}
          onClose={returnToMainModal}
          onNavigateToPrivacy={showPrivacyPolicy}
        />
      )}
      
      {currentView === 'privacy' && (
        <>
          <button
            onClick={returnToMainModal}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="sticky rounded-full border-none text-white cursor-pointer flex items-center justify-center z-[10000] transition-all duration-200"
            style={{
              top: '20px',
              left: 'calc(100% - 64px)', // 44px width + 20px margin
              width: '44px',
              height: '44px',
              fontSize: '24px',
              background: isHovered ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
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
          <ModalPrivacyPolicy 
            locale={getLocale()}
            onClose={returnToMainModal}
            onNavigateToCookies={showCookiePolicy}
          />
        </>
      )}
      
      {currentView === 'main' && step === 1 && (
        <div>
          <div className="flex justify-between items-center pb-5 border-b mb-10">
            <h2 className="!text-3xl font-bold">{t('cookie_preference_heading')}</h2>
            <div className="language-selector-container" style={{ position: 'relative', zIndex: 10001, minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LanguageSelector 
                section="dark" 
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            </div>
          </div>
          <div className="text-xl text-black flex flex-col gap-6 items-start">
            <p>  {t('welcome_to_website')} </p>
            <p>
            {t('cookie_experience_text')}
            </p>
            <p>
            {t('accept_and_continue_cookie')}
            </p>
            <div className="flex gap-5 w-full">
              <button
                onClick={goToStep2}
                className="transition-all w-full bg-transparent hover:bg-black text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-3xl"
              >
                                        {t('set_cookie_preferences')}

              </button>
              <button
                onClick={acceptAllCookies}
                className="transition-all w-full bg-black hover:bg-transparent hover:text-black text-white  py-2 px-4 border border-black rounded-3xl"
              >
                {t('accept_and_continue_button')}
              </button>
            </div>
            <p>
            {t('change_cookie-preference')}

            </p>
            <button 
              onClick={showCookiePolicy}
              className="border-black border-b cursor-pointer bg-transparent border-0 p-0 text-left"
            >
              {t('cookie_list')}
            </button>
          </div>
        </div>
      )}

      {currentView === 'main' && step === 2 && (
        <div className="step2">
        <div className="flex justify-between items-center pb-5 border-b mb-10">
            <h2 className="!text-3xl font-bold">{t('cookie_preference_heading')}</h2>
            <div className="language-selector-container" style={{ position: 'relative', zIndex: 10001, minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LanguageSelector 
                section="dark" 
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            </div>
          </div>
          <div className="text-xl text-black flex flex-col gap-4 items-start">
            <p>{t('what_is_a_cookie')}</p>
            <p>
            {t('cookie_define')}
            </p>
            <p className=" mb-5">
            {t('accept_or_reject')}
              
            </p>

         
      {cookies.map((cookie, index) => (
        <div key={index} className="flex gap-7 mb-8">
           <Switch
            isChecked={cookie.isChecked}
            isDisabled={cookie.notChoosable}
            onChange={() => handleToggle(index)}  
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              <h3 className="font-bold text-2xl">{cookie.type}</h3>
              <button 
                onClick={() => toggleDetails(index)} 
                className="text-sm text-gray-600 underline cursor-pointer"
              >
                {cookie.isExpanded ? t('hide_details') : t('show_details')}
              </button>
            </div>
            <p>{cookie.description}</p>
            
            {cookie.isExpanded && (
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">{t('cookies_used')}:</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">{t('name')}</th>
                      <th className="text-left py-2">{t('purpose')}</th>
                      <th className="text-left py-2">{t('duration')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cookie.cookies.map((c, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-2">{c.name}</td>
                        <td className="py-2">{c.purpose}</td>
                        <td className="py-2">{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ))}
        <div className="flex gap-5 w-full">
              <button
                onClick={goToStep1}
                className="transition-all w-full bg-transparent hover:bg-black text-black  hover:text-white py-2 px-4 border border-black hover:border-transparent rounded-3xl"
              >
               {t('back-button')}
              </button>
              <button
                onClick={savePreferences}
                className="transition-all w-full bg-black hover:bg-transparent hover:text-black text-white  py-2 px-4 border border-black rounded-3xl"
              >
                {t('save-button')}
              </button>
            </div>
            <p>
            {t('change_cookie-preference')}
            </p>
            <button 
              onClick={showCookiePolicy}
              className="border-black border-b cursor-pointer bg-transparent border-0 p-0 text-left"
            >
              {t('cookie_list')}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CookiesModal;
