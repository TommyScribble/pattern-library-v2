import React from 'react';

import Anchor from '../../Atoms/Anchor';
import { uid } from '../../helpers/helpFunctions';
import NavData from '../../PageData/navigationData.json';
import Accordion from '../Accordion/Accordion';

import style from './Navigation.module.scss';

type ChildLink = {
	title: string;
	path: string;
	anchorClass: string;
};

type Data = {
	title: string;
	path: string;
	anchorClass: string;
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
				<div title={item.title}>
					{item.childLinks &&
						item.childLinks.map((child: ChildLink) => {
							return (
								<div key={uid()}>
									<Anchor
										linkType="navigation"
										path={child.path}
										anchorClass={style[child.anchorClass]}
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
