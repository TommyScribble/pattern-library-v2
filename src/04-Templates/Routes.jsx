import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from '../05-Pages';
import Anchors from '../05-Pages/atoms/anchors';
import Buttons from '../05-Pages/atoms/buttons';
import Headings from '../05-Pages/atoms/headings';
import Icons from '../05-Pages/atoms/icons';
import Text from '../05-Pages/atoms/text';

import Accordions from '../05-Pages/objects/accordions';

import NotFound from '../05-Pages/Error';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/atoms/buttons" element={<Buttons />} />
			<Route path="/atoms/anchors" element={<Anchors />} />
			<Route path="/atoms/heading" element={<Headings />} />
			<Route path="/atoms/icons" element={<Icons />} />
			<Route path="/atoms/text" element={<Text />} />
			<Route path="/objects/accordions" element={<Accordions />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
