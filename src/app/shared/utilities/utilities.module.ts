import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MaterialModule } from '../material/material.module';
import { HighlightedDirective } from '../directives/highlighted.directive';
import { NgxUnlessDirective } from '../directives/ngx-unless.directive';

@NgModule({
	declarations: [PlaceholderComponent, HighlightedDirective, NgxUnlessDirective],
	imports: [CommonModule, MaterialModule],
	exports: [PlaceholderComponent, HighlightedDirective, NgxUnlessDirective],
})
export class UtilitiesModule {}
