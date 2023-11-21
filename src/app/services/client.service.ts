import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
	providedIn: 'root',
})
export class ClientService {
	constructor(private httpClient: HttpClient) {}

	getAll(): Observable<Client[]> {
		// For this assignment, pretend these clients are fetched from a backend
		// service.
		return this.httpClient.get<Client[]>('/assets/clients.json');
	}
}
