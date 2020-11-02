import React from 'react';

import HomepageTemplate from '../Templates/HomepageTemplate';

import content from '../../src/PageData/HomepageData.json';

const homepage = () => {
	return <HomepageTemplate content={content} />;
};

export default homepage;
