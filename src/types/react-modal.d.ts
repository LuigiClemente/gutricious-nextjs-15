declare module 'react-modal' {
  import * as React from 'react';

  interface ReactModalProps {
    isOpen: boolean;
    onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
    contentLabel?: string;
    className?: string | {
      base: string;
      afterOpen?: string;
      beforeClose?: string;
    };
    overlayClassName?: string | {
      base: string;
      afterOpen?: string;
      beforeClose?: string;
    };
    appElement?: HTMLElement | string | null;
    [key: string]: any;
  }

  class Modal extends React.Component<ReactModalProps> {
    static setAppElement(element: string | HTMLElement): void;
  }
  
  export default Modal;
}
