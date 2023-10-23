import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/models/client';

export const initializeClientStore = createAction(
  '[Client] Initialize Client Store'
);

export const setLoadingClients = createAction(
  '[Client] Set Loading Clients',
  (isLoadingClients: boolean) => ({ isLoadingClients })
);

export const setClients = createAction(
  '[Client] Set All Clients',
  (clients: Client[]) => ({ clients })
);

export const addClient = createAction(
  '[Client] Add',
  props<{ client: Client }>()
);
