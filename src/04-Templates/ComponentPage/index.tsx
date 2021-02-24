import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PageLayout from '../PageLayout';
import Text from '../../01-Atoms/Text';
import Button from '../../01-Atoms/Button';
import Heading from '../../01-Atoms/Heading';
import Accordion from '../../02-Objects/Accordion/Accordion';
import PropsTable from '../../02-Objects/PropsTable';
import { uid } from '../../helpers/helpFunctions';
import { ComponentPageProps } from '../../typings/types';

import style from './componentpage.module.scss';
import component from '../../helpers/component';

const ComponentPage = ({ content }: ComponentPageProps) => {
	return (
		<PageLayout>
			<Heading
				tagNumber={2}
				headingText={content.title}
				className={style.heading}
			/>
			<>
				{content.description.map((text) => {
					return <Text key={uid()}>{text}</Text>;
				})}
			</>
			<Heading
				tagNumber={3}
				headingText="Component examples"
				className={style.heading}
			/>
			<Accordion
				icon="Caret"
				btnChildStyle={style.accordionBtn}
				allowMultipleOpen={true}
			>
				{content.accordion.map((item) => {
					console.log(item.component);

					return (
						<div
							key={item.title}
							title={item.title}
							data-btnChild={component(item.component)}
						>
							<SyntaxHighlighter language="javascript" style={vs}>
								{'put some good stuff here'}
							</SyntaxHighlighter>
						</div>
					);
				})}
			</Accordion>
			<Heading
				tagNumber={3}
				headingText="Props table"
				className={style.heading}
			/>
			<PropsTable content={content.propsData} />
		</PageLayout>
	);
};

export default ComponentPage;
