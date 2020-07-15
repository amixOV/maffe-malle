import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function TryHeader() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/Calculate'>Calc</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route path={'./Calculate'} />
				<Route path={false} />
			</Switch>
		</Router>
	);
}

function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

export default TryHeader;
