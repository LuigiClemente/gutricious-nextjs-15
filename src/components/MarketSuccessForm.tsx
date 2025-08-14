
import { useTranslations } from "@/components/SimpleTranslationProvider";
import { RxCross1 } from "react-icons/rx";
import Modal, { useModalState } from "react-simple-modal-provider";

export default ({ children }:any) => {
  const [isOpen, setOpen] = useModalState();
  const onCloseHandler = () => setOpen(false); 
  const t = useTranslations('Index');

  return (
    <Modal
      id={"MarketSuccessForm"}
      consumer={children}
      isOpen={isOpen}
      setOpen={setOpen}
      
    >
    <div className="bg-white max-w-[600px] p-10 relative modal-scroll-block">
    <div className="absolute top-6 right-6 text-3xl font-bold cursor-pointer" onClick={onCloseHandler}>
<RxCross1 />
</div>

        <div className="flex flex-col text left text-2xl gap-4 md:p-5">

           <p className="font-bold">
            {t("thanks_you_text_other_site")}
           </p>
           <p>
            {t("last_text_other_site")}
           </p>
           
        </div>
    </div>
    </Modal>
  );
};