import React from 'react';
import './css/InitGameScreen.css';

const InitGameScreen = (props) => {
  const [playerCount, setPlayerCount] = React.useState(1);
  
  const handleNameInput = (e, player, index) => {
    const updatedPlayer = { ...player, name: e.target.value };
    console.log(updatedPlayer);
    props?.updatePlayer(updatedPlayer, index);
  }

  return (
    <div className="InitGameScreen">
      <div className="InitGameScreen__Container">
        <div>
          <input type="number" value={playerCount} />
        </div>

        {props?.players.map((player, i) => {
          <div className="InitGameScreen__PlayerEntry" key={`player${i}`}>
            <input type="text" onChange={(e) => handleNameInput(e, player, i)} />
          </div>
        })}

        <button onClick={props?.startGame}>
          Play game
        </button>
      </div>
    </div>
  );
}

export default InitGameScreen;

