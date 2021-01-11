import React from 'react';
import { render } from '@testing-library/react';
import Accordion from './Accordion';

const child = <div title="accordion item">Single child</div>;

it('renders without crashing', () => {
	const container = render(<Accordion icon="Caret">{child}</Accordion>);
	expect(container).toBeInTheDocument;
});

it('button opens accordiom when clicked', () => {});

it('button closes accordiom when clicked', () => {});
