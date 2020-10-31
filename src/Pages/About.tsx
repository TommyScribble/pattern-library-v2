import React, { useEffect, useState } from 'react';
import marked from 'marked';

import Anchor from '../Atoms/Anchor';

import style from './About.module.scss';

const Readme = () => {
	const [readmeText, setReadmeText] = useState('');

	useEffect(() => {
		fetch('README.md')
			.then((response) => response.text())
			.then((text) => setReadmeText(marked(text)));
	}, []);

	return (
		<main className={style.aboutPage}>
			<Anchor path="/" linkType="internal">
				Back to homepage
			</Anchor>
			<div
				className={style.aboutPage__content}
				dangerouslySetInnerHTML={{ __html: marked(readmeText) }}
			></div>
			<Anchor path="/" linkType="internal">
				Back to homepage
			</Anchor>
		</main>
	);
};

export default Readme;
