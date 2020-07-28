import React from 'react';

function LogItem({match}) {

	console.log(match);
	return (
		<div>
			<h1>hello to log item</h1>
			<h3>the id is { match.params.id }</h3>
		</div>
	);
}

export default LogItem;
