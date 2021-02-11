import React from 'react';
import { Router } from '@reach/router';

import Homepage from '../Pages';
import Buttons from '../Pages/atoms/buttons';
import Accordion from '../Pages/atoms/accordions';
import NotFound from '../Pages/Error';

const Routes = () => {
	return (
		<Router>
			<Homepage path="/" />
			<Buttons path="/atoms/buttons" />
			<Accordion path="/atoms/accordion" />
			<NotFound default={true} />
		</Router>
	);
};

export default Routes;
