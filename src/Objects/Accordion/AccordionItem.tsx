import React, { useState, useEffect, useRef } from 'react';

import Icon from '../../Atoms/Icon';

import style from './Accordion.module.scss';

type Props = {
	title: string;
	children: any;
	updateAccordionItems: (title: string, isOpen: boolean) => void;
	icon: 'Burger' | 'Cross' | 'Delete';
	btnClass?: string;
	contentClass?: string;
	isOpen: boolean;
};

const AccordionItem: React.FC<Props> = ({
	title,
	children,
	updateAccordionItems,
	icon,
	btnClass,
	contentClass,
	isOpen,
}: Props) => {
	const accordionRef = useRef<any>();

	const [sectionOpen, setSectionOpen] = useState(false);
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

	const handleSectionClick = (title: string, sectionOpen: boolean): void => {
		setSectionOpen(() => !sectionOpen);
		updateAccordionItems(title, !sectionOpen);
	};

	const activeBtn = sectionOpen ? style.active : '';

	const activeHeight = {
		maxHeight: `${sectionHeight}`,
	};

	return (
		<li className={style['accordion-item']}>
			<button
				className={`${style['accordion-item__button']} ${btnClass} ${activeBtn}`}
				onClick={() => handleSectionClick(title, sectionOpen)}
			>
				{title}
				{icon && (
					<div className={`${style.icon} ${style.rotate}`}>
						<Icon iconName={icon} />
					</div>
				)}
			</button>
			<div
				ref={accordionRef}
				style={activeHeight}
				className={`${style['accordion-item__background']} ${contentClass}`}
			>
				<div className={style.content}>{children}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
