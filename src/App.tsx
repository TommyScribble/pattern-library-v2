import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './04-Templates/Routes';

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
