import React from 'react';
import './App.css';

// pages
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/singleRoom';
import Error from './Pages/Error';

// Router
import {Switch, Route} from 'react-router-dom';

// Component
import Navbar from './Components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/rooms' component={Rooms} />
				<Route exact path='/rooms/:slug' component={SingleRoom} />
				<Route component={Error} />
			</Switch>
		</>
	);
}

export default App;
