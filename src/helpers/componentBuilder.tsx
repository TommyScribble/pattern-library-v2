import React from 'react';

import Anchor from '../01-Atoms/Anchor';
import Button from '../01-Atoms/Button';

const ComponentMap: any = {
	anchor: Anchor,
	// button: Button,
};

type Props = {
	name: keyof typeof ComponentMap;
	props: any;
};

const componentBuilder = ({ props, name }: Props) => {
	console.log('PROPS', props, name);

	if (typeof ComponentMap[name] !== 'undefined') {
		return React.createElement(ComponentMap[name], props, [
			...props.children,
		]);
	}

	return console.log("That's not a component fool!");
};

export default componentBuilder;
