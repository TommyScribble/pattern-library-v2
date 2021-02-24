import React from 'react';

import { Link } from '@reach/router';

type Props = {
	anchor: string;
	logo: string;
	altText: string;
	logoClass?: string;
	linkClass?: string;
};

const Logo: React.FC<Props> = ({
	linkClass,
	logoClass,
	anchor,
	logo,
	altText,
}: Props) => {
	return (
		<Link className={linkClass} to={anchor}>
			<img className={logoClass} src={logo} alt={altText} />
		</Link>
	);
};

export default Logo;
