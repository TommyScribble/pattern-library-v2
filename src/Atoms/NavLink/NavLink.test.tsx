import React from 'react';
import { renderWithRouter } from '../../../helpers/testUtilities';
import NavLink from './index';

it('renders without crashing ', () => {
	renderWithRouter(<NavLink to={'/'}>Home</NavLink>);
});
