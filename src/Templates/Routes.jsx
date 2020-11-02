import React from 'react';
import { Router } from '@reach/router';

import Homepage from '../Pages/homepage';
import Buttons from '../Pages/buttons';
import Accordion from '../Pages/accordion';
import NotFound from '../Pages/notFound';

const Routes = () => {
	return (
		<Router>
			<Homepage path="/" />
			<Buttons path="/buttons" />
			<Accordion path="/accordion" />
			<NotFound default={true} />
		</Router>
	);
};

export default Routes;
