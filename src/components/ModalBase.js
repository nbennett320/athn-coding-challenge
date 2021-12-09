import React from 'react';
import ReactDOM from 'react-dom';
import './css/ModalBase.css';

const ModalBase = (props) => {
  const root = document.getElementById('modal-root');
  const el = document.createElement('div');

  const [container] = React.useState(el);

  React.useEffect(() => {
    root.appendChild(container);
    el.classList.add('ModalBase')

    return () => {
      root.removeChild(container);
    }
  }, []);
  
  return ReactDOM.createPortal(props.children, container);
}

export default ModalBase;

