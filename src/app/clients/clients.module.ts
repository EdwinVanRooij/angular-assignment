import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';

// I'm just importing this here for now manually, but ideally you'd have a
// shared module with these kinds of imports so that you can reuse them in other
// modules.
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [DetailsComponent, OverviewComponent, CreateComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class ClientsModule {}
