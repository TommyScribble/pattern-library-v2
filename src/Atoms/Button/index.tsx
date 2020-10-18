import React from 'react';

import style from './Button.module.scss';

type Props = {
	type?: 'submit' | 'reset' | 'button';
	btnClass: string;
	children: any;
	onClick?: (event: any) => void;
};

const Button = ({
	type,
	btnClass,
	children,
	onClick
}: Props) => {
	return (
		<button type={type} className={`${style.btn} ${style[btnClass]}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
