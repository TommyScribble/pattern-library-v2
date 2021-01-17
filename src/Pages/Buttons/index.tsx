import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

import PageLayout from '../../Templates/PageLayout';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import Heading from '../../Atoms/Heading';
import Accordion from '../../Objects/Accordion/Accordion';

import style from '../../styles/page/button.module.scss';

const primaryButton = '<Button btnClass="primary">Primary</Button>';
const secondaryButton = '<Button btnClass="secondary">Seconday</Button>';
const lineButton = '<Button btnClass="line">Line</Button>';
const linkButton = '<Button btnClass="link">Link</Button>';
const disabledButton = '<Button btnClass="disabled">Disabled</Button>';

const buttons = () => {
	return (
		<PageLayout>
			<Heading
				tagNumber={2}
				headingText="Buttons"
				className={style.heading}
			/>
			<Text>
				Buttons come in multiple flavours, use the props to define which
				you want to display.
			</Text>
			<Accordion
				icon="Caret"
				btnChildStyle={style.accordionBtn}
				allowMultipleOpen={true}
			>
				<div
					title="Primary button"
					data-btnChild={<Button btnClass="primary">Primary</Button>}
				>
					<SyntaxHighlighter language="javascript" style={vs}>
						{primaryButton}
					</SyntaxHighlighter>
				</div>
				<div
					title="Secondary button"
					data-btnChild={
						<Button btnClass="secondary">Seconday</Button>
					}
				>
					<SyntaxHighlighter language="javascript" style={vs}>
						{secondaryButton}
					</SyntaxHighlighter>
				</div>
				<div
					title="Line button"
					data-btnChild={<Button btnClass="line">Line</Button>}
				>
					<SyntaxHighlighter language="javascript" style={vs}>
						{lineButton}
					</SyntaxHighlighter>
				</div>
				<div
					title="Link button"
					data-btnChild={<Button btnClass="link">Link</Button>}
				>
					<SyntaxHighlighter language="javascript" style={vs}>
						{linkButton}
					</SyntaxHighlighter>
				</div>
				<div
					title="Disabled button"
					data-btnChild={
						<Button btnClass="disabled">Disabled</Button>
					}
				>
					<SyntaxHighlighter language="javascript" style={vs}>
						{disabledButton}
					</SyntaxHighlighter>
				</div>
			</Accordion>
		</PageLayout>
	);
};

export default buttons;
