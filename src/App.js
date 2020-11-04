import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rendering from './tasks/Rendering';
import Squere from './tasks/Squere';
import Fonts from './tasks/Fonts';
import Names from './tasks/Names';

function App() {
	return (
		<Router>
			<div className='container'>
				<div className="nav">
					<Link to="/">first task</Link>
					<Link to="/Squere">second task</Link>
					<Link to="/Fonts">third</Link>
					<Link to="/Names">аourth</Link>
				</div>
				<div className='wrapper'>
					<Switch >
						<Route exact path="/">
							<Rendering />
						</Route>
						<Route exact path="/Squere">
							<Squere css='big' label='first' />
							<Squere css='medium' label='secoond' />
							<Squere css='small' label='last' />
						</Route>
						<Route exact path="/Fonts">
							<Fonts />
						</Route>
						<Route exact path="/Names">
							<Names />
						</Route>

					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
