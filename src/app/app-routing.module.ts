import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from './config/application-routes';
import { OverviewComponent } from './clients/overview/overview.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ApplicationRoutes.ClientsOverview,
    pathMatch: 'full',
  },
  {
    // TODO (out of scope for this assignment): implement authorization and
    // authentication guards to protect this module from non-logged in users and
    // non-authorized users
    path: ApplicationRoutes.ClientsOverview,
    component: OverviewComponent,
  },
  {
    path: ApplicationRoutes.NotFound,
    component: NotFoundComponent,
  },
  {
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
