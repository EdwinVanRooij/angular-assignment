import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MaterialModule } from '../material/material.module';
import { HighlightedDirective } from '../directives/highlighted.directive';

@NgModule({
	declarations: [PlaceholderComponent, HighlightedDirective],
	imports: [CommonModule, MaterialModule],
	exports: [PlaceholderComponent, HighlightedDirective],
})
export class UtilitiesModule {}
