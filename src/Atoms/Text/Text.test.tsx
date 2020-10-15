import React from 'react';
import ReactDOM from 'react-dom';
import Text from './index';

const text = 'Test text'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Text>{text}</Text>, div);
});
