import React from 'react';

import Anchor from '../01-Atoms/Anchor';
import Button from '../01-Atoms/Button';
import Heading from '../01-Atoms/Heading';
import Icon from '../01-Atoms/Icon';
import Text from '../01-Atoms/Text';

const ComponentMap: any = {
	anchor: Anchor,
	button: Button,
	heading: Heading,
	icon: Icon,
	text: Text,
};

type Props = {
	name: keyof typeof ComponentMap;
	props: any;
};

const componentBuilder = ({ props, name }: Props) => {
	if (typeof ComponentMap[name] !== 'undefined') {
		return React.createElement(ComponentMap[name], props, [
			...props.children,
		]);
	}

	return console.log("That's not a component fool!");
};

export default componentBuilder;
