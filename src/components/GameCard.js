import React from 'react';
import Card from './Card';
import Modal from './Modal';
import ActiveCard from './ActiveCard';
import { theme } from '../util/theme';
import './css/GameCard.css';

const GameCard = (props) => {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    props.setCardSelected(active);
  }, [active]);

  const toggleActive = () => {
    setActive(!active);
  }

  return (
    <div className="GameCard">
      <div onClick={toggleActive} className={`GameCard__Container ${active ? 'phantom' : ''}`}>
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

