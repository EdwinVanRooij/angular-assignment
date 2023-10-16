import * as fromClients from './client.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreKeys } from '../store-keys';

export const selectClientState = createFeatureSelector<fromClients.ClientState>(
  StoreKeys.Client
);

export const selectClients = createSelector(
  selectClientState,
  (state: fromClients.ClientState) => state.clients
);

// Dispatch add client:
// this.store.dispatch(addClient({ client: newClient }));

// Select clients:
// this.clients$ = this.store.select(state => state.clients);
