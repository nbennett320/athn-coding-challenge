import React from 'react';
import Gameboard from './views/Gameboard';
import InitGameScreen from './views/InitGameScreen';
import './css/App.css';

const App = () => {
  const [history, setHistory] = React.useState([]);
  const [player, setPlayer] = React.useState({ 
    name: "", 
    total: 0, 
    wins: 0, 
    loses: 0,
  });
  const [playing, setPlaying] = React.useState(false);

  const updatePlayer = (updated) => {
    setPlayer(updated);
  }

  return (
    <div className="App">
      {!playing 
        ? <InitGameScreen 
          player={player} 
          updatePlayer={updatePlayer} 
          startGame={() => setPlaying(true)}
        />
        : <Gameboard player={player} />
      }
      <div id="modal-root"></div>
    </div>
  );
}

export default App;

