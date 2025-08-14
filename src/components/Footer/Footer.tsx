"use client";
import React, { useState, useEffect } from 'react';
import { useTranslations } from "@/components/SimpleTranslationProvider";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SuccessFormModal from '../SuccessFormModal/SuccessFormModal';
import { useModal } from 'react-simple-modal-provider';
import { IMAGE_URL } from '@/utils/image_url';
import axios from 'axios';

const Footer: React.FC<{ footerBg: string, selectCard: any }> = ({ selectCard }) => {
  const t = useTranslations("Index");
  const [isButtonHovered, setButtonHovered] = React.useState(false);
  const { locale } = useParams();
  const [successModal, setSuccessModal] = useState(false);
  const { open: openEmailThanksModal } = useModal("EmailFormThanksModal");



  const schema = z.object({
    email: z.string().email({ message: t('errored_message') }),
    locale: z.string().optional(),
    formId: z.string().default("4"),
    return: z.string().default(""),
    formName: z.string().default("newcontactform"),
    l: z.string().default("4fbb8406-1413-43da-b0a0-875a71695c63"),
    nonce: z.string().default(""),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors, isSubmitted, isSubmitting, isSubmitSuccessful }, reset, control } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {

    // const username = 'pdelaen@gmail.com';
    // const password = '1EE2C5E57B79F6C3914116545FDC9a';
    // const auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');

    const formData = new FormData();
    formData.append('mauticform[email]', data.email);
    formData.append('mauticform[locale]', data.locale || '');
    formData.append('mauticform[formId]', data.formId);
    formData.append('mauticform[return]', data.return);
    formData.append('mauticform[formName]', data.formName);

    try {
      const res = await axios.post("https://mautic.gutricious.com/form/submit?formId=1", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': auth,
        },

      })
      console.log(res)

    } catch (error) {
      console.error("Error:", error);
    } finally {
      reset();
      document.querySelector('#main-page')?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        openEmailThanksModal({});
      }, 1200)
    }
  };

  return (
    <footer
      id="footer"
      className="w-screen h-screen relative overflow-hidden bg-no-repeat bg-cover flex flex-col justify-end"
    >
      {/* <div className='footer-bg-colored md:hidden'>
      </div> */}
      {/* <SuccessFormModal modalIsOpen={successModal} setModalIsOpen={setSuccessModal}/> */}
      <div className="max-w-[700px] w-full mt-72 px-6 flex flex-col justify-center mx-auto relative">
        <h1 className="font-bold text-[#05403a] text-5xl md:text-7xl text-center mb-10">
          {t("footer_heading")}
        </h1>
        <span className="text-3xl text-[#05403a]">
          {t("footer_description")}
        </span>
        <div className="min-h-[120px] bg-[#2ae8d3]">
          <form
            className="mx-auto mt-10 flex max-w-1xl gap-x-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("email")}
              type="text"
              className={twMerge(`placeholder-[#453f0a] min-w-0 flex-auto rounded-xl px-3.5 py-3 text-[#453f0a] shadow-sm ring-white/10 ring-2 ring-inset text-[17px] md:text-[20px] sm:leading-6 bg-[#f8e433] ${isButtonHovered ? "buttonHovered" : ""}`)}
              placeholder={t("email_placeholder")}
              autoComplete="off"
            />

            <input type="hidden" {...register("locale")} value={locale} />
            <input type="hidden" {...register("formId")} value={1} />
            <input type="hidden" {...register("return")} value={""} />
            <input type="hidden" {...register("formName")} value="newcontactform" />

            <button
              type="submit"
              onMouseEnter={() => setButtonHovered(true)}
              onMouseLeave={() => setButtonHovered(false)}
              className="btn-primary secondary"
            >
              {t("button_text")}
            </button>
          </form>
          {errors.email && (
            <div className="mx-auto max-w-1xl mt-4">
              <div className="alert alert-warning" role="alert">
                <i className="fas fa-exclamation-triangle"></i>
                <span className="message-text">{errors.email.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="custom-container !w-screen !max-w-[700px] bg-[#2ae8d3] mt-14">
        {/* Empty div to maintain spacing */}
      </div>
      
      {/* White section with disclaimer, logo, and year */}
      <div className="w-full bg-white py-6 px-6 text-center border-t border-gray-200">
        <div className="mb-6">
          <div className="footer-heading text-black mb-2">{t("footer_notice_heading")}</div>
          <div className="footer-text text-black mb-6">
            {t("footer_notice_text")}
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            alt="logo"
            loader={({ src }) => src}
            height={34}
            width={110}
            style={{ objectFit: 'contain' }}
            className="h-[34px] w-auto object-contain cursor-pointer"
            src={`${IMAGE_URL}/assets/day/logo.webp`}
            onClick={() => selectCard(1, true)}
          />
          <p className="text-3xl text-black">&copy;2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
