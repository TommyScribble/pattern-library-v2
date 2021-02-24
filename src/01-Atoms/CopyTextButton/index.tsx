import React from 'react';
import Button from '../Button';
import Icon from '../Icon';

type Props = {
	elToCopy: string;
};

const CopyTextButton = ({ elToCopy }: Props) => {
	const copyOnClick = (elRef: string) => {
		const textToCopy = document.querySelector(`#${elRef}`);
		// textToCopy.select();
		document.execCommand('copy');
	};

	return (
		<Button btnClass="copy" onClick={() => copyOnClick(elToCopy)}>
			<Icon iconName="Copy" />
		</Button>
	);
};

export default CopyTextButton;
