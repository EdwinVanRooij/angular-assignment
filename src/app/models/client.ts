export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    streetName: string;
    postalCode: string;
    houseNumber: number;
    city: string;
  };
}
