import React from 'react';
import { Router } from '@reach/router';

import Homepage from '../05-Pages';
import Anchors from '../05-Pages/atoms/anchors';
import Buttons from '../05-Pages/atoms/buttons';
import Headings from '../05-Pages/atoms/headings';
import Icons from '../05-Pages/atoms/icons';
import Text from '../05-Pages/atoms/text';

import Accordions from '../05-Pages/objects/accordions';

import NotFound from '../05-Pages/Error';

const Routes = () => {
	return (
		<Router>
			<Homepage path="/" />
			<Buttons path="/atoms/buttons" />
			<Anchors path="/atoms/anchors" />
			<Headings path="/atoms/heading" />
			<Icons path="/atoms/icons" />
			<Text path="/atoms/text" />
			<Accordions path="/objects/accordions" />
			<NotFound default={true} />
		</Router>
	);
};

export default Routes;
