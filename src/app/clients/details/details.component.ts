import {
	AfterContentInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	Input,
	QueryList,
	TemplateRef,
} from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements AfterContentInit {
	@Input({ required: true }) client!: Client;

	@Input()
	noImageTemplate!: TemplateRef<any>;

	// Select an <hr> element by ContentChild instead of ViewChild, because it's inserted using content projection.
	// Note that just like in `app.component.ts`, you can select a specific Angular component type as well.
	@ContentChild('horizontalRuler')
	horizontalRuler!: ElementRef;

	@ContentChildren('extraTextElements')
	extraTextElements!: QueryList<ElementRef>;

	ngAfterContentInit(): void {
		console.log(
			`Found a horizontal ruler's element reference by using the ContentChild(...) decorator, ` +
				`selecting it by its template ID: ${this.horizontalRuler}`
		);

		console.log(
			`Found a few text elements by using the ContentChildren(...) decorator: ${this.extraTextElements.length}. ` +
				`About to print their contents:`
		);
		for (const extraTextElement of this.extraTextElements) {
			console.log(extraTextElement.nativeElement.textContent);
		}
	}
}
