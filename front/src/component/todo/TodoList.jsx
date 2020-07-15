import React from 'react';

const TodoList = () => {
	let listArr = ['aaaa', 'dddd', 'gggg', 'yyyyy', 'lllll'];
	function nnnn() {
		
	}
	nnnn('aaa')
	nnnn('bbbbb')
	nnnn('ffffff')
	nnnn(4444)
	nnnn(listArr[1])
	return (
		<div>
			<ul>
                {listArr.map( (listItem, i) => {
                    return <li key={i}>{listItem}</li>
                }) }
			</ul>
		</div>
	);
};

export default TodoList;
