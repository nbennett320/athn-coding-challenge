import React from 'react';
import Card from '../../components/Card';
import './css/TitleRow.css';

const TitleRow = (props) => {
  return (
    <div className="TitleRow">
      {props?.titles?.map((el, i) => (
        <div className="TitleRow__CardContainer">
          <Card key={`headers${i}`} color="darkblue" textColor="white">
            {el}
          </Card>
        </div>
      ))}
    </div>
  );
}

export default TitleRow;
