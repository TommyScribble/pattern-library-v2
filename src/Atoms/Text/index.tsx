import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	children: string;
	className?: string;
};

const Text = ({ children, className }: Props) => {
	return <p className={className}>{children}</p>;
};

Text.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Text;
