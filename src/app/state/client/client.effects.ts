import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ClientActions from './client.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class ClientEffects {
  loadClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientActions.initializeClientStore)
      /* effect logic here */
    )
  );

  constructor(private actions$: Actions) {}
}
