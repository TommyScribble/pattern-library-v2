import React from 'react';

import Header from '../../03-Sections/Header';
import Footer from '../../03-Sections/Footer';

import Main from '../../03-Sections/Main';

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
