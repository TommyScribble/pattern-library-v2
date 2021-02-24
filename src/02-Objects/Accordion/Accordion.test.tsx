import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

const child = <div title="accordion item">Single child</div>;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Accordion icon="Caret">{child}</Accordion>, div);
});

it('when the button is clicked it shows accordion content', () => {});

it('when the button is clicked it hides accordion content', () => {});
