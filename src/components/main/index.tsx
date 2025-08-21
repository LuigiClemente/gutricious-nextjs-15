"use client";
import React, { useEffect, useRef, useState } from "react";
import { ReactCompareSlider } from "react-compare-slider";
import Cards from "../Cards/Cards";
import Briefs from "../Briefs/Briefs";
import { Scroll } from "../AutoScroll/Scroll";
import { Navigation } from "../Navigation";
import { cardsData } from "@/utils/cardsData";
import classNames from "classnames";
import Image from "next/image";
import {
  useLocale,
  useTranslations,
} from "@/components/SimpleTranslationProvider";
import { languages } from "@/utils/languages";
import { useRouter, useSearchParams } from "next/navigation";
import CookiesModal from "../CookiesModal/CookiesModal";
import ScrollTopAndComment from "../ScrollTopAndComment";
import { LocalActiveType, routes } from "@/utils/routes";
import { useModal } from "react-simple-modal-provider";
import { IMAGE_URL } from "@/utils/image_url";
import dynamic from "next/dynamic";
import { ScrollVideoPlayer } from "../ScrollVideoPlayer";
import ScrollDownArrow from "../ScrollDownArrow";
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  return isMobile;
};

// Dynamically import the video component with no SSR
const VideoScrollSection = dynamic(
  () => import("@/components/VideoScrollSection/VideoScrollSection"),
  { ssr: false }
);

export const Main = () => {
    const isMobile = useIsMobile();
    console.log({isMobile})

  const t = useTranslations("Index");
  const localActive = useLocale();
  const selectedLanguage = localActive as LocalActiveType;
  const searchParams = useSearchParams();
  const [langBtnState, setLangBtnState] = useState(false);
  const { open: openEmailThanksModal } = useModal("EmailFormThanksModal");
  const { open: openMarketSuccessFormModal } = useModal("MarketSuccessForm");

  const router = useRouter();

  const [showMarketForm, setShowMarketForm] = useState(
    searchParams.get("showMarketForm") ? true : false
  );
  const [showFormSuccess, setShowFormSuccess] = useState(
    searchParams.get("showFormSuccess") ? true : false
  );

  useEffect(() => {
    if (showFormSuccess) {
      openEmailThanksModal({});
    }
    if (showMarketForm) {
      openMarketSuccessFormModal({});
    }
    console.log({ showMarketForm, showFormSuccess });
  }, [showMarketForm, showFormSuccess]);

  const [cards, setCards] = useState<any>([
    {
      id: 2,
      selected: false,
      color: "#2ae8d3 ",
      borderColor: "#D3D2FF",
      darkColor: " #23cab7",

      cardOffset: -1.5,

      linearGradient: "linear-gradient(#23cab7 1%,#2ae8d3  30%, #2ae8d3 )",

      linearGradient2: "linear-gradient(0deg, #23cab7 40%,#2ae8d3 )",
      linearGradientDark: "#113939",

      cardName: t("microbiomeAnalysis"),
      bottomIcon: "/assets/card-icons/microbes.webp",
      textColor: "#05403a",

      cardDescription: t("personalizedNutritionDesc"),
      cta: t("readMoreButton"),

      longSecHeading: t("microbiomeAnalysisHeroHeading"),
      longSecDescription: t("microbiomeAnalysisHeroDescription"),
      longSecImage: "/assets/hero-section/microbiome-hero.webp",
      smallSections: [
        {
          logo: "/assets/third-section-microbiome/fermented-foods.webp",
          heading: t("smallCard1HeadingMicrobiome"),
          description: t("smallCard1DescriptionMicrobiome"),
        },
        {
          logo: "/assets/third-section-microbiome/fiber-rich-foods.webp",
          heading: t("smallCard2HeadingMicrobiome"),
          description: t("smallCard2DescriptionMicrobiome"),
        },
      ],
      subHeading: t("lowerHeadingMicrobiome"),
      subPara: t("lowerDescriptionMicrobiome"),
      secondaryImage:
        "/assets/third-section-closing-images-section/LAST-microbe.webp",

      footerBg: "/assets/footer-bgs/GREEN.webp",
      footerBgColor: "#DDAF29",
    },

    {
      id: 3,
      selected: false,
      color: "#f6b9ae ",
      borderColor: "#D3D2FF",
      cardOffset: -0.5,
      darkColor: "#d6a097 ",
      bottomIcon: "/assets/card-icons/apple.webp",
      linearGradient: "linear-gradient(#d6a097 1%, #f6b9ae  30%,#f6b9ae )",
      linearGradient2: "linear-gradient(0deg,#d6a097 40%,#f6b9ae )",
      linearGradientDark: "#332851",
      cardName: t("nutritionalProfiling"),
      cardDescription: t("nutritionalProfilingDesc"),
      cta: t("readMoreButton"),
      textColor: "#45312e",

      longSecHeading: t("smallCard7HeadingNutrition"),
      longSecDescription: t("smallCard7DescriptionNutrition"),
      longSecImage: "/assets/hero-section/nutrition-hero.webp",
      smallSections: [
        {
          logo: "/assets/third-section-nutrition/dietary-patterns-comparative-analysis.webp",
          heading: t("smallCard1HeadingNutrition"),
          description: t("smallCard1DescriptionNutrition"),
          fullWidth: false,
        },
        {
          logo: "/assets/third-section-nutrition/mineral-synergies-and-bioavailability.webp",
          heading: t("nutritionalProfilingHeroHeading"),
          description: t("nutritionalProfilingHeroDescription"),
          fullWidth: false,
        },
      ],
      subHeading: t("lowerHeadingNutrition"),
      subPara: t("lowerDescriptionNutrition"),
      secondaryImage:
        "/assets/third-section-closing-images-section/nutrition.webp",

      footerBg: "/assets/footer-bgs/ORANGE.webp",
      footerBgColor: "rgb(248, 79, 57)",
    },
    {
      id: 1,
      selected: true,
      color: "#8250fb",
      borderColor: "#D3D2FF",
      cardOffset: 0.5,
      darkColor: "#7044da",
      linearGradient: "linear-gradient(#7044da 1%, #8250fb 20%)",
      linearGradient2: "linear-gradient(0deg, #7044da 40%,#8250fb)",
      linearGradientDark: "#781c45",
      cardName: t("glucoseMonitoring"),

      bottomIcon: `${IMAGE_URL}/assets/card-icons/sugar.webp`,

      cardDescription: t("glucoseMonitoringDesc"),
      cta: t("readMoreButton"),
      textColor: "#201046",

      longSecHeading: t("glucoseMonitoringHeroHeading"),
      longSecDescription: t("glucoseMonitoringHeroDescription"),
      longSecVideo: "/assets/hero-section/sugar-hero.mp4",

      smallSections: [
        {
          logo: "/assets/third-section-sugar/managing-sugar-intake.webp",
          heading: t("smallCard1HeadingSugar"),
          description: t("smallCard1DescriptionSugar"),
        },
        {
          logo: "/assets/third-section-sugar/types-of-natural-added-sugar.webp",
          heading: t("smallCard2HeadingSugar"),
          description: t("smallCard2DescriptionSugar"),
        },
        // Removed 'Unveiling Your Sweet Spot' card as requested
      ],
      subHeading: t("lowerHeadingSugar"),
      subPara: t("lowerDescriptionSugar"),
      secondaryImage: "/assets/third-section-closing-images-section/sugar.webp",
      footerBg: `${IMAGE_URL}/assets/footer-bgs/RED.webp`,
      footerBgColor: "#ffa500",
    },
    {
      id: 4,
      selected: false,
      color: "#f8e43f",
      borderColor: "#D3D2FF",
      cardOffset: 1.5,
      darkColor: "#d8c635",
      linearGradient: "linear-gradient(rgb(255, 255, 255) 1%, #f8e43f 20%)",
      linearGradient2: "linear-gradient(0deg,#f8e43f 40%,#d8c635)",
      linearGradientDark: "#895e08",
      bottomIcon: `${IMAGE_URL}/assets/card-icons/pear.webp`,
      cardName: t("lipidManagement"),
      cardDescription: t("lipidManagementDesc"),
      cta: t("readMoreButton"),

      textColor: "#453f0a",

      longSecHeading: t("lipidManagementHeroHeading"),
      longSecDescription: t("lipidManagementHeroDescription"),
      longSecImage: "/assets/hero-section/avocado-hero.webp",
      smallSections: [
        {
          logo: "/assets/third-section-fat/effects-on-health-fats.webp",
          heading: t("smallCard1HeadingFat"),
          description: t("smallCard1DescriptionFat"),
        },
        {
          logo: "/assets/third-section-fat/fat-types-saturated-fats.webp",
          heading: t("smallCard2HeadingFat"),
          description: t("smallCard2DescriptionFat"),
        },
      ],
      subHeading: t("lowerHeadingFat"),
      subPara: t("lowerDescriptionFat"),
      secondaryImage: "/assets/third-section-closing-images-section/fat.webp",

      footerBg: "/assets/footer-bgs/YELLOW.webp",
      footerBgColor: "rgb(0, 151, 136)",
    },
  ]);
  const [isHovered, setIsHovered] = useState(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [isLangBtnHovered, setIsLangBtnHovered] = useState(false);

  const [selectedCard, setSelectedCard] = useState<any>(
    cards.find((card: any) => card.selected)
  );
  const [otherCardsOrdered, setOtherCardsOrdered] = useState<any>([]);

  const cardsDetailsSection = useRef(null);

  const scrollToRef = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const executeScroll = () => scrollToRef(cardsDetailsSection);

  useEffect(() => {
    const selectedIndex = cards.findIndex((card: any) => card.selected);
    if (selectedIndex !== -1) {
      setSelectedCard(cards[selectedIndex]);
    }

    const newOtherCardsOrdered = [
      ...cards.slice(selectedIndex + 1),
      ...cards.slice(0, selectedIndex),
    ].filter((card) => !card.selected);

    setOtherCardsOrdered(newOtherCardsOrdered);
  }, [cards]);

  const selectCard = (cardId: any, notExecute = false) => {
    const revisedCards = cards.map((card: any) => ({
      ...card,
      selected: card.id === cardId,
    }));

    setCards(revisedCards);
    if (!notExecute) executeScroll();
  };

  return (
    <main
      id="main-page"
      className={`flex min-h-full flex-col items-center justify-center  text-center text-black ${
        navOpen ? "navOpen" : ""
      } `}
    >
      <ScrollTopAndComment></ScrollTopAndComment>
      <ScrollDownArrow navOpen={navOpen}></ScrollDownArrow>

      <div
        className="transparent-lang"
        onClick={() => {
          console.log(
            "[DEBUG] Main transparent-lang clicked - langBtnState before:",
            langBtnState
          );
          console.log(
            "[DEBUG] Main transparent-lang clicked - Current target element:",
            document.activeElement
          );

          // Use a consistent toggle approach similar to Navigation
          const newState = !langBtnState;
          console.log(
            "[DEBUG] Main transparent-lang clicked - Setting to:",
            newState
          );

          // Update both states atomically to ensure consistency
          setLangBtnState(newState);

          // Log post-state changes
          setTimeout(() => {
            console.log(
              "[DEBUG] Main transparent-lang clicked - State after update:",
              newState
            );
          }, 0);
        }}
        onTouchStart={(e) => {
          // Prevent default to avoid double triggering with onClick
          e.preventDefault();
          console.log("[DEBUG] Main transparent-lang touch detected");
        }}
        onTouchEnd={(e) => {
          // Prevent default to avoid unintended scrolling/zooming
          e.preventDefault();

          // Use a consistent toggle approach similar to Navigation
          const newState = !langBtnState;
          console.log(
            "[DEBUG] Main transparent-lang touch ended - Setting to:",
            newState
          );

          // Update both states atomically to ensure consistency
          setLangBtnState(newState);
        }}
        aria-label="Toggle language selection"
        role="button"
        tabIndex={0}
      ></div>
      <div
        className="transparent-menu"
        onClick={() => setNavOpen(!navOpen)}
      ></div>
      <div
        className="transparent-logo"
        onClick={() => {
          // Navigate to home page of current language
          router.push(`/${localActive}${routes[selectedLanguage].home}`);
        }}
      ></div>
      <CookiesModal></CookiesModal>

      <ReactCompareSlider
  changePositionOnHover={!isMobile}
  boundsPadding={0}
  itemOne={
    <CompareSliderItem
      theme="dark"
      navigationSection="dark"
      scrollItems="/assets/day"
      navOpen={navOpen}
      setNavOpen={setNavOpen}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      isLangBtnHovered={isLangBtnHovered}
      setIsLangBtnHovered={setIsLangBtnHovered}
      selectCard={selectCard}
    />
  }
  itemTwo={
    <CompareSliderItem
      theme="light"
      navigationSection="light"
      scrollItems="/assets/night"
      navOpen={navOpen}
      setNavOpen={setNavOpen}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      isLangBtnHovered={isLangBtnHovered}
      setIsLangBtnHovered={setIsLangBtnHovered}
      selectCard={selectCard}
    />
  }
  keyboardIncrement="5%"
  position={50}
  // Update className to ensure proper layering
  className="w-full overflow-y-visible min-h-screen relative z-[1]"
  // Add style to ensure the slider doesn't interfere with navigation
  style={{ pointerEvents: 'auto', zIndex: 1 }}
/>

      {/* Video Scrolling Section - Placed after CompareSlider and before Cards */}
      {/* <div className="min-h-screen">
        <ScrollVideoPlayer
          videoSrc="./output_highest_quality.mp4"
          containerHeight="400vh"
        />
      </div> */}

      <Cards
        cards={cards}
        selectCard={selectCard}
        executeScroll={executeScroll}
      />

      {/* Briefs Section */}
      <Briefs
        reference={cardsDetailsSection}
        selectedCard={selectedCard}
        otherCards={otherCardsOrdered}
        selectCard={selectCard}
      />
    </main>
  );
};

const CompareSliderItem = ({
  selectCard,
  theme,
  navigationSection,
  scrollItems,
  navOpen,
  setNavOpen,
  isHovered,
  setIsHovered,
  isLangBtnHovered,
  setIsLangBtnHovered,
}: any) => {
  const localActive = useLocale();
  const t = useTranslations("Index");
  return (
    <section
      className={`${
        theme === "dark" ? "bg-white " : `bg-[#f6b9ae]`
      }  flex flex-col justify-between min-h-screen  w-[100vw] ${theme}-section relative`}
    >
      <div className="custom-container">
        <Navigation
          section={navigationSection}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isLangBtnHovered={isLangBtnHovered}
          setIsLangBtnHovered={setIsLangBtnHovered}
          selectCard={selectCard}
        />
      </div>
      <div className=" mt-[120px] sm:mt-12">
        {getHeading(localActive, theme)}
      </div>

      <div>
        <div className=" px-4 custom-container mt-5">
          <h3
            className={classNames(
              "text-body-description font-medium mb-5 container max-w-[800px] 2xl:max-w-[1100px] mx-auto ",
              theme === "light" ? "text-white" : "text-text-grey"
            )}
          >
            {t("subHeading")}
          </h3>
        </div>
        <Scroll
          items={
            theme === "light"
              ? [
                  // Night theme images
                  `${scrollItems}/1 Loaded Nachos.jpg`,
                  `${scrollItems}/2 Double Cheeseburger.jpg`,
                  `${scrollItems}/3 Deep Dish Pizza.jpg`,
                  `${scrollItems}/4 Fried Chicken & Waffles.jpg`,
                  `${scrollItems}/5 Creamy Ramen.jpg`,
                  `${scrollItems}/6 Mac & Cheese.jpg`,
                  `${scrollItems}/7 Buffalo Wings.jpg`,
                  `${scrollItems}/8 Chocolate Cake.jpg`,
                  `${scrollItems}/9 Loaded Fries.jpg`,
                  `${scrollItems}/10 BBQ Ribs.jpg`,
                  `${scrollItems}/11 Donuts.jpg`,
                  `${scrollItems}/12 Ice Cream Sundae.jpg`,
                  `${scrollItems}/13 Fried Rice.jpg`,
                  `${scrollItems}/14 Cheese Quesadilla.jpg`,
                  `${scrollItems}/15 Milkshake.jpg`,
                ]
              : [
                  // Day theme images (original)
                  `${scrollItems}/1 Acai Bowl.jpg`,
                  `${scrollItems}/2 Avocado Toast & Egg.jpg`,
                  `${scrollItems}/3 Green Smoothie Bowl.jpg`,
                  `${scrollItems}/4 Quinoa Buddha Bowl.jpg`,
                  `${scrollItems}/5 Greek Yogurt Parfait.jpg`,
                  `${scrollItems}/6 Grilled Chicken Salad.jpg`,
                  `${scrollItems}/7 Fresh Poke Bowl.jpg`,
                  `${scrollItems}/8 Overnight Oats.jpg`,
                  `${scrollItems}/9 Salmon & Vegetables.jpg`,
                  `${scrollItems}/10 Veggie Wrap.jpg`,
                  `${scrollItems}/11 Chia Seed Pudding.jpg`,
                  `${scrollItems}/12 Lean Turkey Bowl.jpg`,
                  `${scrollItems}/13 Fresh Fruit Salad.jpg`,
                  `${scrollItems}/14 Protein Smoothie.jpg`,
                  `${scrollItems}/15 Grilled Fish Tacos.jpg`,
                ]
          }
        />

        <div className=" px-4 my-3 mb-5">
          <h3
            className={classNames(
              "text-body-description font-medium mb-5",
              theme === "light" ? "text-white" : "text-text-grey"
            )}
          >
            {t("starText")}
          </h3>
        </div>
      </div>
    </section>
  );
};

const getHeading = (localeActive: string, theme: string) => {
  const langText =
    languages.find((lang) => lang.code === localeActive)?.text || "english";
  let languageJsx = (
    <>
      {" "}
      <div
        className={`flex flex-col justify-center items-center sm:hidden text-${
          theme === "dark" ? "black" : "light-section-heading"
        } text-mobile-hero font-semibold tracking-wide text-left w-max mx-auto`}
      >
        <div className="flex   w-max">
          <h1>Discover how </h1>
        </div>
        <div className="flex gap-1  w-max flex-col -mt-3 ">
          <h1>food impacts </h1>
        </div>
        <div className="flex gap-5  w-max -mt-3">
          <h1>Your </h1>
          <Image
            loader={({ src }) => src}
            src={`${IMAGE_URL}/assets/${
              theme === "dark" ? "body" : "health"
            }/${langText}.webp`}
            alt="word image"
            height={100}
            width={theme === "dark" ? 210 : 300}
            className={`h-36 -mt-[6px] ml-3 w-auto  object-contain `}
          />
        </div>
      </div>
      <div
        className={` main-heading hidden sm:block text-${
          theme === "dark" ? "black" : "light-section-heading"
        } main-heading-responsive font-semibold tracking-wide mb-11 text-left w-max mx-auto flex flex-col items-start min-w-[611px]`}
      >
        <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
          <h1>Discover how food</h1>
        </div>
        <div className={`flex gap-5  w-max mt-3 2xl:mt-6 relative`}>
          <h1 className="mt-4 2xl:mt-8">impacts your</h1>
          <Image
            loader={({ src }) => src}
            src={`${IMAGE_URL}/assets/${
              theme === "dark" ? "body" : "health"
            }/${langText}.webp`}
            alt="word image"
            height={300}
            width={theme === "dark" ? 210 : 300}
            className={`h-[11rem]  w-auto  2xl:h-60  object-contain sm:-mt-4 pl-[5px] lg:pl-[15px] absolute top-1 left-[102%]`}
          />
        </div>
      </div>
    </>
  );

  if (localeActive === "pt") {
    languageJsx = (
      <>
        {" "}
        <div
          className={`flex flex-col justify-center items-center   md:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          } text-[3.8rem] xs:text-8xl  2xl:text-9xl font-semibold tracking-wide text-left w-max mx-auto`}
        >
          <div className=" flex    w-max">
            <h1>Descobre como a </h1>
          </div>
          <div className="flex gap-1  w-max flex-col -mt-2">
            <h1>comida impacta </h1>
          </div>
          <div className="flex gap-5  w-max  -mt-2">
            <h1 className="mt-4"> {theme === "light" ? "a tua" : " o teu"} </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={300}
              className={`h-36 ml-1 -mt-[6px] xs:h-40 w-auto -mt-3  object-contain `}
            />
          </div>
        </div>
        <div
          className={` main-heading hidden md:block text-${
            theme === "dark" ? "black" : "light-section-heading"
          } main-heading-responsive font-semibold tracking-wide mb-11 text-left w-max mx-auto flex flex-col items-center justify-center`}
        >
          <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
            <h1>Descobre como a comida</h1>
          </div>
          <div className={`flex gap-5  w-max mt-3 2xl:mt-6 relative`}>
            <h1 className="mt-4 2xl:mt-8">
              {" "}
              {theme === "light" ? "impacta a tua" : "impacta o teu"}{" "}
            </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={300}
              width={theme === "dark" ? 210 : 300}
              className={`h-[11.3rem]  w-auto 2xl:h-60  object-contain pl-[20px] -mt-5  `}
            />
          </div>
        </div>
      </>
    );
  }

  if (localeActive === "es") {
    languageJsx = (
      <>
        {" "}
        <div
          className={`flex flex-col justify-center items-center sm:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          } display-lg font-semibold tracking-wide text-left w-max mx-auto`}
        >
          <div className="flex   w-max">
            <h1>Descubre cómo </h1>
          </div>
          <div className="flex gap-1  w-max flex-col -mt-3 ">
            <h1>comida impacta </h1>
          </div>
          <div className="flex gap-5  w-max -mt-3">
            <h1>tu </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={theme === "dark" ? 210 : 300}
              className={`h-32 sm:h-36 ml-3 -mt-2 w-auto  object-contain `}
            />
          </div>
        </div>
        <div
          className={` main-heading hidden sm:flex text-${
            theme === "dark" ? "black" : "light-section-heading"
          } text-7xl sm:text-8xl  2xl:text-9xl font-semibold tracking-wide mb-11 text-left w-max mx-auto flex flex-col items-center justify-center min-w-[611px]`}
        >
          <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
            <h1>Descubre cómo la comida</h1>
          </div>
          <div className={`flex gap-5  w-max mt-3 2xl:mt-6 relative`}>
            <h1 className="mt-4 2xl:mt-8">impacta tu</h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={300}
              width={theme === "dark" ? 210 : 300}
              className={`h-[10.3rem] md:h-[10rem] w-auto 2xl:h-60  object-contain 2xl:-mt-4 pl-[5px] md:pl-[15px] `}
            />
          </div>
        </div>
      </>
    );
  }

  if (localeActive === "fr") {
    languageJsx = (
      <>
        <div
          className={`flex flex-col justify-center items-center   lg:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          } text-[3.6rem] xs:text-[4rem] sm:text-8xl  2xl:text-9xl font-semibold tracking-wide text-left w-max mx-auto `}
        >
          <div className="flex   w-max">
            <h1>Découvrez comment </h1>
          </div>
          <div className="flex gap-1  w-max flex-col mt-2">
            <h1>la nourriture impacte </h1>
          </div>
          <div className="flex gap-5  w-max ">
            <h1 className="mt-4">votre</h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={theme === "dark" ? 210 : 300}
              className={`h-32  sm:h-40 w-auto  -mt-[3px] object-contain `}
            />
          </div>
        </div>

        <div
          className={` main-heading hidden lg:flex text-${
            theme === "dark" ? "black" : "light-section-heading"
          }   text-7xl sm:text-8xl  2xl:text-9xl font-semibold tracking-wide mb-11 text-left w-max mx-auto flex flex-col items-center justify-center`}
        >
          <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
            <h1>Découvrez comment la </h1>
          </div>

          <div className={`flex gap-5  w-max mt-3 2xl:mt-6 relative`}>
            <h1 className="mt-4 2xl:mt-8">nourriture impacte votre </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={300}
              width={theme === "dark" ? 210 : 300}
              className={`h-[12.3rem] w-auto 2xl:h-60  object-contain  pl-[15px]  md:-mt-8 2xl:-mt-4 `}
            />
          </div>
        </div>
      </>
    );
  }

  if (localeActive === "nl") {
    languageJsx = (
      <>
        {" "}
        <div
          className={`flex flex-col justify-center items-center md:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          }  text-[4.5rem] sm:text-[5rem]  font-semibold tracking-wide text-left w-max mx-auto  sm:min-w-[550px]`}
        >
          <div className="flex   w-max">
            <h1>Ontdek hoe </h1>
          </div>
          <div className="flex gap-1  w-max flex-col -mt-3 ">
            <h1> eten jouw </h1>
          </div>
          <div className="flex flex-col xs:flex-row xs:gap-5  w-max -mt-3">
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={300}
              className={` ${
                theme === "dark"
                  ? "ml-2 sm:ml-5 mt-4 h-[6rem] !mb-[15px]  sm:h-[5rem]"
                  : "mt-2 h-[8rem]"
              } w-auto  object-contain `}
            />
            <h1> {theme === "dark" ? "beïnvloedt" : "beïnvloedt"}</h1>
          </div>
        </div>
        <div
          className={` main-heading hidden md:flex text-${
            theme === "dark" ? "black" : "light-section-heading"
          } text-7xl sm:text-8xl  2xl:text-9xl font-semibold tracking-wide mb-11 text-left w-max mx-auto flex-col items-center justify-center`}
        >
          <div className="flex gap-5  w-max ">
            <h1>Ontdek hoe eten jouw</h1>
          </div>

          <div className={`flex gap-5  w-max  relative max-h-36`}>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={theme === "dark" ? 210 : 300}
              className={`   object-contain   left-[100%] bottom-0 ${
                theme === "dark"
                  ? " mt-[8px] 2xl:mt-[6px] h-[6.5rem]  2xl:h-[9rem]"
                  : "h-[8rem] 2xl:h-[11rem]  mt-[14px] "
              } w-[250px] lg:w-[300px]   mr-2`}
            />
            <h1 className="mt-4 2xl:mt-8">
              {theme === "dark" ? "beïnvloedt" : "beïnvloedt"}
            </h1>
          </div>
        </div>
      </>
    );
  }

  if (localeActive === "de") {
    languageJsx = (
      <>
        {" "}
        <div
          className={`flex flex-col justify-center items-center md:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          }  text-[4.5rem] sm:text-[6rem]  font-semibold tracking-wide text-left w-max mx-auto  sm:min-w-[550px]`}
        >
          <div className="flex   w-max">
            <h1> Ontdek hoe </h1>
          </div>
          <div className="flex gap-1  w-max flex-col -mt-3 ">
            <h1> voeding jouw </h1>
          </div>
          <div className="flex flex-col xs:flex-row xs:gap-5  w-max -mt-3">
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={300}
              className={`h-28 sm:h-36 ${
                theme === "dark" ? "ml-2 sm:ml-5 " : ""
              } w-auto  object-contain `}
            />
            <h1> {theme === "light" ? "beeinflusst" : "beïnvloedt"}</h1>
          </div>
        </div>
        <div
          className={` main-heading hidden md:flex text-${
            theme === "dark" ? "black" : "light-section-heading"
          } md:text-8xl  2xl:text-9xl font-semibold tracking-wide mb-11 text-left w-max mx-auto flex-col items-center justify-center`}
        >
          <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
            <h1>Entdecke, wie Essen deine</h1>
          </div>

          <div
            className={`flex 2xl:gap-5  w-max mt-3 2xl:mt-6 relative max-h-36`}
          >
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={theme === "dark" ? 210 : 300}
              className={`h-40 2xl:h-60   object-contain  translate-y-[-12px] left-[100%] bottom-0 ${
                theme === "dark"
                  ? "w-[220px] lg:w-[300px] mt-[8px] lg:mt-[2px] "
                  : "w-[250px] lg:w-[400px] mt-[10px] lg:mt-[8px]"
              }   mr-2`}
            />
            <h1 className="mt-4 2xl:mt-8">
              {theme === "light" ? "beeinflusst" : "beïnvloedt"}
            </h1>
          </div>
        </div>
      </>
    );
  }

  if (localeActive === "it") {
    languageJsx = (
      <>
        {" "}
        <div
          className={`flex flex-col justify-center items-center   sm:hidden text-${
            theme === "dark" ? "black" : "light-section-heading"
          } text-[5rem] sm:text-8xl  2xl:text-9xl font-semibold tracking-wide text-left w-max mx-auto `}
        >
          <div className="flex   w-max">
            <h1>Scopri come </h1>
          </div>
          <div className="flex gap-1  w-max flex-col -mt-3 ">
            <h1>il cibo impatta </h1>
          </div>
          <div className="flex gap-5  w-max -mt-3">
            <h1>{theme == "light" ? " la tua " : "il tuo"} </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={100}
              width={theme === "dark" ? 210 : 300}
              className={classNames(
                `h-36 ml-3  w-auto    object-contain `,
                theme === "dark" ? "mt-1" : "translate-y-[-5px]"
              )}
            />
          </div>
        </div>
        <div
          className={` main-heading hidden sm:block text-${
            theme === "dark" ? "black" : "light-section-heading"
          } main-heading-responsive font-semibold tracking-wide mb-11 text-left w-max mx-auto flex flex-col items-start min-w-[611px]`}
        >
          <div className="flex gap-5  w-max translate-y-2 2xl:translate-y-7">
            <h1>Scopri come il cibo </h1>
          </div>
          <div className={`flex gap-5  w-max mt-3 2xl:mt-6 relative`}>
            <h1 className="mt-4 2xl:mt-8">
              impatta {theme == "light" ? " la tua " : "il tuo"}
            </h1>
            <Image
              loader={({ src }) => src}
              src={`${IMAGE_URL}/assets/${
                theme === "dark" ? "body" : "health"
              }/${langText}.webp`}
              alt="word image"
              height={300}
              width={theme === "dark" ? 210 : 300}
              className={classNames(
                `h-[11rem]  w-auto 2xl:h-60  object-contain  pl-[5px] lg:pl-[15px] absolute top-1 left-[102%]`,
                theme === "dark" ? "-mt-2" : "-mt-5"
              )}
            />
          </div>
        </div>
      </>
    );
  }
  return languageJsx;
};
