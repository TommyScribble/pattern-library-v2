import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Anchor from './index';

const internaLink = '/test-link';
const externalLink = 'http://www.scribbledesign.co.uk';
const linkText = 'test link';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Anchor path={internaLink}>{linkText}</Anchor>, div);
});

it('renders an anchor element (with a href) to the DOM', () => {
	const {container} = render(<Anchor path={internaLink}>{linkText}</Anchor>);
	expect(container.querySelector('a')?.getAttribute('href')).toBe(internaLink);
});

it('renders internal links without the attribute target="_blank"', () => {
	const {container} = render(<Anchor path={internaLink} linkType={'internal'}>{linkText}</Anchor>);
	expect(container.querySelector('a')?.getAttribute('target')).toBeNull();
});

it('renders external links with the attribute target="_blank"', () => {
	const {container} = render(<Anchor path={externalLink}>{linkText}</Anchor>);
	expect(container.querySelector('a')?.getAttribute('target')).toBe('_blank');
});
