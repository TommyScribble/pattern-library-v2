import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import Home from './Pages/Home';
import About from './Pages/About';

const RouterPage = (
	props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

function App() {
	return (
		<Router>
			<RouterPage path="/" pageComponent={<Home />} />
			<RouterPage path="about" pageComponent={<About />} />
		</Router>
	);
}

export default App;
