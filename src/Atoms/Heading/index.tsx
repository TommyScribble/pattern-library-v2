import React from 'react';

type Props = {
	tagNumber: number;
	headingText: string;
	className?: string;
};

const Heading = ({ tagNumber, headingText, className }: Props) => {
	const HeaderTag: any = `h${tagNumber}`;
	return <HeaderTag className={className}>{headingText}</HeaderTag>;
};

export default Heading;
