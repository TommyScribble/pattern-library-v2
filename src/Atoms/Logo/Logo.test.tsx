import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './index';

const logo = '/path/to/logo.png'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Logo anchor='/' logo={logo} altText='This is a logo'></Logo>, div);
});
