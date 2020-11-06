import React, { useState, useEffect } from 'react';

import Logo from '../../Atoms/Logo';

import style from './SideBar.module.scss';

type Props = {
	active?: string | boolean;
	children?: any;
};

const SideBar = ({ active, children }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setIsOpen(active === 'Burger1' ? false : true);
	}, [active]);
	const openClass = isOpen === true ? 'js-open' : 'js-close';

	const myLogo = './scribble_logo--white.png';
	const versionNo = 'Version 1.0.0';
	const currentYear = new Date().getFullYear();

	return (
		<ul className={`${style.sideBar} ${style.fixed} ${openClass}`}>
			<li>
				<Logo
					anchor="./"
					logo={myLogo}
					altText={`Pattern Library ${currentYear}`}
					logoClass={style.logo}
				/>
			</li>
			<li className={style.version}>{versionNo}</li>
			{children}
		</ul>
	);
};

export default SideBar;
