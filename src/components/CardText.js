import React from 'react';
import './css/CardText.css';

const CardText = (props) => {
  const styles = { color: props?.color };

  return (
    <div 
      style={styles}
      className={`CardText ${props?.className}`}
    >
      { props.children }
    </div>
  );
}

export default CardText;

