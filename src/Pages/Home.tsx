import React from 'react';

import Heading from '../Atoms/Heading';
import Text from '../Atoms/Text';
import Anchor from '../Atoms/Anchor';

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
					It's currently still WIP, so check back soon for the
					complete version
				</Text>
				<Anchor
					className={styles.link}
					path="https://github.com/TommyScribble/react-typescript-biolerplate"
				>
					View the repo on Github
				</Anchor>
				<Anchor
					className={styles.link}
					linkType="internal"
					path="/about"
				>
					Some info and another route here
				</Anchor>
			</header>
		</div>
	);
};

export default Home;