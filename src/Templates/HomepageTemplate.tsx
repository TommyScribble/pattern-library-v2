import React from 'react';

import PageLayout from '../Templates/PageLayout';
import Heading from '../Atoms/Heading';
import Text from '../Atoms/Text';
import Anchor from '../Atoms/Anchor';

import { uid } from '../helpers/helpFunctions';

const HomepageTemplate = ({ content }: any) => {
	return (
		<PageLayout>
			<Heading tagNumber={3} headingText={content.Heading} />
			{content.Text.map((item: string) => (
				<Text key={uid()}>{item}</Text>
			))}

			{content.Links.map(
				(link: {
					path: string;
					class: string;
					linkType?: 'internal' | 'navigation';
					text: string;
				}) => {
					return (
						<Anchor
							key={uid()}
							path={link.path}
							className={link.class}
							linkType={link.linkType}
						>
							{link.text}
						</Anchor>
					);
				}
			)}
		</PageLayout>
	);
};

export default HomepageTemplate;
