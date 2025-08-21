"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa";
import BriefCards from "../BriefCards/Card";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import Footer from "../Footer/Footer";
import { url } from "inspector";
import { IMAGE_URL } from "@/utils/image_url";

const Briefs = ({ selectedCard, selectCard, otherCards, reference }: any) => {
  const t = useTranslations("Index");
  return (
    <div
      ref={reference}
      className="w-full pt-24  min-h-[100vh]  text-black overflow-hidden"
    >
      <div className="">
        <div className="flex flex-col md:flex-row relative  custom-container mb-16">
          <div className="w-full md:w-1/2 text-center md:text-left  ">
            <h1 className="text-4xl md:text-7xl  font-bold  ">
              {t("healthInsightsHeading")}
            </h1>
            <p className="  text-2xl md:text-3xl  my-10 text-text-grey">
              {t("healthInsightsDescription")}
            </p>
            <a href="#footer" className="">
              <button className="btn-primary mx-auto md:mx-0">
                {t("getStartedButtonText")}
              </button>
            </a>
          </div>

          <div className="w-[90%] md:w-1/2 mx-auto  mb-10 md:mb-0">
            <BriefCards
              otherCards={otherCards}
              selectedCard={selectedCard}
            ></BriefCards>
           
          </div>
        </div>
        <div
          className="w-full relative  py-16 pt-20"
          style={{ background: selectedCard.color }}
        >
          <div className="relative custom-container pb-32 pt-5">
            <div className=" relative  text-black">
              {selectedCard.longSecHeading && (
                <article
                  className="flex flex-col-reverse md:flex-row items-center  mb-5 p-8 md:p-16  rounded-2xl gap-0 min-h-[300px] hover:shadow-2xl transition"
                  style={{ background: "white" }}
                >
                  <div className="w-full flex-grow-0 md:w-1/2  text-left md:mr-20">
                    <h1 className="text-5xl  leading-snug font-bold">
                      {selectedCard?.longSecHeading}
                    </h1>
                    <p className="mt-10 2xl:mt-10 text-2xl md:text-3xl leading-loose tracking-wide    text-text-grey">
                      {selectedCard?.longSecDescription}
                    </p>
                  </div>
                  <div className="w-full  h-full md:w-1/2 flex justify-center items-center">
                    {selectedCard?.longSecVideo ? (
                      <video
                        className="custom-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        height="450"
                        width="450"
                      >
                        <source
                          src="/assets/hero-section/sugar-hero.webm"
                          type="video/webm"
                        />
                        <source
                          src="/assets/hero-section/sugar-hero.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={selectedCard?.longSecImage as string}
                        alt="Feature"
                        height={300}
                        width={300}
                        className="mx-auto object-contain h-full w-full max-h-[390px] max-w-[390px] md:max-h-[390px] md:max-w-[390px]"
                        unoptimized={process.env.NODE_ENV !== 'production'}
                      />
                    )}
                  </div>
                </article>
              )}

              <div className="grid  gap-5 grid-cols-1 md:grid-cols-2 ">
                {selectedCard?.smallSections.map(
                  (smallSection: any, index: number) => (
                    <article
                      className={`p-8 md:p-16 rounded-2xl gap-12 ${
                        smallSection?.isSingleCard
                          ? `md:col-span-2`
                          : `col-span-1`
                      } col-span-1 hover:shadow-2xl transition`}
                      style={{ background: "white" }}
                      key={index}
                    >
                      {smallSection?.isSingleCard ? (
                        <div className="grid grid-cols-2 ">
                          <div className=" flex md:hidden justify-center  items-center col-span-2  ">
                            <div className="m-[24px]">
                              <img
                                src={smallSection.logo}
                                alt=""
                                height={390}
                                width={390}
                                className="h-[200px] w-auto object-contain"
                              />
                            </div>
                          </div>
                          <div className="col-span-2 md:col-span-1 md:mr-[0px] ">
                            <h1 className="text-left text-5xl md:mr-[120px] leading-snug font-bold mt-4 md:mt-0">
                              {smallSection.heading}
                            </h1>
                            <p className="text-left text-2xl md:text-3xl leading-loose tracking-wide  text-text-grey mt-4 md:mt-10">
                              {smallSection.description}
                            </p>
                          </div>
                          <div className="hidden  md:flex justify-center items-center col-span-1  ">
                            <div>
                              <img
                                src={smallSection.logo}
                                alt=""
                                height={390}
                                width={390}
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className=" flex flex-col md:block items-start text-left">
                          <img
                            src={smallSection.logo}
                            alt="Feature"
                            style={{
                              shapeOutside: `circle(${
                                smallSection.isSingleCard ? "150px" : "100px"
                              })`,
                              marginLeft: "60px", //redeploy
                              marginBottom: "50px",
                            }}
                            // fiber-rich-foods.webp
                            className={`m-[35px] ${
                              smallSection.logo.includes(
                                "polyphenol-rich-foods.webp"
                              )
                                ? `h-[216px] !ml-[78px]`:
                              smallSection.logo.includes(
                                "fiber-rich-foods.webp"
                              )
                                ? `h-[200px]`
                                : smallSection.logo.includes(
                                    "prebiotic-foods.webp"
                                  )
                                ? `h-[215px]`
                                : `h-[200px]`
                            } object-contain md:float-right md:mr-8 mb-4 md:ml-[0px]`}
                          />
                          <div className="md:mr-[38px]">
                            <h1 className="text-5xl md:mr-[120px] leading-snug font-bold mt-4 md:mt-0">
                              {smallSection.heading}
                            </h1>
                            <p className="text-2xl md:text-3xl leading-loose tracking-wide  text-text-grey mt-4 md:mt-10">
                              {smallSection.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </article>
                  )
                )}
              </div>
              {selectedCard?.long2SecHeading && (
                <article
                  className="flex flex-col-reverse md:flex-row  mt-5 items-start p-8 md:p-16  rounded-2xl gap-12 min-h-[300px] hover:shadow-2xl transition"
                  style={{ background: "white" }}
                >
                  <div className="w-full md:w-1/2  text-left">
                    <h1 className="text-5xl  leading-snug font-bold">
                      {selectedCard?.long2SecHeading}
                    </h1>
                    <p className="mt-10 2xl:mt-10 text-2xl md:text-3xl leading-loose tracking-wide   text-text-grey">
                      {selectedCard?.long2SecDescription}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2  flex justify-center">
                    <Image
                     loader={({ src }) => src}
                      src={selectedCard?.long2SecImage as string}
                      alt="Feature"
                      height={250}
                      width={250}
                      className="mx-auto object-contain h-full w-full max-w-[231px] max-h-[231px] md:max-w-[330px] md:max-h-[330px]"
                    ></Image>
                  </div>
                </article>
              )}
            </div>
          </div>

          <h3
            className="text-6xl  font-bold mb-8 mt-5  "
            style={{ color: selectedCard.textColor }}
          >
            {selectedCard?.subHeading}
          </h3>
          <p
            className=" text-2xl md:text-3xl 2xl:text-4xl text-center max-w-[650px] mx-auto  "
            style={{ color: selectedCard.textColor }}
          >
            {selectedCard?.subPara}
          </p>

          {selectedCard?.secondaryImage && (
            <Image
            loader={({ src }) => src}
              src={selectedCard.secondaryImage}
              alt="secondary Image"
              height={300}
              width={500}
              className="w-full h-full object-contain mt-10 max-h-[315px] md:max-h-[450px] relative"
            />
          )}
        </div>

        <div className="relative   pb-16 ">
          {otherCards.length > 0 && (
            <>
              <div
                className={`shape1_background`}
                style={{
                  background: otherCards[0].linearGradient2,
                }}
              ></div>
              <div
                className={`shape2_background`}
                style={{
                  background: otherCards[1].linearGradient2,
                }}
              ></div>
              <div
                className={`shape3_background`}
                style={{
                  background: otherCards[2].linearGradient2,
                }}
              ></div>
            </>
          )}
          <h3 className="text-6xl font-bold mb-16 mt-32  relative ">
            {t("readMoreDescription")}
          </h3>

          <section className="mb-16 mt-28 custom-container  relative ">
            <div className="flex gap-10 overflow-x-auto  scrollbar-hide cards-container mx-auto px-10 lg:px-28 text-white ">
              {otherCards.map((card: any) => (
                <div
                  key={card.id}
                  className={`hover:border rounded-[30px] p-10 md:p-16 text-left flex flex-col justify-between items-start h-[268px] w-[268px]  min-h-[268px] min-w-[268px]  md:h-[354px] md:w-[372px]  md:min-h-[354px] md:min-w-[372px] cursor-pointer hover:shadow-lg card-hover-effect ease-linear transition-all border border-white border-solid`}
                  style={
                    {
                      "--card-dark-color": card.darkColor,
                      "--card-color": card.color,
                    } as any
                  } // Cast to React.CSSProperties to allow custom CSS properties
                  onClick={() => selectCard(card.id)}
                >
                  <div>
                    <h4
                      className="text-[2rem] md:text-[2.5rem] font-semibold mb-6"
                      style={{ color: card.textColor }}
                    >
                      {card.cardName}
                    </h4>
                    <span
                      className="mt-5 2xl:mt-10 text-2xl "
                      style={{ color: card.textColor }}
                    >
                      {card.cardDescription}
                    </span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <button
                      className="text-3xl font-semibold"
                      style={{ color: card.textColor }}
                    >
                      {card.cta}
                    </button>
                    <FaArrowRight
                      fontSize={"20px"}
                      style={{ color: card.textColor }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
      <Footer footerBg={"#2ae8d3"} selectCard={selectCard} />
    </div>
  );
};

export default Briefs;
