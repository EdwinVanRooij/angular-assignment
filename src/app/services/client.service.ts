import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from '../models/client';

// Normally, you would make this class available to Angular's dependency injection
// system like this. For demonstration purposes, we're doing it manually in this project.
// @Injectable({
// 	providedIn: 'root',
// })
export class ClientService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Client[]> {
		// For this assignment, pretend these clients are fetched from a backend
		// service.
		return this.httpClient.get<Client[]>('/assets/clients.json');
	}
}
