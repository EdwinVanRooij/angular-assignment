import {HttpClient} from '@angular/common/http';
import {ClientService} from '../services/client.service';
import {InjectionToken} from '@angular/core'; // These functions demonstrate how you can create your custom

// These functions demonstrate how you can create your custom
// dependency injection provider.
export const CLIENT_SERVICE = new InjectionToken<ClientService>('CLIENT_SERVICE');

export function clientServiceProvider(httpClient: HttpClient) {
	return new ClientService(httpClient);
}
