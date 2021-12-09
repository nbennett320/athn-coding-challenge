import React from 'react';
import ModalBase from './ModalBase';
import "./css/Modal.css";

const Modal = (props) => {
 
  // call onClose when user clicks outside of modal
  const handleClick = (e) => {
    console.log("clicked")
    if(props?.show)
      props?.onClose(e);
  }

  // close model when escape key is pressed
  const handleEscDown = (e) => {
    if(props?.show)
      props?.onClose(e);
  }

  return (
    <>
      {props?.show && <ModalBase onClick={handleClick} onEscDown={handleEscDown}>
        <div className="Modal">
          { props.children }
        </div>
      </ModalBase>}
    </>
  );
}

export default Modal;

