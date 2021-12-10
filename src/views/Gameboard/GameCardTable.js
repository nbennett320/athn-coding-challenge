import React from 'react';
import GameCard from '../../components/GameCard';
import "./css/GameCardTable.css";

const GameCardTable = (props) => {
  return (
    <div className="GameCardTable">
      {props?.rows.map((row, i) => {
        return (
          <div className="GameCardTable__Column" key={`gamecard${i}`}>
            {props?.cols.map((el, j) => {
              const { clue, response } = row[j];
              return (
                <GameCard 
                  key={`gamecard${j}`}
                  price={el}
                  clue={clue}
                  response={response}
                  player={props?.player}
                  history={props?.history}
                  cardIndex={`(${i}, ${j})`}
                  setCardSelected={props.setCardSelected}
                  updatePlayer={props?.updatePlayer}
                  updateHistory={props?.updateHistory}
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

