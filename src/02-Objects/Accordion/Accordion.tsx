import React, { useState, useEffect, useMemo } from 'react';

import AccordionItem from './AccordionItem';

import { IconTypes, ValueOf } from '../../typings/types';

import style from './Accordion.module.scss';

type Props = {
	allowMultipleOpen?: boolean;
	children: any;
	icon?: ValueOf<IconTypes>;
	btnClass?: string;
	btnChildStyle?: string;
	contentClass?: string;
};

type SectionShape = {
	[key: string]: boolean;
};

type childProps = {
	props: {
		id?: string;
		title: string;
		'data-btnChild'?: any;
		'link-datatype'?: boolean;
		children: any;
	};
};

const Accordion: React.FC<Props> = ({
	allowMultipleOpen,
	children,
	icon,
	btnClass,
	btnChildStyle,
	contentClass,
}: Props) => {
	const [accordionItems, setAccordionItems] = useState<SectionShape>({});
	const kids: any[] | any = !Array.isArray(children) ? [children] : children;

	console.log('accordionItems', children);

	useEffect(() => {
		const getAllSections = () => {
			const obj: SectionShape = {};
			kids.forEach((child: any) => {
				obj[child.props.title] = false;
			});
			return obj;
		};
		setAccordionItems(getAllSections());
		// eslint-disable-next-line
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

	return useMemo(
		() => (
			<ul className={style.accordion}>
				{kids.map((child: childProps, i: number) => {
					return (
						<AccordionItem
							key={i}
							isOpen={child.props.id === 'open' ? true : false}
							title={child.props.title}
							btnChild={child.props['data-btnChild']}
							updateAccordionItems={updateAccordionItems}
							icon={icon}
							btnClass={btnClass}
							btnChildStyle={btnChildStyle}
							contentClass={contentClass}
							link={child.props['link-datatype']}
						>
							{child.props.children}
						</AccordionItem>
					);
				})}
			</ul>
		),
		[accordionItems]
	);
};

export default Accordion;
