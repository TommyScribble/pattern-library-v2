import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PageLayout from '../../Templates/PageLayout';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import Heading from '../../Atoms/Heading';
import Accordion from '../../Objects/Accordion/Accordion';
import PropsTable from '../../Objects/PropsTable';

import content from '../../PageData/ButtonspageData.json';
import style from '../../styles/page/button.module.scss';

const buttons = () => {
	return (
		<PageLayout>
			<Heading
				tagNumber={2}
				headingText="Buttons"
				className={style.heading}
			/>
			<Text>
				Buttons come in multiple flavours to help communicate an action
				that will occur to users. They contain a text label to
				communicate the action and can also contain icons (coming soon).
				Make sure to use the correct one for your use case.
			</Text>
			<Text>
				Primary buttons are used for the most important actions,
				positive and progressive. It should be used to help guide users
				to pick the correct action but dont use to many Primary buttons
				or the user will not unserstand what to choose.
			</Text>
			<Text>
				Secondary buttons should be used to in conjunction with primary
				buttons to commincate a choice. In effect they should be the
				second most used button.
			</Text>
			<Text>
				Line buttons (or tertiary buttons) can be used interchangably
				with secondary buttons when needed.
			</Text>
			<Text>
				Link buttons should only be used where a link style is needed to
				communicate an action. Dont use this button for any kind of
				links or navigation.
			</Text>
			<Text>
				Disabled buttons should only be used to communicate to users the
				importance of completing a step. When they show a blocked state
				a clear path must be show to escape it.
			</Text>
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

export default buttons;
