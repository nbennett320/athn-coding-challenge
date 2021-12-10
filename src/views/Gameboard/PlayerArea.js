import React from 'react';
import CardText from '../../components/CardText';
import { theme } from '../../util/theme';
import './css/PlayerArea.css';

const PlayerArea = (props) => {
  return (
    <div className="PlayerArea">
      <div className="PlayerArea__Player">
        <CardText color={theme.white}>
          { props?.player?.name }
        </CardText>
        <CardText color={theme.gold}>
          ${ props?.player?.total }
        </CardText>
      </div>
    </div>
  );
}

export default PlayerArea;

