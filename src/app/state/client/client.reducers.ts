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
  on(ClientActions.addClient, (state, { client }) => {
    return { ...state, clients: [...state.clients, client] };
  })
);
