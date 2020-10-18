import React, { ChangeEvent } from 'react';

import {useBreakpoint} from '../../../helpers/customHooks';

import style from './Input.module.scss';

type Props = {
	label?: string;
	className?: string;
	labelClass?: string;
	type: string;
	value?: string;
	placeholder?: string;
	desktopPlaceholder?: string;
	id?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	autoFocus?: boolean;
	min?: string;
	max?: string;
}
 
const Input = ({ label, className, labelClass, type, value, placeholder, desktopPlaceholder, id, onChange, checked, autoFocus, min, max }: Props) => {
	const checkForTypeStyle = style[type] ? style[type] : type;
	const placeHolder = desktopPlaceholder && useBreakpoint(768) ? desktopPlaceholder : placeholder;

	return (
		<>
			{label && type !== 'checkbox' && (
				<label className={labelClass} htmlFor={id}>
					{label}
				</label>
			)}
			<input
				name={id}
				id={id}
				className={`${checkForTypeStyle} ${className && className}`}
				type={type}
				placeholder={placeHolder}
				onChange={onChange}
				checked={checked}
				autoFocus={autoFocus}
				value={value}
				min={min}
				max={max}
			/>
			{type === 'checkbox' && <label htmlFor={id}>{label}</label>}
		</>
	);
}
 
export default Input;
