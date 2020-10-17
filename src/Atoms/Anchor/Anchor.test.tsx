import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { renderWithRouter } from '../../../helpers/testUtilities';
import Anchor from './index';

const internaLink = '/test-link';
const externalLink = 'http://www.scribbledesign.co.uk';
const linkText = 'test link';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Anchor path={internaLink}>{linkText}</Anchor>, div);
});

it('renders an anchor element (with a href) to the DOM', () => {
	const container = render(<Anchor path={internaLink}>{linkText}</Anchor>);
	expect(container.getByText(linkText)).toHaveAttribute('href', internaLink)
});

it('renders internal links without the attribute target="_blank"', () => {
	const container = render(<Anchor path={internaLink} linkType={'internal'}>{linkText}</Anchor>);
	expect(container.getByText(linkText)).not.toHaveAttribute('target', '_blank');
});

it('renders external links with the attribute target="_blank"', () => {
	const container = render(<Anchor path={externalLink}>{linkText}</Anchor>);
	expect(container.getByText(linkText)).toHaveAttribute('target', '_blank');
});

it('renders internal navigtion links and adds current class when route matches href', async () => {
	const {container, history: {navigate}} = renderWithRouter(<Anchor path={internaLink} linkType='navigation'>{linkText}</Anchor>);
	const linkContainer = container;

	await navigate(internaLink);
	expect(linkContainer.querySelector('a')?.classList.contains('current'))

});
