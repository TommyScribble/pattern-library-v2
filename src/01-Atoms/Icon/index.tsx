import IconObj from './IconObj';

import { IconTypes } from '../../typings/types';

const Icon = ({ iconName }: IconTypes): JSX.Element | null => {
	const iconType = IconObj[iconName];

	if (iconType) return iconType;
	if (!iconType) {
		console.log('check the iconName prop is currect');
		return null;
	}
	return null;
};
export default Icon;
