import React from 'react';

import Header from '../../Sections/Header';
import Footer from '../../Sections/Footer';

import Main from '../../Sections/Main';

type Props = {
	children: JSX.Element[];
};

const PageLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
};

export default PageLayout;
