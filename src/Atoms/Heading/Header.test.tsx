import React from 'react';
import ReactDOM from 'react-dom';
import { getByText, render } from '@testing-library/react';
import Header from './index';

it('renders without crashing when passed the correct props', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Header tagNumber={1} headingText='Test heading' />, div);
});

it('renders the correct heading element to the DOM', () => {
	const {container} = render(<Header tagNumber={1} headingText='Test Heading' />);
	const header = container.querySelector('h1');
	expect(header).toBeInTheDocument();
});

it('renders the headingText to the DOM', () => {
	const {container} = render(<Header tagNumber={1} headingText='Test Heading' />);
	expect(getByText(container, 'Test Heading')).toBeInTheDocument();
});
