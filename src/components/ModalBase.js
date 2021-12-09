import React from 'react';
import ReactDOM from 'react-dom';
import './css/ModalBase.css';

const ModalBase = (props) => {
  // handle when user clicks outside of the modal
  const handleClick = (e) => { 
    if(e?.target?.id == "modal-base") 
      props?.onClick(e);
  }

  // close model when escape key is pressed
  const handleKeyDown = (e) => {
    if(e?.code === "Escape")
      props?.onEscDown(e);
  }

  // get portal root element
  const root = document.getElementById('modal-root');
  const el = document.createElement('div');
  const container = React.useRef(el);

  React.useEffect(() => {
    // append modal component to portal on mount
    // and assign key listeners
    root.appendChild(container.current);
    el.classList.add('ModalBase');
    el.id = "modal-base";
    el.addEventListener('click', handleClick);
    el.addEventListener('keydown', handleKeyDown);
    el.tabIndex = -1;
    el.focus();

    return () => {
      // remove modal component on unmount
      el.removeEventListener('click', handleClick);
      root.removeChild(container.current);
    }
  }, []);
  
  return ReactDOM.createPortal(props.children, container.current);
}

export default ModalBase;

