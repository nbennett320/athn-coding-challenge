import React from 'react';
import Card from './Card';
import Modal from './Modal';
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
      
     {!active || <Modal>
        <div style={{ width: "200px", height: "100px", backgroundColor: "red", position:'fixed', top: 0, left: 0, margin: 'auto' }}>
          Hello world
        </div> 
      </Modal>}

    </div>
  );
}

export default GameCard;

