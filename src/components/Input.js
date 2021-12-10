import React from 'react';
import { theme } from '../util/theme';
import './css/Input.css';

const Input = (props) => {
  const inputStyles = { ...props?.styles, backgroundColor: props?.color ? props.color : theme.white };
  
  const handleKeyDown = (e) => {
    try {
      if(e.code === "Enter")
        props?.onEnterKeyDown(e);
    } catch(err) {
      return;
    }
  }

  return (
    <div 
      style={inputStyles} 
      className={`Input ${props?.className}`}
    >
      <span className="Input__Label">
        {props?.label}
      </span>
      <input 
        type="text"
        className="Input__Input"
        id={props?.id}
        onChange={e => props?.onChange(e)}
        onKeyDown={handleKeyDown}
        placeholder={props?.placeholder}
      />
    </div>
  );
}

export default Input;

