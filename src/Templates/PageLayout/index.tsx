import React from 'react';

import Header from '../../Sections/Header';

import style from './PageLayout.module.scss';

type Props = {
	children: JSX.Element[];
};

const PageLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<main className={style['main-content']}>
				<article className="article">
					<div className="container">{children}</div>
				</article>
			</main>
		</>
	);
};

export default PageLayout;
