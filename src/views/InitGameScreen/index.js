import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../util/theme';
import './css/InitGameScreen.css';

const InitGameScreen = (props) => {
  const [playerCount, setPlayerCount] = React.useState(1);
 
  const handleCountInput = (e) => { 
    const newVal = e.target.value;
    setPlayerCount(e.target.value); 
  }

  const handleNameInput = (e, player, index) => {
    const updatedPlayer = { ...player, name: e.target.value };
    props?.updatePlayer(updatedPlayer, index);
  }

  return (
    <div className="InitGameScreen">
      <div className="InitGameScreen__Container">
        <div className="InitGameScreen__PlayerEntries">
          {props?.players.map((player, i) => {
            return (
              <div className="InitGameScreen__PlayerEntry" key={`player${i}`}>
                <Input
                  id="player-input"
                  label="Player Name"
                  onChange={(e) => handleNameInput(e, player, i)} 
                />
              </div>
            );
          })}
        </div>

        <Button 
          className="InitGameScreen__Button"
          onClick={props?.startGame}
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

