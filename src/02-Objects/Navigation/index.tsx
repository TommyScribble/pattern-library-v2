import React from 'react';

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
				>
					{item.childLinks &&
						item.childLinks.map((child: ChildLink) => {
							return (
								<div key={uid()}>
									<Anchor
										linkType="navigation"
										path={child.path}
										anchorClass={style['side-nav__link']}
									>
										{child.title}
									</Anchor>
								</div>
							);
						})}
				</div>
			))}
		</Accordion>
	);
};

export default Navigation;
