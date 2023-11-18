export interface Client {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	imageUrl?: string;
	address: {
		streetName: string;
		postalCode: string;
		houseNumber: string;
		city: string;
	};
}
