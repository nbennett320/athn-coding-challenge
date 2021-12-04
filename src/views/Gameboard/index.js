import React from 'react';
import Card from '../../components/Card';
import Data from '../../assets/Data.json';
import './css/Gameboard.css';

const Gameboard = () => {
  const [data, setGameData] = React.useState();
  const [categories, setCategories] = React.useState();
  const [pairs, setPairs] = React.useState();

  React.useEffect(() => {
    // fetch data
    const newCategories = Data.categories.map(el => el["category"]);
    const newCardPairs = Data.categories["cr_pairs"];
    setCategories(newCategories);
    setPairs(newCardPairs);
    console.log(Data);
    console.log(categories);
    console.log(pairs);

  }, [data]);

  return (
    <div className="Gameboard">
      <div className="row">
        {categories.map(el => {
          return (
            <Card key={el} color="blue" textColor="yellow">
              {el}
            </Card>
          );
        })} 
      </div>
    </div>
  );
}

export default Gameboard;

