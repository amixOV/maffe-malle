import React from 'react';
import {
	// BrowserRouter as Router,
	Link,
	// Route,
	// Switch,
	// matchPath,
} from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import LogItem from './LogItem';

let LogInfo = (props) => {
	let numbers = props.resoultArr;
	/* 
	numbers = numbers.toString();
	numbers = numbers.replace(/,/g,'');
	console.log(numbers);
	const numArr = [];
	numArr.push(numbers); 
	
	*/

	let list = numbers.map((numbers, index) => {
		return (
			<ListItem button key={index} component={Link} to={`/log/${index}`}>
				<ListItemText primary={numbers} />
			</ListItem>
		);
	});
	
	return (
		<List component='nav' aria-label='secondary mailbox folders'>
		<h1>LOG INFORMATION</h1>
			{list}
		</List>
	);
};

export default LogInfo;
