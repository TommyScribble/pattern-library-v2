import React from 'react';
import { Link, useLocation } from '@reach/router';

import style from './NavLink.module.scss';

type Props = {
	to: string;
	className?: string;
	onClick?: any;
	children: any;
};

const NavLink = ({ to, className, onClick, children }: Props) => {
	const location = useLocation();
	if (location.pathname === to) className = `${className} ${style.current}`;

	return (
		<Link to={to} onClick={onClick} className={className}>
			{children}
		</Link>
	);
};

export default NavLink;
