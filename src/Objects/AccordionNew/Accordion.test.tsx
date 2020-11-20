import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText, fireEvent } from '@testing-library/react';
import Accordion from './index';

const buttonLabel = 'This is a label';
const buttonContent = {};

// const setup = (type: 'text' | 'textarea' | 'checkbox') => {
// 	const container = render(
// 		<Input type={type} label={label} id={id} placeholder={placeholder} />
// 	);
// 	const input = container.getByLabelText(label) as HTMLInputElement;
// 	return {
// 		input,
// 		...container,
// 	};
// };

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Accordion />, div);
});

// it('displays a text input with label and allows user to enter text', () => {
// 	const { input } = setup('text');
// 	expect(input.value).toBe('');
// 	fireEvent.change(input, { target: { value: userText } });
// 	expect(input.value).toBe(userText);
// });

// it('displays custom placeholder in textarea input', () => {
// 	const { getByPlaceholderText } = setup('textarea');
// 	expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
// });

// it('displays a checkbox input and toggles when clicked', () => {
// 	const { getByLabelText } = setup('checkbox');
// 	const checkbox = getByLabelText(label) as HTMLInputElement;
// 	expect(checkbox.checked).toEqual(false);
// 	fireEvent.click(checkbox);
// 	expect(checkbox.checked).toEqual(true);
// 	fireEvent.click(checkbox);
// 	expect(checkbox.checked).toEqual(false);
// });
