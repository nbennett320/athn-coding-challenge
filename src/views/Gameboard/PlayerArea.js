import React from 'react';

const PlayerArea = (props) => {
  return (
    <div className="PlayerArea">
      {props?.players.map((player, i) => {
        <div className="PlayerArea__Player">
          <span>
            { player?.name }
          </span>
          <span>
            ${ player?.total }
          </span>
        </div>
      })}
    </div>
  );
}

export default PlayerArea;

