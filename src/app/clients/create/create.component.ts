import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Client } from 'src/app/models/client';
import { addClient } from 'src/app/state/client/client.actions';
import { ClientState } from 'src/app/state/client/client.reducers';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  private letterOnlyRegex = /^[a-zA-Z\s]+$/;

  fieldIsRequired = 'Field is required';
  onlyLettersAllowed = 'Only letters allowed';

  clientFormGroup = this.formBuilder.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(this.letterOnlyRegex),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(this.letterOnlyRegex),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    streetName: new FormControl('', [Validators.required]),
    houseNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    postalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4} ?[A-Za-z]{2}$/),
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.pattern(this.letterOnlyRegex),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ClientState>,
    private dialogRef: MatDialogRef<CreateComponent>
  ) {}

  /**
   * Occurs when a client clicked 'Confirm' in the popup.
   */
  onConfirmCreateClient(): void {
    if (this.clientFormGroup.valid) {
      const clientData = this.clientFormGroup.value;

      // Map the data from the form onto our Client model
      const client: Client = {
        id: 1,
        firstName: clientData.firstName!,
        lastName: clientData.lastName!,
        email: clientData.email!,
        address: {
          streetName: clientData.streetName!,
          postalCode: clientData.postalCode!,
          houseNumber: clientData.houseNumber!,
          city: clientData.city!,
        },
      };

      // Dispatch the new client to the store. This ensures that all those
      // subscriptions that listen to it, are sent the this new client.
      this.store.dispatch(addClient({ client }));

      this.dialogRef.close();
    }
  }

  getFirstNameErrorMessage(): string {
    if (this.clientFormGroup.controls.firstName.hasError('required')) {
      return this.fieldIsRequired;
    }

    return this.onlyLettersAllowed;
  }

  getLastNameErrorMessage(): string {
    if (this.clientFormGroup.controls.lastName.hasError('required')) {
      return this.fieldIsRequired;
    }

    return this.onlyLettersAllowed;
  }

  getEmailErrorMessage(): string {
    if (this.clientFormGroup.controls.email.hasError('required')) {
      return this.fieldIsRequired;
    }

    if (this.clientFormGroup.controls.email.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }

  getHouseNumberErrorMessage(): string {
    if (this.clientFormGroup.controls.houseNumber.hasError('required')) {
      return this.fieldIsRequired;
    }

    return 'Only digits allowed';
  }

  getPostalCodeErrorMessage(): string {
    if (this.clientFormGroup.controls.postalCode.hasError('required')) {
      return this.fieldIsRequired;
    }

    return "Please follow the format '1234 AB' (4 digits, 2 letters)";
  }
}
