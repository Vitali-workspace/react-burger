import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ModalOverlay from "../modal-overlay/modal-overlay";
import styleModal from "./modal.module.css";


function Modal({ children, closePopup }) {

  const modalRoot = document.getElementById('root');

  useEffect(() => {
    const handleKeyDown = function (e) {
      if (e.key === 'Escape') {
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
      <section className={styleModal.container}>
        <div className={styleModal.popup}>
          <button className={styleModal.buttonClose} type="button" onClick={closePopup}>
            <CloseIcon type="primary" />
          </button>
          {children}
        </div>
      </section>
    </>,

    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  closePopup: PropTypes.func,
};

export default Modal;