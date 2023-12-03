import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { delay, map, mergeMap, tap } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import * as ClientActions from './client.actions';
import { CLIENT_SERVICE } from '../../utilities/client-service-provider';

@Injectable()
export class ClientEffects {
	loadClient$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ClientActions.initializeClientStore),
			tap(() => this.store.dispatch(ClientActions.setLoadingClients(true))),
			delay(500),
			mergeMap(() => this.clientService.getAll()),
			map((clients) => ClientActions.setClients(clients)),
			tap(() => this.store.dispatch(ClientActions.setLoadingClients(false)))
		)
	);

	constructor(
		private actions$: Actions,
		@Inject(CLIENT_SERVICE) private clientService: ClientService,
		private store: Store
	) {}
}
