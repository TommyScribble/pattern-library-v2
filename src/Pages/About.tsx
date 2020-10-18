import React from 'react';
import Anchor from '../Atoms/Anchor';

import Heading from '../Atoms/Heading';
import List from '../Atoms/List';
import Text from '../Atoms/Text';

import style from './About.module.scss';

const appIncludes = [
	'Typescript',
	'Atomic components',
	'Unit tests (Jest & React Testing Library)',
	'CSS modules (using SCSS)',
	'Base styles (globals/mixins/functions/component)',
	'Folder structure',
	'Linting (eslint/stylelint) - using precommmit hook',
];

const Readme = () => {
	return (
		<main className={style.aboutPage}>
			<Heading
				tagNumber={1}
				headingText="React / Typescript Biolerplater"
			/>
			<Text>
				This starter project is meant to get you up and running with all
				the essentails to start building you project immediatley. It
				contains all the basic building block to get started quickly and
				safely.
			</Text>
			<List listItems={appIncludes} />
			<Anchor path="/" linkType="internal">
				Back to homepage
			</Anchor>
		</main>
	);
};

export default Readme;
