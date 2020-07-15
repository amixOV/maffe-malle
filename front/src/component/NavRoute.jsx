import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Calculate from './Calculate';
import CountDown from './CountDown';
import LogInfo from './LogInfo';
import LogItem from './LogItem';
import Home from './Home';

function NavRoute() {
	let [calcArr, setCalcArr] = useState([]);
	// console.log(calcArr);

	let changeCalcHandler = (arr) => {
		setCalcArr((prev) => [...prev, arr]);
	};

	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/calc'>
				<h1>calculate</h1>
				<Calculate onCalcChange={changeCalcHandler} />
			</Route>
			<Route path='/count'>
				<CountDown number={100} />
			</Route>
			<Route exact path='/log'>
				<LogInfo resoultArr={calcArr} />
			</Route>
			<Route path='/log/:id' component={LogItem} />
		</Switch>
	);
}

export default NavRoute;
