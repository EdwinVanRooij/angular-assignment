import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { initializeClientStore } from './state/client/client.actions';
import { MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
	// Like this, you can query the template for the FIRST matching
	// MatCardTitle.
	@ViewChild(MatCardTitle)
	matCardTitle!: MatCardTitle;

	// Like this, you can query the template for the FIRST matching
	// MatCardTitle, but obtain the native element reference by using
	// the `read` parameter.
	@ViewChild(MatCardSubtitle, { read: ElementRef })
	matCardSubtitle!: ElementRef;

	// This element is queried by its specific template id: `#routerOutletId`
	// in the html template.
	@ViewChild('routerOutletId')
	routerOutlet!: RouterOutlet;

	// In order to get the native element reference, pass the `read` parameter like before.
	@ViewChild('routerOutletId', { read: ElementRef })
	routerOutletElementRef!: ElementRef;

	// Since the outer container is a simple div (not an Angular component),
	// we automatically get an ElementRef back as type.
	@ViewChild('outerContainer')
	outerContainer!: ElementRef;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.store.dispatch(initializeClientStore());
	}

	ngAfterViewInit(): void {
		console.log(`Found a MatCardTitle element by an Angular template type query: ${this.matCardTitle}`);

		console.log(`Found a MatCardSubtitle's native element reference by type querying with a 'read' parameter.`);
		const previousValue = this.matCardSubtitle.nativeElement.textContent;
		this.matCardSubtitle.nativeElement.textContent = previousValue + ' And much more!';

		console.log(`Found a RouterOutlet by a template id: ${this.routerOutlet}`);
		console.log(`Found a RouterOutlet's element reference by a template id: ${this.routerOutletElementRef}`);
		console.log(`Found a div's element reference by a template id: ${this.outerContainer}`);
	}
}
