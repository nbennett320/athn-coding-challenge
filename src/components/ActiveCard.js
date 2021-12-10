import React from 'react';
import Card from './Card';
import CardText from './CardText';
import Input from './Input';
import { theme } from '../util/theme';
import './css/ActiveCard.css';

const ActiveCard = (props) => {
  const [flipped, setFlipped] = React.useState(false);
  const [userResponse, setUserResponse] = React.useState();
  
  const toggleFlip = () => {
    setFlipped(!flipped);
  }

  const handleInputResponse = (e) => {
    setUserResponse(e.target.value);
  }

  const handleEnterKeyDown = (e) => {
    if(userResponse === props?.response) {
      // handle success
      
    } else {
      // handle failure 
       
    }
    toggleFlip();
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

