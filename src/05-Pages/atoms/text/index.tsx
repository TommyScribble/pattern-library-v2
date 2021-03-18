import React from 'react';
import ComponentPage from '../../../04-Templates/ComponentPage';

import content from '../../../PageData/TextpageData.json';

import style from './text.module.scss';

const text = () => {
	return (
		<ComponentPage
			content={content}
			accordionSectionClass={style.removeMargin}
		/>
	);
};

export default text;
