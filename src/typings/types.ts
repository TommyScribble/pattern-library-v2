export type IconTypes = {
	iconName: 'Burger' | 'Cross' | 'Delete';
};

export type HomepageData = {
	content: {
		Heading: string;
		Text: string[];
		Links: {
			path: string;
			class: string;
			linkType: string;
			text: string;
		}[];
	};
};
