import React, { useState } from 'react';
import useInterval from '../function/useInterval'
let CountDown = (props) => {
    let [number, setNumber] = useState(props.number);
        
        let changeNum = () => {
            if (number !== 0) {
                setNumber(number - 1);
            }
        };
            useInterval(changeNum,400)


    
	return (
		<div>
			<button onClick={changeNum}>-1</button>
			<div>{number}</div>
		</div>
	);
};
export default CountDown;
