import Gameboard from './views/Gameboard';
import './css/App.css';

const App = () => {
  return (
    <div className="App">
      <Gameboard />
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
