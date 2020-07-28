import React, {useState, useEffect} from 'react';

function NewComp() {
    const [renderNum, setRenderNum] = useState(0);
    const [renderNum2, setRenderNum2] = useState(0);
    let [my, setMy] = useState(10);
	let render = () => {
        setRenderNum(prvRenderNum => prvRenderNum +1)
        document.title = `You clicked ${renderNum} times`;
        setMy(preMy => preMy +1)
    };
    let render2 = () => {
        setRenderNum2(prvRenderNum => prvRenderNum +1)
        setRenderNum(prvRenderNum => prvRenderNum +2)
    };

    useEffect(() => {
       //setRenderNum(prvRenderNum => prvRenderNum +1)
       console.log(renderNum);

    }, [renderNum, renderNum2])
    useEffect(() => {
        console.log('effect run first time')

    }, [])
	return (
		<>
			<button onClick={render}>render</button>
			<button onClick={render2}>render</button>
			<div>{renderNum}</div>
			<div>{renderNum2}</div>
		</>
	);
}

export default NewComp;
