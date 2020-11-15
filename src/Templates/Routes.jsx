import React from 'react';
import { Router } from '@reach/router';

import Homepage from '../Pages/HomePage';
import Buttons from '../Pages/Buttons';
import Accordion from '../Pages/accordion';
import NotFound from '../Pages/Error';

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
