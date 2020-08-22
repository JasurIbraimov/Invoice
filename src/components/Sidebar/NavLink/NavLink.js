import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './NavLink.scss';
const NavLink = ({ to, label, activeOnlyWhenExact }) => {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
	});
	return (
		<Link
			className={
				match ? 'nav-link__item nav-link__item_active' : 'nav-link__item'
			}
			to={to}
		>
			{label}
		</Link>
	);
};

export default NavLink;
