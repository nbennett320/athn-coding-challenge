import React from 'react';
import Card from '../../components/Card';
import GameCardTable from './GameCardTable';
import TitleRow from './TitleRow.js';
import Data from '../../assets/Data.json';
import './css/Gameboard.css';

const Gameboard = () => {
  const [data, setGameData] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const [pairs, setPairs] = React.useState([]);
  const [prices, setPrices] = React.useState([]);
  const [cardSelected, setCardSelected] = React.useState(false);
  
  React.useEffect(() => {
    // fetch data
    const newCategories = Data.categories.map(el => el.category);
    setCategories(newCategories);
    
    const newPrices = Data.prices;
    setPrices(newPrices);
    
    const newCardPairs = Data.categories.map((el, i) => { if(i < prices.length) return el.cr_pairs; else return });
    setPairs(newCardPairs);
    console.log(categories)
    console.log(pairs)
    console.log(prices)
    console.log(cardSelected)
  }, [data, cardSelected]);

  return (
    <div className="Gameboard">
      <div className={`Gameboard__Container ${cardSelected ? 'blur' : ''}`}>
        <TitleRow titles={categories} />
        <GameCardTable 
          rows={pairs} 
          cols={prices} 
          setCardSelected={setCardSelected}
        />
      </div>
    </div>
  );
}

export default Gameboard;

