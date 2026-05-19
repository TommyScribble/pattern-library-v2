import React from 'react';
import { renderWithRouter } from '../../helpers/testUtilities';
import Logo from './index';

const logo = '/path/to/logo.png';

it('renders without crashing', () => {
	renderWithRouter(<Logo anchor="/" logo={logo} altText="This is a logo" />);
});
