import React, { useState } from 'react';
import { useLocation } from '@reach/router';

import Anchor from '../../01-Atoms/Anchor';
import { uid } from '../../helpers/helpFunctions';
import NavData from '../../PageData/navigationData.json';
import Accordion from '../Accordion/Accordion';

import style from './Navigation.module.scss';

type ChildLink = {
	title: string;
	path: string;
};

type Data = {
	title: string;
	path: string;
	childLinks?: ChildLink[];
};

const Navigation = () => {
	const location = useLocation();
	// const [currentRoute, setCurrentRoute] = useState('undefined');

	const isCurrentRoute = (btnTitle: string) => {
		const currentRoute = location.pathname;
		const currentSection = currentRoute.split('/')[1];
		const isOpen =
			btnTitle.toLowerCase() === currentSection ? 'open' : 'undefined';
		console.log('open', btnTitle, currentSection);
		return isOpen;
	};

	return (
		<Accordion
			key={uid()}
			btnClass={style['side-nav__link']}
			contentClass={style['side-nav__link-list']}
			icon="Caret"
		>
			{NavData.map((item: Data) => (
				<div
					key={uid()}
					title={item.title}
					link-datatype={item.childLinks === undefined}
					id={isCurrentRoute(item.title)}
				>
					{item.childLinks &&
						item.childLinks.map((child: ChildLink) => {
							return (
								<Anchor
									key={uid()}
									linkType="navigation"
									path={child.path}
									anchorClass={style['side-nav__link']}
								>
									{child.title}
								</Anchor>
							);
						})}
				</div>
			))}
		</Accordion>
	);
};

export default Navigation;
