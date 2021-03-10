import React from 'react';
import { Router } from '@reach/router';

import Homepage from '../05-Pages';
import Anchors from '../05-Pages/atoms/anchors';
import Buttons from '../05-Pages/atoms/buttons';
import Accordion from '../05-Pages/atoms/accordions';
import NotFound from '../05-Pages/Error';

const Routes = () => {
	return (
		<Router>
			<Homepage path="/" />
			<Buttons path="/atoms/buttons" />
			<Anchors path="/atoms/anchors" />
			{/* <Accordion path="/atoms/accordion" /> */}
			<NotFound default={true} />
		</Router>
	);
};

export default Routes;
