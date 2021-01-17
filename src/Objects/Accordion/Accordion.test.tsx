import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

const child = <div title="accordion item">Single child</div>;

it('renders without crashing', () => {
	const container = render(<Accordion icon="Caret">{child}</Accordion>);
	expect(container).toBeInTheDocument;
});

it('when the button is clicked it shows accordion content', () => {});

it('when the button is clicked it hides accordion content', () => {});
