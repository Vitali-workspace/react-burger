import { createPortal } from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styleModal from "./modal.module.css"


function Modal(props) {

  function mods() {

    props.handleCloseClick();
  }

  return createPortal(
    <section className={styleModal.container}>
      <div className={styleModal.popup}>
        <button className={styleModal.buttonClose} onClick={props.handleCloseClick}>
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
    </section>,

    props.pointModal
  );
}

export default Modal;