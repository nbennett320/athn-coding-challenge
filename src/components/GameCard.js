import React from 'react';
import Card from './Card';
import "./css/GameCard.css";

const GameCard = (props) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div className="GameCard">
      <div className="GameCard__Container">
        <Card 
          onClick={() => setFlipped(true)} 
          className="GameCard__Front" 
          color="darkblue"
          textColor="gold"
        >
          ${ props.price }
        </Card>
        
       {/*<Card
          onClick={() => setFlipped(false)}
          className="GameCard__Back" 
          color="darkblue" 
          textColor="white"
        >
          { props.response }  
        </Card>*/}
      </div>
    </div>
  );
}

export default GameCard;

