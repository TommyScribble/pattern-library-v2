import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PageLayout from '../../Templates/PageLayout';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import Heading from '../../Atoms/Heading';
import Accordion from '../../Objects/Accordion/Accordion';
import PropsTable from '../../Objects/PropsTable';
import { uid } from '../../helpers/helpFunctions';
import { ComponentPageProps } from '../../typings/types';

import style from '../../styles/page/button.module.scss';

const ComponentPage = ({ content }: ComponentPageProps) => {
	return (
		<PageLayout>
			<Heading
				tagNumber={2}
				headingText="Buttons"
				className={style.heading}
			/>
			<>
				{content.description.map((text) => {
					return <Text key={uid()}>{text}</Text>;
				})}
			</>
			<Heading
				tagNumber={3}
				headingText="Component example accordions"
				className={style.heading}
			/>
			<Accordion
				icon="Caret"
				btnChildStyle={style.accordionBtn}
				allowMultipleOpen={true}
			>
				{content.accordion.map((item) => {
					return (
						<div
							key={item.title}
							title={item.title}
							data-btnChild={
								<Button btnClass={item.btnClass}>
									{item.btnText}
								</Button>
							}
						>
							<SyntaxHighlighter language="javascript" style={vs}>
								{item.btnExample}
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
			<PropsTable content={content.props} />
		</PageLayout>
	);
};

export default ComponentPage;
