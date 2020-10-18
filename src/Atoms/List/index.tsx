import React from 'react';

import { uid } from '../../helpers/helpFunctions';

type Props = {
	listItems: string[];
};
const List = ({ listItems }: Props) => {
	return (
		<ul>
			{listItems.map((listItem: string) => (
				<li key={uid()}>{listItem}</li>
			))}
		</ul>
	);
};

export default List;
