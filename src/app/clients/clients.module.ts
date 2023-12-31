import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';
import { MaterialModule } from '../shared/material/material.module';
import { UtilitiesModule } from '../shared/utilities/utilities.module';
import { ClientComponent } from './client/client.component';

@NgModule({
	declarations: [DetailsComponent, OverviewComponent, CreateComponent, ClientComponent],
	imports: [CommonModule, MaterialModule, UtilitiesModule, NgOptimizedImage],
})
export class ClientsModule {}
