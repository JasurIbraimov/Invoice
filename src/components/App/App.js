import React from 'react';
import { useSelector } from 'react-redux';
import Auth from '../Auth';
import './App.scss';
import MainPage from '../MainPage';
const App = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	return <>{isAuth ? <MainPage /> : <Auth />}</>;
};

export default App;
