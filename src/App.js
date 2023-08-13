import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import Zakazbeton2 from '../src/js/Zakazbeton2'
import Zakazbeton from '../src/js/Zakazbeton'
import Zakazbeton3 from '../src/js/Zakazbeton3'
import Zakazbeton4 from '../src/js/Zakazbeton4';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
		<Routes>
				<Route exact path='/' element={< Zakazbeton />}></Route>
				<Route exact path='/zakazbeton2' element={< Zakazbeton2 />}></Route>
				<Route exact path='/zakazbeton3' element={< Zakazbeton3 />}></Route>
				<Route export path='/zakazbeton4' element={<Zakazbeton4/>}></Route>

		</Routes>
		</div>
	</Router>
);
}
}

export default App;
