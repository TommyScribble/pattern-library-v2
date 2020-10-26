import React from 'react';

import { uid } from '../../helpers/helpFunctions';

type Props = {
	listItems: string[];
	ordered?: boolean;
};
const List = ({ listItems, ordered = false }: Props) => {
	const Element = ordered ? 'ol' : 'ul';
	return (
		<Element>
			{listItems.map((listItem: string) => (
				<li key={uid()}>{listItem}</li>
			))}
		</Element>
	);
};

export default List;
