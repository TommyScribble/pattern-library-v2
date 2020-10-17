import React from 'react';

type Props = {
	type?: 'submit' | 'reset' | 'button';
	style?: React.CSSProperties;
	btnClass?: string;
	children: any;
	onClick?: (event: any) => void;
};

const Button = ({
	type,
	style,
	btnClass,
	children,
	onClick
}: Props) => {
	return (
		<button type={type} style={style} className={`btn ${btnClass}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
