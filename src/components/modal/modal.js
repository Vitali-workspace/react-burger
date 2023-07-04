import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styleModal from "./modal.module.css";



function Modal(props) {

  useEffect(() => {
    const handleKeyDown = function (e) {
      if (e.key === 'Escape') {
        props.handleCloseClick();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return createPortal(
    <>
      <ModalOverlay overlayCloseClick={props.handleCloseClick} />
      <section className={styleModal.container}>
        <div className={styleModal.popup}>
          <button className={styleModal.buttonClose} onClick={props.handleCloseClick}>
            <CloseIcon type="primary" />
          </button>
          {props.children}
        </div>
      </section>
    </>,

    props.pointModal
  );
}

Modal.propTypes = {
  handleCloseClick: PropTypes.func,
  pointModal: PropTypes.node,
}

export default Modal;