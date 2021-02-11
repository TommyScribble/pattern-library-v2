import React from 'react';

import Anchor from '../../Atoms/Anchor';
import { uid } from '../../helpers/helpFunctions';
import NavData from '../../PageData/navigationData.json';
import Accordion from '../Accordion/Accordion';

import style from './Navigation.module.scss';

type Data = {
	title: string;
	path: string;
	anchorClass: string;
	childLinks?: {
		title: string;
		path: string;
		anchorClass: string;
	}[];
};

const Navigation = () => {
	return (
		<>
			{NavData.map((item: Data) =>
				item.childLinks?.length ? (
					<Accordion
						key={uid()}
						btnClass={style['side-nav__link']}
						contentClass={style['side-nav__link-list']}
					>
						<div title={item.title}>
							{item.childLinks.map((childItem) => {
								return (
									<div key={uid()}>
										<Anchor
											linkType="navigation"
											path={childItem.path}
											anchorClass={
												style[childItem.anchorClass]
											}
										>
											{childItem.title}
										</Anchor>
									</div>
								);
							})}
						</div>
					</Accordion>
				) : (
					<div key={uid()}>
						<Anchor
							linkType="navigation"
							path={item.path}
							anchorClass={style[item.anchorClass]}
						>
							{item.title}
						</Anchor>
					</div>
				)
			)}
		</>
	);
};

export default Navigation;
