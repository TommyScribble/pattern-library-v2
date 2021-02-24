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

export type HomepageProps = {
	content: {
		heading: string;
		text: string[];
		links: {
			path: string;
			linkType: string;
			text: string;
		}[];
	};
};

export type ComponentPageProps = {
	content: {
		title: string;
		description: string[];
		accordion: {
			title: string;
			component: any;
		}[];
		propsData: {
			name: string;
			required: string;
			type: string;
			description: string;
		}[];
	};
};
