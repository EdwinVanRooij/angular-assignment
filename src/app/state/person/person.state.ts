import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AddPerson, SetLoadingPersons, SetPersons } from './person.actions';
import { Person } from 'src/app/models/person';

export interface PersonStateModel {
  persons: Person[];
  isLoadingPersons: boolean;
}

// Define the initial state
const initialState: PersonStateModel = {
  persons: [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
  ],
  isLoadingPersons: true,
};

// Create the state class
@State<PersonStateModel>({
  name: 'persons',
  defaults: initialState,
})
@Injectable()
export class PersonsState {
  @Action(SetLoadingPersons)
  setLoadingPersons(
    ctx: StateContext<PersonStateModel>,
    { isLoadingPersons }: SetLoadingPersons
  ) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoadingPersons: isLoadingPersons,
    });
  }

  @Action(SetPersons)
  setPersons(ctx: StateContext<PersonStateModel>, { persons }: SetPersons) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      persons: [...persons],
    });
  }

  @Action(AddPerson)
  addPerson(ctx: StateContext<PersonStateModel>, { person }: AddPerson) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      persons: [...state.persons, person],
    });
  }
}
