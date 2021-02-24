import React from 'react';

import style from './Main.module.scss';

const Main = (props: { children: any }) => {
	const { children } = props;

	return (
		<main className={style.main}>
			<article className={style.article}>{children}</article>
		</main>
	);
};

export default Main;
