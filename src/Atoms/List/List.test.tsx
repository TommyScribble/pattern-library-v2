import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import List from './index';

const items = ['item 01', 'item 02', 'item 03'];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<List listItems={items} />, div);
});

it('displays an unordered list with 3 items', () => {
	const { container } = render(<List listItems={items} />);
	const parentElement = container.querySelector('ul');
	expect(parentElement).toBeInTheDocument();
	const listItems = container.querySelectorAll('li');
	expect(listItems.length).toBe(3);
});

it('displays an ordered list with 3 items', () => {
	const { container } = render(<List listItems={items} ordered={true} />);
	const parentElement = container.querySelector('ol');
	expect(parentElement).toBeInTheDocument();
	const listItems = container.querySelectorAll('li');
	expect(listItems.length).toBe(3);
});
