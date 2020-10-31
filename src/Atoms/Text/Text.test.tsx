import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Text from './index';

const text = 'Test text';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Text>{text}</Text>, div);
});

it('renders a <p> tag enclosing any children', () => {
	render(<Text>{text}</Text>);
	expect(document.querySelector('p')).toHaveTextContent(text);
});
