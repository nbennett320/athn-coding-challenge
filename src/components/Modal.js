import React from 'react';
import ReactDOM from 'react-dom';
import './css/Modal.css';

const Modal = (props) => {
  const root = document.getElementById('modal-root');
  const el = document.createElement('div');
  el.classList.add('Modal')

  const [container] = React.useState(el);

  React.useEffect(() => {
    root.appendChild(container);

    return () => {
      root.removeChild(container);
    }
  }, []);
  
  return ReactDOM.createPortal(props.children, el);
}

export default Modal;

