import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';
import { MaterialModule } from '../shared/material/material.module';
import { UtilitiesModule } from '../shared/utilities/utilities.module';

@NgModule({
  declarations: [DetailsComponent, OverviewComponent, CreateComponent],
  imports: [CommonModule, MaterialModule, UtilitiesModule],
})
export class ClientsModule {}
