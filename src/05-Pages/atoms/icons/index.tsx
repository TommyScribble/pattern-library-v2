import React from 'react';

import content from '../../../PageData/IconspageData.json';
import ComponentPage from '../../../04-Templates/ComponentPage';

import style from './icons.module.scss';

const buttons = () => {
	return (
		<ComponentPage
			content={content}
			accordionSectionClass={style.iconSize}
		/>
	);
};

export default buttons;
