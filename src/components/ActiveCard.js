import React from 'react';
import Card from './Card';
import CardText from './CardText';
import Input from './Input';
import { theme } from '../util/theme';
import './css/ActiveCard.css';

const ActiveCard = (props) => {
  const [flipped, setFlipped] = React.useState(false);
  const [userResponse, setUserResponse] = React.useState();
 
  const validateResponse = () => {
    if(userResponse === undefined) return;
    if(userResponse?.length === 0) return;
    if(userResponse.toLowerCase() === props?.response.toLowerCase()) {
      // handle success
      const updatedPlayer = { 
        ...props?.player,
        wins: props?.player.wins + 1,
        total: props?.player.total + props?.price
      };
      
      const historyLog = {
        cardIndex: props?.cardIndex,
        result: 'win',
        price: props?.price,
        currentTotal: updatedPlayer?.total,
        clue: props?.clue,
        response: props?.response,
        userResponse: userResponse
      };
      
      props?.updatePlayer(updatedPlayer);
      props?.updateHistory(historyLog);
    } else {
      // handle failure 
      const updatedPlayer = { 
        ...props?.player,
        loses: props?.player.loses + 1,
        total: props?.player.total - props?.price
      };
      
      const historyLog = {
        cardIndex: props?.cardIndex,
        result: 'lose',
        price: props?.price,
        currentTotal: updatedPlayer?.total,
        clue: props?.clue,
        response: props?.response,
        userResponse: userResponse
      };

      props?.updatePlayer(updatedPlayer);
      props?.updateHistory(historyLog);
    }


  }

  const toggleFlip = () => {
    if(!flipped && userResponse?.length > 0) {
      setFlipped(!flipped);
      validateResponse();
    } else {
      props?.toggleActive();
    }
  }

  const handleInputResponse = (e) => {
    setUserResponse(e.target.value);
  }

  const handleEnterKeyDown = (e) => {
    if(!flipped) {
      toggleFlip();
      validateResponse();
    } else {
      props?.toggleActive(); 
    }
  }
  
  return (
    <div className="ActiveCard" >
      <div className={`ActiveCard__Container ${flipped ? 'ActiveCard__Transition' : ''}`}>
        <div className="ActiveCard__Front" onClick={toggleFlip}>
          <CardText color={theme.white} >
            { props?.clue }
          </CardText>
        </div>
        <div className="ActiveCard__Back" onClick={toggleFlip}>
          <div className="ActiveCard__BackLabel">
            <CardText color={theme.white} >
              Answer: 
            </CardText>
          </div>  

          <CardText color={theme.white} >
            { props?.response }
          </CardText>
        </div>
      </div>
      <div className="ActiveCard__AnswerArea">
        <div className="ActiveCard__AnswerAreaContainer">
          <div className="ActiveCard__AnswerInputContainer">
            <div className="ActiveCard__AnswerInput">
              Response: 
              <Input 
                placholder="Response" 
                onChange={handleInputResponse}
                onEnterKeyDown={handleEnterKeyDown}
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveCard;

