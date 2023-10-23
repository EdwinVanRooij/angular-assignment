import { Person } from 'src/app/models/person';

export class SetLoadingPersons {
  static readonly type = '[Persons] Set Loading';
  constructor(public isLoadingPersons: boolean) {}
}

export class SetPersons {
  static readonly type = '[Persons] Set Persons';
  constructor(public persons: Person[]) {}
}

export class AddPerson {
  static readonly type = '[Persons] Add Person';
  constructor(public person: Person) {}
}
