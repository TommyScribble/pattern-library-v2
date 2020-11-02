import React, { useState, useEffect } from 'react';

import Logo from '../../Atoms/Logo';
import Navigation from '../Navigation';

import style from './SideBar.module.scss';

type Props = {
	active?: string | boolean;
};

const SideBar = ({ active }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const myLogo = './scribble_logo--white.png';

	useEffect(() => {
		setIsOpen(active === 'Burger1' ? false : true);
	}, [active]);

	const openClass = isOpen === true ? 'js-open' : 'js-close';

	const versionNo = 'Version 1.0.0';

	return (
		<ul className={`${style['side-nav']} ${style['fixed']} ${openClass}`}>
			<li className={style.logo}>
				<Logo
					anchor={'./'}
					logo={myLogo}
					altText={'Pattern Library 2020'}
				/>
			</li>
			<li className={style.version}>{versionNo}</li>
			<Navigation />
		</ul>
	);
};

export default SideBar;
