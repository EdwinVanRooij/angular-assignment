import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  getAll(): Observable<Client[]> {
    // For this assignment, pretend these clients are fetched from a backend
    // service. Add some time to account for network traffic delay.
    return of(ClientService.generateDummyClients(10)).pipe(delay(500));
    // return of(ClientService.generateDummyClients(15)).pipe(delay(2500));

    // Otherwise, it could look something like this.
    // const baseUrl = "some-base-url-from-a-config-file";
    // return this.httpClient.get<Client[]>(`${baseUrl}/clients`);
  }

  private static generateDummyClients(quantity: number): Client[] {
    const clients: Client[] = [];

    for (let index = 1; index <= quantity; index++) {
      const client: Client = {
        id: index,
        name: `Name${index}`,
        surname: `Surname${index}`,
        email: `email${index}@example.com`,
        address: {
          streetName: `Street${index}`,
          postCode: `PostCode${index}`,
          houseNumber: index,
          city: `City${index}`,
        },
      };

      clients.push(client);
    }

    return clients;
  }
}
