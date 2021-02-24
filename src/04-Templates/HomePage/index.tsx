import React from 'react';

import PageLayout from '../PageLayout';
import Heading from '../../01-Atoms/Heading';
import Text from '../../01-Atoms/Text';
import Anchor from '../../01-Atoms/Anchor';
import { uid } from '../../helpers/helpFunctions';

import { HomepageProps } from '../../typings/types';
import style from './homepage.module.scss';

const HomePage = ({ content }: HomepageProps) => {
	return (
		<PageLayout>
			<Heading tagNumber={3} headingText={content.heading} />
			<>
				{content.text.map((item: any) => {
					return <Text key={uid()}>{item}</Text>;
				})}

				{content.links.map((link: any) => {
					return (
						<Anchor
							key={uid()}
							path={link.path}
							anchorClass={style.links}
							linkType={link.linkType}
						>
							{link.text}
						</Anchor>
					);
				})}
			</>
		</PageLayout>
	);
};

export default HomePage;
