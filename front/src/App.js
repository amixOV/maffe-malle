import React, { useState } from 'react';
import './App.css';
import Header from './component/Header';
// import TryHeader from './component/TryHeader';
// import { ThemeProvider } from '@material-ui/core/styles';
// import theme from './theme';


// import ToDad from './component/ToDad';
// import TodoApp from './component/TodoApp';
// import NewComp from './component/NewComp';
function App() {
	
	return (
		<div className='App'>
			<Header />
			{/* <ThemeProvider theme={theme}>
				{<Header />}
				{<TryHeader />}
			</ThemeProvider> */}
			

			{/* <CountDown number={num} />
			<ToDad onChieldChange={changeHandler} />
			<TodoApp />
			<NewComp />
			<div>{textFromChield}</div>
			<div id='big_table'>
				<br />
				<div id='table'>
					<Calculate />
				</div>
			</div> */}
		</div>
	);
}
export default App;
