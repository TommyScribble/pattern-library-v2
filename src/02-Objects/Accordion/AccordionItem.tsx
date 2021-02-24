import React, { useState, useEffect, useRef } from 'react';

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
	isOpen: boolean | null;
	btnChild?: any;
	link?: boolean;
};

const AccordionItem: React.FC<Props> = ({
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
	const accordionRef = useRef<any>();

	const [sectionOpen, setSectionOpen] = useState<null | boolean>();
	const [sectionHeight, setSectionHeight] = useState('0px');

	useEffect(() => {
		setSectionOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (accordionRef.current !== null) {
			setSectionHeight(
				!sectionOpen ? '0px' : `${accordionRef.current.scrollHeight}px`
			);
		}
	}, [sectionOpen]);

	const handleSectionClick = (
		title: string,
		sectionOpen: boolean | null | undefined
	): void => {
		setSectionOpen(() => !sectionOpen);
		updateAccordionItems(title, !sectionOpen);
	};

	const activeBtn = sectionOpen ? style['active-btn'] : '';
	const activeIcon = sectionOpen ? style['active-icon'] : '';

	const activeHeight = {
		maxHeight: `${sectionHeight}`,
	};

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
					isOpen !== null && handleSectionClick(title, sectionOpen)
				}
			>
				<div className={style['button-content']}>
					<div className={style['button-content__title']}>
						{title}
					</div>
					{btnChild && (
						<div
							className={`${style['button-content__child']} ${btnChildStyle}`}
						>
							{btnChild}
						</div>
					)}
				</div>

				{isOpen !== null && icon && (
					<div className={`${style['btn-icon']} ${activeIcon}`}>
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
					style={activeHeight}
					className={`${style['accordion-item__background']} ${contentClass}`}
				>
					<div className={style.content}>{children}</div>
				</div>
			)}
		</li>
	);
};

export default AccordionItem;
