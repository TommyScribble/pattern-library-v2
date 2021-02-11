import React from 'react';
import { Link, useLocation } from '@reach/router';

import style from './NavLink.module.scss';

type Props = {
	to: string;
	linkClass?: string;
	onClick?: any;
	children: any;
};

const NavLink = ({ to, linkClass, onClick, children }: Props) => {
	const location = useLocation();
	if (location.pathname === to) linkClass = `${linkClass} ${style.current}`;

	return (
		<Link to={to} onClick={onClick} className={linkClass}>
			{children}
		</Link>
	);
};

export default NavLink;
