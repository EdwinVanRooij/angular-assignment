import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import * as ClientActions from './client.actions';

@Injectable()
export class ClientEffects {
  loadClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientActions.initializeClientStore),
      mergeMap(() => this.clientService.getAll()),
      map((clients) => ClientActions.setClients(clients))
    )
  );

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}
}
