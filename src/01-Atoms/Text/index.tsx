import React from 'react';

type Props = {
	children: string;
	className?: string;
};

const Text = ({ children, className }: Props) => {
	return <p className={className}>{children}</p>;
};

export default Text;
