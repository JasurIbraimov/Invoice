import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Terminals from '../Terminals';
import Buyers from '../Buyers';
import './MainPage.scss';
import BuyerPage from '../BuyerPage';
import NoMatchPage from '../NoMatchPage';
const MainPage = () => {
	return (
		<div className='mainpage'>
			<Sidebar />
			<Switch>
				<Route path='/terminals'>
					<Terminals />
				</Route>
				<Route exact path='/buyers'>
					<Buyers />
				</Route>
				<Route path='/buyers/:buyerId'>
					<BuyerPage />
				</Route>
				<Route path='*'>
					<NoMatchPage />
				</Route>
			</Switch>
		</div>
	);
};

export default MainPage;
