import { FC } from "react";
import styleOverlay from "./modal-overlay.module.css";

const ModalOverlay: FC<{ overlayCloseClick: () => void }> = (props) => {

  return (
    <section
      className={styleOverlay.overlay}
      onClick={props.overlayCloseClick}>
    </section>
  );
}

export default ModalOverlay;