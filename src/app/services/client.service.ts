import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getAll(): Observable<Client[]> {
    // For this assignment, pretend these clients are fetched from a backend
    // service. Add some time to account for network traffic delay.
    return of(ClientService.generateDummyClients(25)).pipe(delay(1500));
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
        firstName: `Name ${index}`,
        lastName: `Last name ${index}`,
        email: `email${index}@example.com`,
        address: {
          streetName: `Some street`,
          postalCode: `${index}${index}${index}${index} AA`,
          houseNumber: index,
          city: `Some city`,
        },
      };

      clients.push(client);
    }

    return clients;
  }
}
