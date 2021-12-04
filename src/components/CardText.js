import React from 'react';
import './css/CardText.css';

const CardText = (props) => {
  const styles = { color: props.color }
  return (
    <div className="CardText" style={styles}>
      { props.children }
    </div>
  );
}

export default CardText;

