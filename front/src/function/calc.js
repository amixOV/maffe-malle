
let makeStrToArr = (str) => {
	
	let char;
	let nextChar;
	let numStr = '';
	const arr = []
	for (let i = 0; i < str.length; i++) {			
		char = str.charAt(i);
		nextChar = str.charAt(i+1)
		
		if(char === '+' || char === '-' || char === '/' || char === '*'){
			if(numStr === '' || nextChar + 1 === '-'){ // add minus if first or minus number
				numStr += char;
			}else{
				arr.push(numStr)
				arr.push(char)
				numStr = ''
			}
		}else{
			numStr += char;
			if(i === str.length -1){		
				arr.push(numStr)
			}
		}
	}
	return arr;
}

let calc = ( numStr ) => {
	const reg = /^([-]{0,1}\d*[.]{0,1}\d+)([/*+-]([-]{0,1}\d*[.]{0,1}\d+))*$/gm;// https://regex101.com/r/FNHIib/5
	if (!reg.exec(numStr))
		return console.error(numStr + ' -  is not calculated string');
	
	let numArr = makeStrToArr(numStr)
	let nextIndex;
	let oneBefore;
	let tempNum = false;
	const newNumArr = [];
	const arrLen = numArr.length;
	console.log(arrLen);
	
	
	console.log(numArr);

	numArr.forEach((ele, i) => {
		nextIndex = i + 1;
		// console.log(ele);
		if (i === 0) {	
				tempNum = parseFloat(ele);	
		}

		if (ele === '*') {
			tempNum = tempNum * numArr[nextIndex];
			oneBefore = true;
		}
		if (ele === '/') {
			tempNum = tempNum / numArr[nextIndex];
			oneBefore = true;
		}
		if (ele === '+' || ele === '-') {
			newNumArr.push(tempNum);
			newNumArr.push(ele);
			tempNum = parseFloat(numArr[nextIndex]);
			oneBefore = false;
			
			console.log(newNumArr);
		}
		console.log(nextIndex);
		
		if (arrLen === nextIndex) {
			if (oneBefore) {
				newNumArr.push(tempNum);
				tempNum = false; // clean var for next loop
			} else {
				newNumArr.push(parseFloat(ele));
				tempNum = false; // clean var for next loop
			}
			console.log(newNumArr);
		}
	});
	console.log(newNumArr);
	newNumArr.forEach((ele, i) => {
		nextIndex = i + 1;
		
		if (nextIndex === 1) {
			tempNum = ele;
		} else {
			if (ele === '+') {
				tempNum = tempNum + newNumArr[nextIndex];
			}
			if (ele === '-') {
				tempNum = tempNum - newNumArr[nextIndex];
			}
		}
	});
	tempNum = tempNum.toFixed(12)
	tempNum = parseFloat(tempNum)
	tempNum = tempNum.toString()
	return tempNum
};

export default calc;
