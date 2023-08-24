import PropTypes from 'prop-types';
import styleOverlay from "./modal-overlay.module.css";

function ModalOverlay(props) {

  return (
    <section
      className={styleOverlay.overlay}
      onClick={props.overlayCloseClick}>
    </section>
  );
}

ModalOverlay.propTypes = { overlayCloseClick: PropTypes.func }

export default ModalOverlay;