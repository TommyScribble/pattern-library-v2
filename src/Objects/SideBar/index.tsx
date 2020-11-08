import React, { useState, useEffect } from 'react';

import Logo from '../../Atoms/Logo';

import style from './SideBar.module.scss';

type Props = {
	isActive?: string | boolean;
	children?: any;
};

const SideBar = ({ isActive, children }: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		setIsOpen(isActive === 'Burger' ? false : true);
	}, [isActive]);
	const openClass = isOpen === true ? style['js-open'] : style['js-close'];

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
