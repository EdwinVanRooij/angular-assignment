import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from './config/application-routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverviewComponent as ClientOverviewComponent } from './clients/overview/overview.component';
import { OverviewComponent as PersonOverviewComponent } from './persons/overview/overview.component';

const routes: Routes = [
  {
    // Reroute the root URL to the (currently) only page of this application: Clients Overview
    path: '',
    redirectTo: ApplicationRoutes.ClientsOverview,
    pathMatch: 'full',
  },
  {
    // TODO (out of scope for this assignment): implement authorization and
    // authentication guards to protect this module from non-logged in users and
    // non-authorized users.
    path: ApplicationRoutes.ClientsOverview,
    // Since we are lazy loading modules, ensure children are loaded once we hit this route.
    loadChildren: () =>
      import('./clients/clients.module').then((module) => module.ClientsModule),
    component: ClientOverviewComponent,
  },
  {
    path: ApplicationRoutes.PersonsOverview,
    loadChildren: () =>
      import('./persons/persons.module').then((module) => module.PersonsModule),
    component: PersonOverviewComponent,
  },
  {
    path: ApplicationRoutes.NotFound,
    component: NotFoundComponent,
  },
  {
    // Reroute any incorrect path attempts
    path: '**',
    redirectTo: ApplicationRoutes.NotFound,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
