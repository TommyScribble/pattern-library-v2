export const uid = (keyId: string = 'ID') =>
	keyId + Math.random().toString(36).substr(2, 9);
