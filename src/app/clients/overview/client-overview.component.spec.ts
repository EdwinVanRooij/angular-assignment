import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { Client } from 'src/app/models/client';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UtilitiesModule } from 'src/app/shared/utilities/utilities.module';
import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;
	let store: Store;
	let dialog: MatDialog;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				CommonModule,
				UtilitiesModule,
				NoopAnimationsModule,
				ReactiveFormsModule,
				MatDialogModule,
			],
			declarations: [OverviewComponent],
			providers: [
				{
					provide: Store,
					useValue: {
						dispatch: jest.fn(),
						select: jest.fn(),
					},
				},
				{
					provide: MatDialog,
					useValue: {
						open: jest.fn(),
					},
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		store = TestBed.inject(Store);
		dialog = TestBed.inject(MatDialog);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should select a client', () => {
		const client: Client = {
			id: 1,
			firstName: 'John',
			lastName: 'Doe',
			email: 'johndoe@gmail.com',
			address: {
				streetName: 'Baker',
				houseNumber: '21',
				postalCode: '1234 AB',
				city: 'Utrecht',
			},
		};

		component.onSelectClient(client);

		expect(component.selectedClient).toEqual(client);
	});

	it('should open CreateComponent dialog on click plus', () => {
		const spy = jest.spyOn(dialog, 'open');
		component.onClickPlus();
		expect(spy).toHaveBeenCalled();
	});
});
