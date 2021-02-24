import React, { useState } from 'react';

import Heading from '../../01-Atoms/Heading';
import SideBar from '../../02-Objects/SideBar';
import Icon from '../../01-Atoms/Icon';
import Navigation from '../../02-Objects/Navigation';
import { useBreakpoint } from '../../helpers/customHooks';

import { IconTypes } from '../../typings/types';

import style from './Header.module.scss';

const Header = () => {
	const [icon, updateIcon] = useState<IconTypes>({ iconName: 'Burger' });

	return (
		<header className={style.header}>
			<nav className={style.topNav}>
				<Heading
					className={style.title}
					tagNumber={1}
					headingText={'ReactJs UI library'}
				/>
				{useBreakpoint(768, 'max') && (
					<button
						className={style.burgerMenu}
						onClick={() =>
							updateIcon((icon) =>
								icon.iconName === 'Burger'
									? { iconName: 'Cross' }
									: { iconName: 'Burger' }
							)
						}
					>
						<Icon iconName={icon.iconName} />
					</button>
				)}
			</nav>
			<SideBar isActive={icon.iconName}>
				<Navigation />
			</SideBar>
		</header>
	);
};

export default Header;
