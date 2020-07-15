import React from 'react';

let ToDad = (props) => {
	// console.log(props.onChange);
	/* 	
	let changeTextForDad = (e) => {
		props.onChieldChange(e);
		//console.log(props.onChieldChange);
		//      ||
		//      \/
		// e => {
		//     setTextFromChield(e.target.value);
		//     console.log(textFromChield);
		//   }
	};
 */

	let changeTextForDad = props.onChieldChange;
;
	return (
		<>
			<input onChange={changeTextForDad} type='text' />
		</>
	);
};

export default ToDad;
