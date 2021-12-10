import React from 'react';
import { theme } from '../util/theme';
import './css/Button.css';

const Button = (props) => {
  const buttonStyles = { ...props?.styles, backgroundColor: props?.color ? props.color : theme.blue };
  const textStyles = { color: props?.textColor ? props.textColor : theme.white };

  return (
    <div 
      style={buttonStyles} 
      className={`Button ${props?.className}`}
      onClick={e => props?.onClick(e)}
    >
      <span style={textStyles}>
        { props?.children }
      </span>
    </div>
  );
}

export default Button;

