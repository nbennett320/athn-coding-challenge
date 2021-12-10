import React from 'react';
import Gameboard from './views/Gameboard';
import InitGameScreen from './views/InitGameScreen';
import './css/App.css';

const App = () => {
  const [history, setHistory] = React.useState([
    { 
      name: "", 
      total: 0, 
      wins: 0, 
      loses: 0,
    }]);
  const [players, setPlayers] = React.useState([]);
  const [playing, setPlaying] = React.useState(false);

  const updatePlayer = (player, index) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = player;
    setPlayers(updatedPlayers);
  }

  return (
    <div className="App">
      {!playing 
        ? <InitGameScreen 
          players={players} 
          updatePlayer={updatePlayer} 
          startGame={() => setPlaying(true)}
        />
        : <Gameboard players={players} />
      }
      <div id="modal-root"></div>
    </div>
  );
}

export default App;

