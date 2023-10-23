import { createReducer, on } from '@ngrx/store';
import * as ClientActions from './client.actions';
import { Client } from 'src/app/models/client';

// Define what can be found in this store
export interface ClientState {
  clients: Client[];
  isLoadingClients: boolean;
}

export const initialState: ClientState = {
  clients: [],
  isLoadingClients: true,
};

export const clientReducer = createReducer(
  initialState,
  on(
    ClientActions.setLoadingClients,
    (state, { isLoadingClients }): ClientState => {
      return { ...state, isLoadingClients: isLoadingClients };
    }
  ),
  on(ClientActions.setClients, (state, { clients }): ClientState => {
    return { ...state, clients: [...clients] };
  }),
  on(ClientActions.addClient, (state, { client }): ClientState => {
    return { ...state, clients: [...state.clients, client] };
  })
);
