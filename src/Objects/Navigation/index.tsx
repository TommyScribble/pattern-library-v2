import React from 'react';

import Anchor from '../../Atoms/Anchor';
import NavData from '../../PageData/navigationData.json';

import style from './Navigation.module.scss';

type Data = {
	title: string;
	path: string;
};

const Navigation: any = () =>
	NavData.map((item: Data, i) => {
		return (
			<li key={i} className={style['sideNav__item']}>
				<Anchor
					linkType="navigation"
					path={item.path}
					className={style['sideNav__link']}
				>
					{item.title}
				</Anchor>
			</li>
		);
	});

export default Navigation;
