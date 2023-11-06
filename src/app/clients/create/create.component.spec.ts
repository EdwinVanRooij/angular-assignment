import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { CreateComponent } from './create.component';
import { addClient } from 'src/app/state/client/client.actions';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Client } from 'src/app/models/client';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let store: Store;
  let dialogRef: MatDialogRef<CreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        NoopAnimationsModule,
        MaterialModule,
        CommonModule,
      ],
      declarations: [CreateComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            select: jest.fn(),
          },
        },
        {
          provide: MatDialogRef,
          useValue: {
            close: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    dialogRef = TestBed.inject(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form validation', () => {
    it('should mark firstName as invalid if empty', () => {
      component.clientFormGroup.get('firstName')?.setValue('');
      expect(component.clientFormGroup.get('firstName')?.invalid).toBeTruthy();
    });
  });

  describe('When form is submitted', () => {
    let dispatchedAction: any;

    beforeEach(() => {
      jest.clearAllMocks();
      dispatchedAction = null;

      jest.spyOn(store, 'dispatch').mockImplementation((action: any) => {
        dispatchedAction = action;
      });
    });

    it('should dispatch addClient action if form is valid', () => {
      const expectedClient: Client = {
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

      const formValue = {
        firstName: expectedClient.firstName,
        lastName: expectedClient.lastName,
        email: expectedClient.email,
        streetName: expectedClient.address.streetName,
        houseNumber: expectedClient.address.houseNumber,
        postalCode: expectedClient.address.postalCode,
        city: expectedClient.address.city,
      };

      component.clientFormGroup.setValue(formValue);

      component.onConfirmCreateClient();

      expect(dispatchedAction).toBeDefined();
      expect(dispatchedAction.type).toBe('[Client] Add');
      expect(dispatchedAction.client).toEqual(expectedClient);
    });

    it('should close the dialog after dispatching addClient', () => {
      const closeSpy = jest.spyOn(dialogRef, 'close');
      component.clientFormGroup.setValue({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        streetName: 'Baker',
        houseNumber: '21',
        postalCode: '1234 AB',
        city: 'Utrecht',
      });

      component.onConfirmCreateClient();

      expect(closeSpy).toHaveBeenCalled();
    });

    it('should not dispatch addClient action if form is invalid', () => {
      const spy = jest.spyOn(store, 'dispatch');
      component.clientFormGroup.setValue({
        // Set a sample invalid form value
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        houseNumber: '',
        postalCode: '',
        city: '',
      });
      component.onConfirmCreateClient();
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
