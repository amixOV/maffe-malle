import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './NavBar';
import NavRoute from './NavRoute';

function Header() {
	return (
		<Router>
			<NavBar />
			<NavRoute />
		</Router>
	);
}

export default Header;
