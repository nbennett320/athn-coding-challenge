import React from 'react';
import CardText from './CardText';
import './css/Card.css';

const Card = (props) => {
  const styles = { backgroundColor: props.color }
  return (
    <div className="Card" style={styles}>
      <CardText color={props.textColor}>
        { props.children }
      </CardText>
    </div>
  );
}

export default Card;

