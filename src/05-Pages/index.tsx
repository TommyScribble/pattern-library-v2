import React from 'react';

import content from '../PageData/HomepageData.json';
import HomePage from '../04-Templates/HomePage';

const homepage = () => {
	return <HomePage content={content} />;
};

export default homepage;
