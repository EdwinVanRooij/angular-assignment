import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PlaceholderComponent],
})
export class UtilitiesModule {}
