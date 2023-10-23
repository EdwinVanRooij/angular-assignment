export class ApplicationRoutes {
  private static ClientsPrefix = 'clients';
  private static PersonsPrefix = 'persons';

  static ClientsOverview = `${this.ClientsPrefix}/overview`;
  static ClientsCreate = `${this.ClientsPrefix}/create`;

  static PersonsOverview = `${this.PersonsPrefix}/overview`;

  static NotFound = 'not-found';
}
