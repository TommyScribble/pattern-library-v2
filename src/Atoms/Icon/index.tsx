import IconObj from './IconObj';
 
const Icon = (props: {iconName: keyof typeof IconObj}): JSX.Element | null => {
	const {iconName} = props;
	const iconType = IconObj[iconName];

	if (iconType) return iconType;
	if (!iconType) {
		console.log('check the iconName prop is currect');
		return null;
	}
	return null;
	
}
export default Icon;
