import React, { useState, useEffect } from 'react';

import AccordionItem from './AccordionItem';

import { IconTypes, ValueOf } from '../../typings/types';

import style from './Accordion.module.scss';
//TODO: add functionlity to choose initally open section + fisisOpen eRror...
type Props = {
	allowMultipleOpen?: boolean;
	children: any;
	icon: ValueOf<IconTypes>;
	btnClass?: string;
	contentClass?: string;
};

type SectionShape = {
	[key: string]: boolean;
};

const Accordion: React.FC<Props> = ({
	allowMultipleOpen,
	children,
	icon,
	btnClass,
	contentClass,
}: Props) => {
	const [accordionItems, setAccordionItems] = useState<SectionShape>({});
	console.log('CHILDS', children.lengh);

	useEffect(() => {
		const getAllSections = () => {
			const obj: SectionShape = {};
			children.forEach((child: any) => {
				obj[child.props.title] = false;
			});
			return obj;
		};
		setAccordionItems(getAllSections());
	}, [children]);

	const closeAllSections = () => {
		Object.keys(accordionItems).forEach((item) => {
			accordionItems[item] = false;
		});
	};

	const updateAccordionItems = (title: string, isOpen: boolean): void => {
		if (!allowMultipleOpen) closeAllSections();
		if (isOpen === true)
			setAccordionItems({
				...accordionItems,
				[title]: isOpen,
			});
	};

	return (
		<ul className={style.accordion}>
			{children.map((child: any, i: number) => {
				return (
					<AccordionItem
						key={i}
						isOpen={accordionItems[child.props.title]}
						title={child.props.title}
						updateAccordionItems={updateAccordionItems}
						icon={icon}
						btnClass={btnClass}
						contentClass={contentClass}
					>
						{child.props.children}
					</AccordionItem>
				);
			})}
		</ul>
	);
};

export default Accordion;
