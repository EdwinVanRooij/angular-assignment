import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/models/client';

export const initializeClientStore = createAction(
  '[Client] Initialize Client Store'
);

export const addClient = createAction(
  '[Client] Add',
  props<{ client: Client }>()
);
