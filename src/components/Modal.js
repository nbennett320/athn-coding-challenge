import React from 'react';
import ModalBase from './ModalBase';
import "./css/Modal.css";

const Modal = (props) => {
  return (
    <>
    {props?.show && <ModalBase>
      <div className="Modal">
        { props.children }
      </div>
    </ModalBase>}
    </>
  );
}

export default Modal;

