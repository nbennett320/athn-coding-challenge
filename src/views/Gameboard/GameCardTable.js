import React from 'react';
import GameCard from '../../components/GameCard';
import "./css/GameCardTable.css";

const GameCardTable = (props) => {
  console.log(props)
  return (
    <div className="GameCardTable">
      {props?.rows.map((col, i) => {
        return (
          <div className="GameCardTable__Column" key={`gamecard${i}`}>
            {props.cols.map((el, j) => {
              const { clue, response } = el;
              return (
                <GameCard 
                  key={`gamecard${j}`}
                  price={el}
                  clue={clue}
                  response={response}
                  setCardSelected={props.setCardSelected}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GameCardTable;

