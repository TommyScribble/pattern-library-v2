import React from 'react';

type Props = {
	listItems: string[];
};
const List = ({ listItems }: Props) => {
	return (
		<ul>
			{listItems.map((listItem: string) => (
				<li>{listItem}</li>
			))}
		</ul>
	);
};

export default List;
