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

  const updateHistory = (item) => {
    setHistory([...history, item]);
  }

  return (
    <div className="App">
      {!playing 
        ? <InitGameScreen 
          player={player} 
          updatePlayer={updatePlayer} 
          startGame={() => setPlaying(true)}
        />
        : <Gameboard 
          player={player} 
          history={history}
          updatePlayer={updatePlayer} 
          updateHistory={updateHistory}
        />
      }
      <div id="modal-root"></div>
    </div>
  );
}

export default App;

