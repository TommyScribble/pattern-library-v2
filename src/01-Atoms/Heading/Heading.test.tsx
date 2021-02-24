import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Header from './index';

const headingText = 'Test Heading';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header tagNumber={1} headingText={headingText} />, div);
});

it('renders the correct heading element to the DOM', () => {
	const { container } = render(
		<Header tagNumber={1} headingText={headingText} />
	);
	expect(container.querySelector('h1')).toBeInTheDocument();
});

it('renders the headingText to the DOM', () => {
	const container = render(
		<Header tagNumber={1} headingText={headingText} />
	);
	expect(container.getByText('Test Heading')).toBeInTheDocument();
});
