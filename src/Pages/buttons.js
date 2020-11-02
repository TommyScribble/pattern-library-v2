import React from 'react';
import PageLayout from '../Templates/PageLayout';
import Text from '../Atoms/Text';
import Button from '../Atoms/Button';

const buttons = (props) => {
	return (
		<PageLayout>
			<Text>This is the buttons page</Text>
			<Button test="button" btnClass={'primary'}>
				Primary
			</Button>
			<Button test="button" btnClass={'secondary'}>
				Seconday
			</Button>
			<Button test="button" btnClass={'ghost'}>
				Ghost
			</Button>
			<Button test="button" btnClass={'disabled'}>
				Disabled
			</Button>
		</PageLayout>
	);
};

export default buttons;
