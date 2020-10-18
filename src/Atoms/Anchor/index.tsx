import React from 'react';
import { Link } from '@reach/router';

import NavLink from '../NavLink';

import style from './Anchor.module.scss';


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
	let buttonAnchor: JSX.Element;

	const isDisabled = disabled === true ? 'disabled' : null;

	const handleClick = (e: any) => {
		if (disabled) {
			e.preventDefault();
		}
	};

	switch (linkType) {
		case 'internal':
			buttonAnchor = (
				<Link to={path} className={`${style.anchor} ${isDisabled} ${className}`} onClick={handleClick} rel={rel}>
					{children}
				</Link>
			);
			break;
		case 'navigation':
			buttonAnchor = (
				<NavLink to={path} className={`${style.anchor} ${isDisabled} ${className}`} onClick={handleClick}>
					{children}
				</NavLink>
			);
			break;
		default:
			buttonAnchor = (
				<a href={path} className={`${style.anchor} ${isDisabled} ${className}`} onClick={handleClick} target="_blank" rel="noopener noreferrer">
					{children}
				</a>
			);
	}

	return buttonAnchor;
};

export default Anchor;
