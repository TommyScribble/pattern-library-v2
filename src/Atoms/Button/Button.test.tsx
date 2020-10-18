import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index';

const buttonText = 'Test text'
const btnClassType = 'primary'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button btnClass={btnClassType}>{buttonText}</Button>, div);
});
