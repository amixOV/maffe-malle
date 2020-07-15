import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        
	},
}));

function NavBar() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
				>
					<Tab label='Home' component={Link} to='/' />
					<Tab label='Calculate' component={Link} to='/calc' />
					<Tab label='Count' component={Link} to='/Count' />
					<Tab label='Log' component={Link} to='/Log' />
				</Tabs>
			</AppBar>

		</div>
	);
}

export default NavBar;
