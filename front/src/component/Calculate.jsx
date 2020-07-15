import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import calc from '../function/calc';
import './../style/Calculate.css';

let Calculate = (props) => {
	let onCalcChange = props.onCalcChange;
	let [text, setText] = useState('');
	let equel;

	const handleKeyDown = (e) => {
		let num = e.key;
		calcInput(num);
	};
	
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
	let calcInput = (input) => {
		let last;
		let towLast;
		let sign = '+' || '-' || '*' || '/';
		if(sign === '-'){
			console.log('sfsfsdfsdf');
			
		}
		if(text){
			towLast = text.slice(-2,-1)
			last = text.slice(-1);
			console.log(last);
		}
		
		 const reg = /^\d$|^[+*/=.-]$|^Enter$|^Backspace$|^C$|^CE$/gm;
		if (!reg.exec(input))
			return console.error(input + ' -  is not a digit or math sign');

		if (input === '=' || input === 'Enter') {
			if(last === '+' || last === '-' || last === '*' || last === '/'){
				text = text.slice(0, -1);
				setText(text);
			}
			console.log('string from calculata : ' + text);
			
			equel = calc(text)				
			setText(equel)
			// handaleLog(numArr, equel);
			return
		}

		if (input === '+' || input === '*' || input === '/' ) {

			if(!last) return;

			if(last === '+' || last === '*' || last === '/' || last === '-'){
				text = text.slice(0, -1);
				setText(text);
			}

			setText(prevText => prevText + input);
			return		
		}
		
		if(input === '-'){
			if((last === '-' || last === '+' || last === '*' || last === '/')){
				if((towLast === '-' || towLast === '+' || towLast === '*' || towLast === '/')){
					text = text.slice(0, -1);
					setText(text);
					return
					
				}
				
			}
			setText(prevText => prevText + input);
			return		
		}
		
		if (input === 'Backspace' || input === 'C') {
			text = text.slice(0, -1);
			setText(text);
			return
		}
		if (input === 'CE') {
			text = ''
			setText(text);
			return
		}


		setText(prevText => prevText + input);
	};

	let handaleLog = (arr, equel) => {
		let numbers = arr.toString();
		numbers = numbers.replace(/,/g, '');
		onCalcChange(arr);
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			maxWidth: 345,
			'& > *': {
				margin: theme.spacing(2),
			},
		},
	}));

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant='h2' component='h2'>
						{text}
					</Typography>
				</CardContent>
				<CardActions>
					<ButtonGroup
						size='large'
						variant='outlined'
						onClick={(e) => calcInput(e.target.innerText)}
					>
						<ButtonGroup
							orientation='vertical'
							variant='contained'
							color='primary'
						>
							<Button>1</Button>
							<Button>4</Button>
							<Button>7</Button>
							<Button>=</Button>
						</ButtonGroup>
						<ButtonGroup
							orientation='vertical'
							variant='contained'
							color='primary'
						>
							<Button>2</Button>
							<Button>5</Button>
							<Button>8</Button>
							<Button>0</Button>
						</ButtonGroup>
						<ButtonGroup
							orientation='vertical'
							variant='contained'
							color='primary'
						>
							<Button>3</Button>
							<Button>6</Button>
							<Button>9</Button>
							<Button>.</Button>
						</ButtonGroup>
						<ButtonGroup
							orientation='vertical'
							variant='contained'
							color='primary'
						>
							<Button>+</Button>
							<Button>-</Button>
							<Button>*</Button>
							<Button>/</Button>
						</ButtonGroup>
						<ButtonGroup
							orientation='vertical'
							variant='contained'
							color='primary'
						>
							<Button>C</Button>
							<Button>CE</Button>
							<Button>@</Button>
							<Button>@</Button>
						</ButtonGroup>
					</ButtonGroup>
				</CardActions>
			</Card>
		</div>
	);
};
export default Calculate;
