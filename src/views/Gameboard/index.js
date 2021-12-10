import React from 'react';
import Card from '../../components/Card';
import GameCardTable from './GameCardTable';
import TitleRow from './TitleRow.js';
import PlayerArea from './PlayerArea';
import Data from '../../assets/Data.json';
import './css/Gameboard.css';

const Gameboard = (props) => {
  const [data, setGameData] = React.useState(Data);
  const [categories, setCategories] = React.useState([]);
  const [pairs, setPairs] = React.useState([]);
  const [prices, setPrices] = React.useState([]);
  const [cardSelected, setCardSelected] = React.useState(false);
  
  React.useEffect(() => {
    // fetch data
    console.log(data)
    if(categories.length < 1) {
      const newCategories = data.categories.map(el => el.category);
      setCategories(newCategories);
      const newPrices = data.prices;
      setPrices(newPrices);
      const newCardPairs = data.categories.map((el, i) => el.cr_pairs);
      setPairs(newCardPairs);
      
      
    }
    
    console.log(categories)
    console.log(pairs)
    console.log(prices)
    console.log(cardSelected)
  }, [cardSelected]);

  return (
    <div className="Gameboard">
      <div className={`Gameboard__Container ${cardSelected ? 'blur' : ''}`}>
        <TitleRow titles={categories} />
        <GameCardTable 
          rows={pairs} 
          cols={prices} 
          categories={categories}
          setCardSelected={setCardSelected}
        />
        <PlayerArea players={props?.players} />
      </div>
    </div>
  );
}

export default Gameboard;

