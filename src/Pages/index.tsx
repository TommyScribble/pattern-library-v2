import React from 'react';

import content from '../PageData/HomepageData.json';
import HomePage from '../Templates/HomePage';

const homepage = () => {
	return <HomePage content={content} />;
};

export default homepage;
