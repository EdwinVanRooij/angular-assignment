import * as fromClients from './client.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreKeys } from '../store-keys';

export const selectClientState = createFeatureSelector<fromClients.ClientState>(
  StoreKeys.Client
);

export const isLoadingClients = createSelector(
  selectClientState,
  (state: fromClients.ClientState) => state.isLoadingClients
);

export const selectClients = createSelector(
  selectClientState,
  (state: fromClients.ClientState) => state.clients
);
