import React from 'react';
import propTypes from 'prop-types';

type Props = {
	tagNumber: number;
	headingText: string;
	className?: string;
};

const Heading = ({ tagNumber, headingText, className }: Props) => {
	const HeaderTag: any = `h${tagNumber}`;
	return <HeaderTag className={className}>{headingText}</HeaderTag>;
};

Heading.propTypes = {
	tagNumber: propTypes.number.isRequired,
	headingText: propTypes.string.isRequired,
};

export default Heading;
