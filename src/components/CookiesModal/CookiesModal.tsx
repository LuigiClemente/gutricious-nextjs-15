import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Switch from "../Switch/switch";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import Cookies from "js-cookie";
import { trackEvent, EventCategory } from "@/utils/analytics";
import { LanguageSelector } from "../LanguageSelector";
import "../LanguageSelector/styles.css";

// Make sure to set the app element for accessibility reasons
Modal.setAppElement("body");

const CookiesModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
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
          { name: "cookies", purpose: "Stores whether user has seen the cookie banner", duration: "7 days" },
          { name: "NEXT_LOCALE", purpose: "Stores user's language preference", duration: "1 year" },
          { name: "__session", purpose: "Maintains user session state", duration: "Session" },
          { name: "csrf_token", purpose: "Protects against cross-site request forgery", duration: "Session" }
        ]
    },
    {
        "type": t('security_cookies'),
        "description": t('security_cookies_define'),
        "cookies": [
          { name: "auth_token", purpose: "Authentication token for secure login", duration: "Session" },
          { name: "sec_validation", purpose: "Security validation for form submission", duration: "1 hour" }
        ]
    },
    {
        "type": t('analytics_cookies'),
        "description": t('analytics_cookies_define'),
        "cookies": [
          { name: "umami.*", purpose: "Anonymous website usage analytics", duration: "1 year" },
          { name: "_ga", purpose: "Google Analytics identifier", duration: "2 years" },
          { name: "_ga_*", purpose: "Google Analytics session data", duration: "2 years" }
        ]
    },
    {
        "type": t('advertising_cookies'),
        "description": t('advertising_cookies_define'),
        "cookies": [
          { name: "_fbp", purpose: "Facebook pixel tracking", duration: "90 days" },
          { name: "_gcl_au", purpose: "Google AdSense conversion linking", duration: "90 days" }
        ]
    },
    {
      "type": t('personalization_cookies'),
      "description": t('personalization_cookies_define'),
      "cookies": [
        { name: "user_preferences", purpose: "Stores user's site preferences", duration: "1 year" },
        { name: "recently_viewed", purpose: "Tracks recently viewed content", duration: "30 days" }
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
      {step === 1 && (
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
            <a 
              href={getCookiePolicyPath()} 
              className="border-black border-b cursor-pointer"
              onClick={() => {
                // Close modal before navigation to cookie page
                closeModal();
              }}
            >
              {t('cookie_list')}
            </a>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step2">
        <div className="flex justify-between items-center pb-5 border-b mb-10">
            <h2 className="text-3xl font-bold">{t('cookie_preference_heading')}</h2>
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
            <a 
              href={getCookiePolicyPath()} 
              className="border-black border-b cursor-pointer"
              onClick={() => {
                // Close modal before navigation to cookie page
                closeModal();
              }}
            >
              {t('cookie_list')}
            </a>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default CookiesModal;
