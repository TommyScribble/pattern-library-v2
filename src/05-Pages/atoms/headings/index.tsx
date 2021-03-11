import React from 'react';

import content from '../../../PageData/HeadingspageData.json';
import ComponentPage from '../../../04-Templates/ComponentPage';

import style from './headings.module.scss';

const buttons = () => {
	return (
		<ComponentPage
			content={content}
			accordionSectionClass={style.headings}
		/>
	);
};

export default buttons;
