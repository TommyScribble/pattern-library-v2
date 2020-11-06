import React, { useState } from 'react';

import Heading from '../../Atoms/Heading';
import SideBar from '../../Objects/SideBar';
import Icon from '../../Atoms/Icon';

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
			</nav>
			<SideBar active={icon.iconName} />
		</header>
	);
};

export default Header;
