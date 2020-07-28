import React, { useState }from 'react';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));
const Input = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleToggle = () => {
		setOpen(!open);
	};
	return (
		<div>
			<h1>aaaa a</h1>
       
			<Button variant='outlined' color='primary' onClick={handleToggle}>
				Show backdrop
			</Button>
			<Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	);
};

export default Input;
