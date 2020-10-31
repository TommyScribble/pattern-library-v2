import React from 'react';
import ReactDOM from 'react-dom';
import { fireEvent, render } from '@testing-library/react';

import Button from './index';

let buttonText = 'Test text';
const btnClassType = 'primary';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Button btnClass={btnClassType}>{buttonText}</Button>, div);
});

it('displays the correct text to the user', () => {
	const container = render(
		<Button btnClass={btnClassType}>{buttonText}</Button>
	);
	expect(container.getByText(buttonText)).toBeInTheDocument();
});

it('fire onClick event when clicked', () => {
	const clickEvent = jest.fn();
	const { getByText } = render(
		<Button btnClass={btnClassType} onClick={clickEvent}>
			{buttonText}
		</Button>
	);
	const button = getByText(buttonText);

	fireEvent.click(button);
	expect(clickEvent).toHaveBeenCalled();
});
