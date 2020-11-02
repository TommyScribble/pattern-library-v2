import React from 'react';

import Heading from '../../Atoms/Heading';
import Text from '../../Atoms/Text';
import Anchor from '../../Atoms/Anchor';

import styles from './Home.module.scss';

const Home = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<Heading
					tagNumber={1}
					className={styles.title}
					headingText="React and Typescript Starter"
				/>
				<Text className={styles.para}>
					This project includes all the essentials to get up and
					running in minutes.
				</Text>
				<Text className={styles.para}>
					Click on the links below to download and view more
					information about it.
				</Text>
				<Anchor
					className={styles.link}
					path="https://github.com/TommyScribble/react-typescript-biolerplate"
				>
					View and download this repo on Github
				</Anchor>
				<Anchor
					className={styles.link}
					linkType="internal"
					path="/about"
				>
					More info about this repo
				</Anchor>
			</header>
		</div>
	);
};

export default Home;
