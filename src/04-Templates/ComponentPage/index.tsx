import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PageLayout from '../PageLayout';
import Text from '../../01-Atoms/Text';
import Heading from '../../01-Atoms/Heading';
import Accordion from '../../02-Objects/Accordion/Accordion';
import PropsTable from '../../02-Objects/PropsTable';
import { uid } from '../../helpers/helpFunctions';
import componentBuilder from '../../helpers/componentBuilder';

import { ComponentPageProps } from '../../typings/types';
import style from './componentpage.module.scss';

const ComponentPage = ({
	content,
	headingSectionClass,
	accordionSectionClass,
	propsSectionClass,
}: ComponentPageProps) => {
	return (
		<PageLayout>
			<section className={headingSectionClass}>
				<Heading
					tagNumber={2}
					headingText={content.title}
					className={style.heading}
				/>
				<>
					{content.description.map((text) => (
						<Text key={uid()}>{text}</Text>
					))}
				</>
			</section>
			<section className={accordionSectionClass}>
				<Heading
					tagNumber={3}
					headingText="Component examples"
					className={style.heading}
				/>
				<Accordion
					icon="Caret"
					btnClass={style.accordionBtn}
					allowMultipleOpen={true}
				>
					{content.accordion.map((item) => (
						<div
							key={item.title}
							title={item.title}
							data-btnChild={componentBuilder(item.component)}
						>
							<SyntaxHighlighter language="javascript" style={vs}>
								{item.example}
							</SyntaxHighlighter>
						</div>
					))}
				</Accordion>
			</section>
			<section className={propsSectionClass}>
				<Heading
					tagNumber={3}
					headingText="Props table"
					className={style.heading}
				/>
				<PropsTable content={content.propsData} />
			</section>
		</PageLayout>
	);
};

export default ComponentPage;
