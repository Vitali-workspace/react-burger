import { useEffect, FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styleModal from "./modal.module.css";

const modalRoot = document.getElementById("modals") as HTMLDivElement;

interface IModal {
  children: ReactNode;
  closePopup: () => void;
}


const Modal: FC<IModal> = ({ children, closePopup }) => {

  useEffect(() => {
    const handleKeyDown = function (evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        closePopup();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay overlayCloseClick={closePopup} />
      <section className={styleModal.container} data-cy="modal">
        <div className={styleModal.popup}>
          <button className={styleModal.buttonClose} type="button" onClick={closePopup} data-cy="modal-close-btn">
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </section>
    </>,

    modalRoot
  );
}


export default Modal;