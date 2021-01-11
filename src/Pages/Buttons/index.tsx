import React from 'react';
import PageLayout from '../../Templates/PageLayout';
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import Heading from '../../Atoms/Heading';
import Accordion from '../../Objects/Accordion/Accordion';

import style from '../../styles/page/button.module.scss';

const buttons = () => {
	return (
		<PageLayout>
			<Heading
				tagNumber={2}
				headingText="Buttons"
				className={style.heading}
			/>
			<Text>Some descriptive text needs to go here</Text>
			<Accordion icon="Caret">
				<div
					title="First"
					data-btnChild={<Button btnClass="primary">Primary</Button>}
				>
					Some content
				</div>
				<div title="second">More content here</div>
			</Accordion>
			<Button btnClass={'primary'}>Primary</Button>
			<Button btnClass={'secondary'}>Seconday</Button>
			<Button btnClass={'line'}>Line</Button>
			<Button btnClass={'link'}>Link</Button>
			<Button btnClass={'disabled'}>Disabled</Button>
		</PageLayout>
	);
};

export default buttons;
