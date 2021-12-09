import React from 'react';
import Card from '../../components/Card';
import { theme } from '../../util/theme';
import './css/TitleRow.css';

const TitleRow = (props) => {
  const [height, setHeight] = React.useState();
  const [styles, setStyles] = React.useState();
  const ref = React.useRef(null);

  React.useEffect(() => {
    setHeight(ref?.current?.clientHeight);
    setStyles({ height: (height > 0) ? height : 'auto' })
    console.log(height, styles, ref)
  }, [ref, height])
  
  return (
    <div ref={ref} className="TitleRow">
      {props?.titles?.map((el, i) => (
        <div key={`title${i}`} style={styles} className="TitleRow__CardContainer">
          <Card color={theme.darkblue} textColor={theme.white}>
            {el}
          </Card>
        </div>
      ))}
    </div>
  );
}

export default TitleRow;

