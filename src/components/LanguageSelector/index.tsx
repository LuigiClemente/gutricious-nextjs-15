"use client";
import { useState, useRef, useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { languages } from "@/utils/languages";
import { LocalActiveType } from "@/utils/routes";
import { useLocale } from "@/components/SimpleTranslationProvider";
import { useRouter } from "next/navigation";

interface LanguageSelectorProps {
  section: "light" | "dark";
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}

export const LanguageSelector = ({
  section,
  isHovered,
  setIsHovered,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LocalActiveType>(
    useLocale() as LocalActiveType
  );
  const router = useRouter();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languageRoutes: Record<string, string> = {
    en: "/home",
    de: "/startseite", 
    nl: "/startpagina",
    fr: "/accueil",
    es: "/inicio",
    pt: "/pagina-inicial",
    it: "/casa",
  };

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    console.log("toggleDropdown called, current isOpen:", isOpen);
    setIsOpen(!isOpen);
  };

  const changeLanguage = (langCode: LocalActiveType) => {
    const route = languageRoutes[langCode];
    if (route) {
      setSelectedLanguage(langCode);
      setIsOpen(false);
      document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000; samesite=lax`;
      router.push(route);
    }
  };

  return (
    <div className="language-selector-wrapper" ref={containerRef}>
      {/* Language Button */}
      <div
        className={`lang-btn ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleDropdown();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <CiGlobe color={section === "light" ? "#ffffff" : "#000000"} />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="lang-dropdown" ref={dropdownRef}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${
                selectedLanguage === lang.code ? "selected" : ""
              }`}
              onClick={() => changeLanguage(lang.code as LocalActiveType)}
            >
              <span>{lang.label}</span>
              {selectedLanguage === lang.code && (
                <svg
                  height="1em"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M20.54 7.225L9.58 18.185l-6.12-6.12 1.415-1.414 4.705 4.706 9.546-9.546z"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};