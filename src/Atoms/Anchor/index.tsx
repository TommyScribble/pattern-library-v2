import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import NavLink from '../NavLink';


type Props = {
	path: string;
	className?: string;
	disabled?: boolean;
	linkType?: 'internal' | 'navigation';
	children?: any;
	rel?: any;
};

const Anchor = ({
	path,
	className,
	disabled,
	linkType,
	children,
	rel
}: Props) => {
	let buttonAnchor;

	const handleClick = (e: any) => {
		if (disabled) {
			e.preventDefault();
		}
	};

	switch (linkType) {
		case 'internal':
			buttonAnchor = (
				<Link to={path} className={className} onClick={handleClick} rel={rel}>
					{children}
				</Link>
			);
			break;
		case 'navigation':
			buttonAnchor = (
				<NavLink to={path} className={className} onClick={handleClick}>
					{children}
				</NavLink>
			);
			break;
		default:
			buttonAnchor = (
				<a href={path} className={className} onClick={handleClick} target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			);
	}

	return buttonAnchor;
};

Anchor.propTypes = {
	path: PropTypes.string.isRequired,
	className: PropTypes.string,
	linkType: PropTypes.string,
	children: PropTypes.any,
};

export default Anchor;
