import { createReducer, on } from '@ngrx/store';
import * as ClientActions from './client.actions';
import { Client } from 'src/app/models/client';

// Define what can be found in this store
export interface ClientState {
  clients: Client[];
}

export const initialState: ClientState = {
  clients: [],
};

export const clientReducer = createReducer(
  initialState,
  on(ClientActions.setClients, (state, { clients }): ClientState => {
    return { ...state, clients: [...state.clients, ...clients] };
  }),
  on(ClientActions.addClient, (state, { client }): ClientState => {
    return { ...state, clients: [...state.clients, client] };
  })
);
