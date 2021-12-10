import React from 'react';
import Card from './Card';
import Modal from './Modal';
import ActiveCard from './ActiveCard';
import { theme } from '../util/theme';
import './css/GameCard.css';

const GameCard = (props) => {
  const [active, setActive] = React.useState(false);
  const [hasBeenShown, setHasBeenShown] = React.useState(false);

  React.useEffect(() => {
    props.setCardSelected(active);
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  }

  React.useEffect(() => {
    const cardIndecies = props?.history.map(el => el.cardIndex);
    setHasBeenShown(cardIndecies.includes(props?.cardIndex));
  })

  return (
    <div className="GameCard">
      <div onClick={toggleActive} className={`GameCard__Container ${(active || hasBeenShown) ? 'phantom' : ''}`}>
        <Card color={theme.darkblue} textColor={theme.gold}>
          ${ props.price }
        </Card>
      </div>
      
      <Modal show={active} onClose={toggleActive}>
        <ActiveCard {...props} />
      </Modal>

    </div>
  );
}

export default GameCard;

