import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowCircleLeft,
	faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.scss';
import Loader from '../Loader';
import NavLink from './NavLink/NavLink';
const Sidebar = () => {
	const user = useSelector((state) => state.auth.user);
	const [fullMode, setFullMode] = useState(true);
	return (
		<div className={fullMode ? 'sidebar' : 'sidebar sidebar_hidden'}>
			<span
				className='sidebar__toggle-btn'
				onClick={() => setFullMode(!fullMode)}
			>
				<FontAwesomeIcon
					icon={fullMode ? faArrowCircleLeft : faArrowCircleRight}
				/>
			</span>
			<div className='sidebar__user'>
				{user && user.avatar ? (
					<img
						className='sidebar__user-avatar'
						src={user.avatar}
						alt='Avatar'
					/>
				) : (
					<Loader />
				)}
				{user && user.login ? (
					<h2 className='sidebar__user-login'>{user.login}</h2>
				) : (
					<Loader />
				)}
			</div>
			<nav className='sidebar__nav'>
				<NavLink label='Терминалы' to='/terminals' />
				<NavLink label='Покупатели' to='/buyers' activeOnlyWhenExact />
			</nav>
			<footer className='sidebar__footer'>
				<span className='sidebar__footer-info'>Copyright © 2020</span>
			</footer>
		</div>
	);
};

export default Sidebar;
