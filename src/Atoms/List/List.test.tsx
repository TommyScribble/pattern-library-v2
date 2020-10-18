import React from 'react';
import ReactDOM from 'react-dom';
import List from './index';

const items = ['item 01', 'item 02', 'item 03'];

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<List listItems={items} />, div);
});
