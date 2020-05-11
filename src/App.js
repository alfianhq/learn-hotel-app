import React from 'react';
import './App.css';

// pages
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/singleRoom';
import Error from './Pages/Error';

// Router
import {Switch, Route} from 'react-router-dom';

function App() {
	return (
		<>
			<Route exact path='/' component={Home} />
			<Route exact path='/rooms' component={Rooms} />
			<Route exact path='/rooms/:slug' component={SingleRoom} />
		</>
	);
}

export default App;
