import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Switch from "../Switch/switch";
import { useTranslations } from "@/components/SimpleTranslationProvider";
import Cookies from "js-cookie";
import { RxCross1 } from "react-icons/rx";
import classNames from "classnames";
// Make sure to set the app element for accessibility reasons
Modal.setAppElement("body");

const SuccessFormModal = ({ modalIsOpen , setModalIsOpen} : any) => {
  const t = useTranslations('Index');

 

 

  const closeModal = () => {

    setModalIsOpen(false);
  };



  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
      className={classNames("SuccessModal CookieModal relative" , modalIsOpen ? 'opacity-1 select-all' : 'opacity-0 select-none') }
      overlayClassName={classNames("CookieOverlay" , modalIsOpen ? 'opacity-1 select-all' : 'opacity-0 select-none')}

    > 
<div className="absolute top-6 right-6 text-3xl font-bold cursor-pointer" onClick={closeModal}>
<RxCross1 />
</div>

        <div className="flex flex-col text left text-2xl gap-4 md:p-5">

           <p className="font-bold">
            {t("thanks_you_text_modal_footer")}
           </p>
           <p>
            {t("Main_text_modal_footer")}
           </p>
           <p className="mt-4">
            {t("last_text_modal_footer")}
           </p>
        </div>
    </Modal>
  );
};

export default SuccessFormModal;
