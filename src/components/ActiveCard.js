import React from 'react';
import Card from './Card';
import './css/ActiveCard.css';

const ActiveCard = (props) => {
  const [flipped, setFlipped] = React.useState(false);
  console.log(props)

  const toggleFlip = () => {
    setFlipped(!flipped);
  }

  return (
    <div className="ActiveCard" onClick={toggleFlip}>
      <div className={`ActiveCard__Container ${flipped ? 'ActiveCard__Transition' : ''}`}>
        <div className="ActiveCard__Front">
          { props?.clue }
        </div>
        <div className="ActiveCard__Back">
          { props?.response }
        </div>
      </div>
    </div>
  );
}

export default ActiveCard;

