import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../util/theme';
import './css/InitGameScreen.css';

const InitGameScreen = (props) => {
  const handleNameInput = (e) => {
    const updatedPlayer = { ...props?.player, name: e.target.value };
    props?.updatePlayer(updatedPlayer);
  }

  const handleClick = () => {
    if(props?.player?.name?.length > 0)
      props?.startGame();
  }

  const handleEnterKeyDown = () => {
    if(props?.player?.name?.length > 0)
      props?.startGame();
  }

  return (
    <div className="InitGameScreen">
      <div className="InitGameScreen__Container">
        <div className="InitGameScreen__PlayerEntries">
          <div className="InitGameScreen__PlayerEntry">
            <Input
              id="player-input"
              label="Player Name"
              onChange={handleNameInput} 
              onEnterKeyDown={handleEnterKeyDown}
            />
          </div>
        </div>

        <Button 
          className="InitGameScreen__Button"
          onClick={handleClick}
          color={theme.white}
          textColor={theme.black}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default InitGameScreen;

