import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
	selector: '[appHighlighted]',
	exportAs: 'hl',
})
export class HighlightedDirective {
	// If no input is provided, an empty string is passed by default.
	@Input('appHighlighted')
	isHighlighted: boolean | '' = false;

	featureIsEnabled: boolean = true;

	// Declaring an output event emitter on a directive, applies that output as a new output as if it was placed on
	// the element itself.
	@Output()
	toggleHighlightFunctionality = new EventEmitter<boolean>();

	// Using the `HostBinding` decorator, you can interact with any property of the element that this
	// directive is applied to.
	@HostBinding('class.highlighted')
	get shorthandClasses() {
		if (this.featureIsEnabled) {
			return this.isHighlighted;
		}

		return false;
	}

	@HostBinding('style.border')
	get color() {
		if (this.featureIsEnabled) {
			return this.isHighlighted ? '1px solid red' : '';
		}

		return '';
	}

	// Using the HostListener decorator, you can listen to any native DOM elements and respond to them.
	@HostListener('mouseover', ['$event'])
	mouseOver($event: any) {
		if (this.featureIsEnabled) {
			this.isHighlighted = true;
		}
	}

	@HostListener('click')
	toggleFeature() {
		this.featureIsEnabled = !this.featureIsEnabled;
		console.log(`Toggling the feature to ${this.featureIsEnabled}`);
		this.toggleHighlightFunctionality.emit(this.featureIsEnabled);
	}

	@HostListener('mouseleave')
	mouseLeave() {
		if (this.featureIsEnabled) {
			this.isHighlighted = false;
		}
	}

	// You can also write to DOM properties.
	// @HostBinding('attr.disabled')
	// get disabled() {
	// 	return 'true';
	// }

	// Because css classes are such a common property to interact with, there you can use this special
	// shorthand for it.
	// @HostBinding('className')
	// get cssClasses() {
	// 	return 'highlighted';
	// }
}
