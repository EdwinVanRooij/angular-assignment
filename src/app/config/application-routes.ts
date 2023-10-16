export class ApplicationRoutes {
  private static ClientsPrefix = 'clients';

  static ClientsOverview = `${this.ClientsPrefix}/overview`;
  static ClientsCreate = `${this.ClientsPrefix}/create`;

  static NotFound = 'not-found';
}
