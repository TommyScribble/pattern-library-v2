import React from 'react';
import { Link } from '@reach/router';

import style from './Error.module.scss';

type Props = {
	default: boolean;
};

const NotFound: React.FC<Props> = (props) => {
	return (
		<section className={style.container}>
			<h1 className={style.title}>404</h1>
			<p className={style.content}>
				Sorrry the page page you are looking for is not here please go
				back to the <Link to="/">homepage</Link>
			</p>
		</section>
	);
};

export default NotFound;
