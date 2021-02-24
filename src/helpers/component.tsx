import React from 'react';

import Anchor from '../01-Atoms/Anchor';
import Button from '../01-Atoms/Button';

const ComponentMap = {
	anchor: Anchor,
	button: Button,
};

type Props = {
	name: any;
	props: any;
};

const component = ({ props, name }: Props) => {
	console.log('PROPS', props, name);

	if (typeof ComponentMap[name] !== 'undefined') {
		return React.createElement(ComponentMap[name], { ...props }, null);
	}

	return console.log("That's not a component fool!");
};

export default component;
