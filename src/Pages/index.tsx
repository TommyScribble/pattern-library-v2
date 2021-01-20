import React from 'react';

import PageLayout from '../Templates/PageLayout';
import Heading from '../Atoms/Heading';
import Text from '../Atoms/Text';
import Anchor from '../Atoms/Anchor';
import { uid } from '../helpers/helpFunctions';

import content from '../PageData/HomepageData.json';
import style from '../styles/page/homepage.module.scss';

const homepage = () => {
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
							className={style.links}
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

export default homepage;
