import React from 'react';
import Card from './Card';
import Modal from './Modal';
import ActiveCard from './ActiveCard';
import './css/GameCard.css';

const GameCard = (props) => {
  const [active, setActive] = React.useState(false);
  const [flipped, setFlipped] = React.useState(false);

  React.useEffect(() => {
    props.setCardSelected(active);
  }, [active]);

  const toggleActiveCard = () => {
    console.log("card clicked!")
    setActive(!active);
  }

  return (
    <div className="GameCard">
      {!active && <div onClick={toggleActiveCard} className="GameCard__Container">
        <Card 
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
      </div>}
      
      <Modal show={active}>
        <ActiveCard {...props} />
      </Modal>

    </div>
  );
}

export default GameCard;

