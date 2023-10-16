import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [DetailsComponent, OverviewComponent, CreateComponent],
  imports: [CommonModule],
})
export class ClientsModule {}
