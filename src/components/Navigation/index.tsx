import classNames from "classnames";
import {
  useLocale,
  useTranslations,
} from "@/components/SimpleTranslationProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IMAGE_URL } from "@/utils/image_url";
import { LocalActiveType, routes } from "@/utils/routes";
import { LanguageSelector } from "@/components/LanguageSelector";
import "@/components/LanguageSelector/styles.css";

export const Navigation = ({
  section,
  navOpen,
  setNavOpen,
  isHovered,
  setIsHovered,
  isLangBtnHovered,
  setIsLangBtnHovered,
  selectCard,
}: {
  section: "light" | "dark";
  navOpen: boolean;
  setNavOpen: any;
  isHovered: any;
  setIsHovered: any;
  setIsLangBtnHovered: any;
  isLangBtnHovered: any;
  selectCard?: any;
}) => {
  const router = useRouter();
  const localActive = useLocale();
  const selectedLanguage = localActive as LocalActiveType;
  const t = useTranslations("Index");
  
  // Function to navigate to homepage of current language
  const navigateToHome = () => {
    router.push(`/${localActive}${routes[selectedLanguage].home}`);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-[9999] bg-transparent w-full pointer-events-none">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sticky top-0">
        <div className="relative font-extrabold text-black pointer-events-auto">
          <img
            alt="logo"
            height={70}
            width={120}
            className="h-[110px] w-[120px] object-contain 2xl:h-[100px] 2xl:w-[150px]"
            src={`${IMAGE_URL}/assets/${
              section === "light" ? "night" : "day"
            }/logo.webp`}
          />
          <div 
            className="absolute top-0 z-[10000] h-full w-full cursor-pointer rounded-full pointer-events-auto"
            onClick={navigateToHome}
          />
        </div>

        <div className="mr-[10px] flex items-center gap-[25px] pointer-events-auto z-[10000]">
          <div className="relative z-[10001] pointer-events-auto">
            <LanguageSelector
              section={section}
              isHovered={isLangBtnHovered}
              setIsHovered={setIsLangBtnHovered}
            />
          </div>
          
          <div
            className={`relative z-[10001] pointer-events-auto ${
              section === "light" ? "light" : "dark"
            } hamburger-container ${navOpen ? "navOpen" : ""}`}
          >
            <div
              className={`z-[10002] absolute h-full w-full rounded-full duration-[800ms] extra-nav pointer-events-auto cursor-pointer`}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setNavOpen(!navOpen);
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setNavOpen(!navOpen);
              }}
            ></div>
            <button
              className={`menu__icon ${
                isHovered || navOpen ? "hovered-class" : ""
              } pointer-events-none`}
            >
              <span></span>
              <span></span>
            </button>
          </div>
          
          <div className={classNames("navigation", "dark", "z-[9998]")}>
            <input
              type="checkbox"
              className="navigation__checkbox"
              checked={navOpen}
              id="navi-toggle"
              readOnly
            />
            <div
              className={`navigation__background ${navOpen ? "navOpen" : ""}`}
            >
              &nbsp;
            </div>
            <nav className="navigation__nav">
              <div className="custom-container flex min-h-[130px] items-center justify-between">
                <div />
                {/* <div
                  className={`hamburger-container dark relative z-[10001] pointer-events-auto ${
                    navOpen ? "navOpen" : ""
                  }`}
                >
                  <div
                    className="extra-nav absolute z-[10002] h-20 w-20 rounded-full duration-[800ms] pointer-events-auto cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setNavOpen(!navOpen);
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setNavOpen(!navOpen);
                    }}
                  />
                  <button
                    className={`menu__icon mr-[-40px] mb-[20px] pointer-events-none ${
                      isHovered || navOpen ? "hovered-class" : ""
                    }`}
                  >
                    <span />
                    <span />
                  </button>
                </div> */}
              </div>
              <ul className="navigation__list flex flex-col">
                <Link
                  href={`/${localActive}${routes[selectedLanguage].home}`}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">{t("Home")}</span>
                </Link>
                <Link
                  href={`/${localActive}${routes[selectedLanguage]['legal-notices']}`}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">{t("Legal_Notices")}</span>
                </Link>
                <Link
                  href={`/${localActive}${routes[selectedLanguage].cookies}`}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">
                    {t("Cookies_Policy")}
                  </span>
                </Link>
                <Link
                  href={`/${localActive}${routes[selectedLanguage].privacy}`}
                  className="navigation__item inline-block"
                >
                  <span className="navigation__link">
                    {t("Privacy_Policy")}
                  </span>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};