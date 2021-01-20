export type ValueOf<T> = T[keyof T];

export type IconTypes = {
	iconName: 'Burger' | 'Cross' | 'Copy' | 'Caret' | 'Delete';
};

export enum Icons {
	Burger = 'Burger',
	Cross = 'Cross',
	Copy = 'Copy',
	Caret = 'Caret',
	Delete = 'Delete',
}

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

export type ComponentPageProps = {
	content: {
		description: string[];
		accordion: {
			title: string;
			btnClass: string;
			btnText: string;
			btnExample: string;
		}[];
		props: {
			name: string;
			required: string;
			type: string;
			description: string;
		}[];
	};
};
