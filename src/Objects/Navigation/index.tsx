import React from 'react';

import Anchor from '../../Atoms/Anchor';
import NavData from '../../PageData/navigationData.json';

import style from './Navigation.module.scss';

type Data = {
	title: string;
	path: string;
	anchorClass: string;
};

const Navigation: any = () =>
	NavData.map((item: Data, i) => {
		return (
			<li key={i} className={style['side-nav__item']}>
				<Anchor
					linkType="navigation"
					path={item.path}
					className={item.anchorClass}
				>
					{item.title}
				</Anchor>
			</li>
		);
	});

export default Navigation;
