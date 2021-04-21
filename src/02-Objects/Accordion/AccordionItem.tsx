import React, { useState, useEffect, useRef, CSSProperties } from 'react';

import Icon from '../../01-Atoms/Icon';
import Anchor from '../../01-Atoms/Anchor';

import style from './Accordion.module.scss';

type Props = {
	title: string;
	children: any;
	updateAccordionItems: (title: string, isOpen: boolean) => void;
	icon: any;
	btnClass?: string;
	btnChildStyle?: string;
	contentClass?: string;
	isOpen?: boolean | null;
	btnChild?: any;
	link?: boolean;
};

const AccordionItem = ({
	title,
	children,
	updateAccordionItems,
	icon,
	btnClass,
	btnChildStyle,
	contentClass,
	isOpen,
	btnChild,
	link,
}: Props) => {
	const accordionRef = useRef<HTMLDivElement>(null);
	const [sectionHeight, setSectionHeight] = useState('');

	useEffect(() => {
		accordionRef?.current !== null &&
			setSectionHeight(`${accordionRef.current.scrollHeight}px`);
	}, []);

	const handleSectionClick = (
		title: string,
		isOpen: boolean | null | undefined
	): void => {
		updateAccordionItems(
			title,
			isOpen === true ? (isOpen = false) : (isOpen = true)
		);
	};

	const activeBtn = isOpen ? style['active-btn'] : '';
	const activeIcon = isOpen ? style['active-icon'] : '';

	const activeStyle = {
		visibility: 'visible',
		maxHeight: `${sectionHeight}`,
		transition: 'all 0.6s ease',
	} as CSSProperties;

	const ButtonEl = () =>
		link === true ? (
			<Anchor
				anchorClass={`${btnClass} ${activeBtn}`}
				linkType="navigation"
				path="/"
			>
				{title}
			</Anchor>
		) : (
			<button
				className={`${style['accordion-item__button']} ${btnClass} ${activeBtn}`}
				onClick={() =>
					isOpen !== null && handleSectionClick(title, isOpen)
				}
			>
				<div className={style['button-content']}>
					<div className={style['button-content__title']}>
						{title}
					</div>
					{btnChild && (
						<div
							className={`${style['button-content__child']} ${
								btnChildStyle ? btnChildStyle : ''
							}`}
						>
							{btnChild}
						</div>
					)}
				</div>

				{isOpen !== null && icon && (
					<div
						className={`${style['btn-icon']} ${
							activeIcon ? activeIcon : ''
						}`}
					>
						<Icon iconName={icon} />
					</div>
				)}
			</button>
		);

	return (
		<li className={style['accordion-item']}>
			<ButtonEl />
			{children && (
				<div
					ref={accordionRef}
					style={isOpen ? activeStyle : {}}
					className={`${style['accordion-item__background']} ${
						contentClass ? contentClass : ''
					}`}
				>
					<div className={style.content}>{children}</div>
				</div>
			)}
		</li>
	);
};

export default AccordionItem;
