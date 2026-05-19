import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// this is a handy function that I would utilize for any component
// that relies on the router being in context
export function renderWithRouter(
	ui: React.ReactElement,
	{ route = '/' }: { route?: string } = {}
) {
	return {
		...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
	};
}
