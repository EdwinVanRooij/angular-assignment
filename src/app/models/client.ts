export interface Client {
  id: number;
  name: string;
  surname: string;
  email: string;
  address: {
    streetName: string;
    postCode: string;
    houseNumber: number;
    city: string;
  };
}
