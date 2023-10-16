import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  fieldIsRequired = 'This field is required';
  onlyLettersAllowed = 'Only letters are allowed';

  // Define all form controls. Validators are set here, which trigger the errors
  // defined in the template.
  firstName = new FormControl('', [
    Validators.required,
    Validators.pattern(this.letterOnlyRegex),
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.pattern(this.letterOnlyRegex),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  streetName = new FormControl('', Validators.required);
  houseNumber = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+$/),
  ]);
  postalCode = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{4} ?[A-Za-z]{2}$/),
  ]);
  city = new FormControl('', [
    Validators.required,
    Validators.pattern(this.letterOnlyRegex),
  ]);

  clientFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ClientState>,
    private dialogRef: MatDialogRef<CreateComponent>
  ) {
    this.clientFormGroup = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      streetName: this.streetName,
      houseNumber: this.houseNumber,
      postalCode: this.postalCode,
      city: this.city,
    });
  }

  /**
   * Occurs when a client clicked 'Confirm' in the popup.
   */
  onConfirmCreateClient(): void {
    if (this.clientFormGroup.valid) {
      const clientData = this.clientFormGroup.value;

      // Map the data from the form onto our Client model
      const client: Client = {
        ...clientData,
        address: {
          ...clientData,
        },
      };

      // Dispatch the new client to the store. This ensures that all those
      // subscriptions that listen to it, are sent the this new client.
      this.store.dispatch(addClient({ client }));

      this.dialogRef.close();
    }
  }

  getFirstNameErrorMessage(): string {
    if (this.firstName.hasError('required')) {
      return this.fieldIsRequired;
    }

    return this.onlyLettersAllowed;
  }

  getLastNameErrorMessage(): string {
    if (this.lastName.hasError('required')) {
      return this.fieldIsRequired;
    }

    return this.onlyLettersAllowed;
  }

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return this.fieldIsRequired;
    }

    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }

  getHouseNumberErrorMessage(): string {
    if (this.postalCode.hasError('required')) {
      return this.fieldIsRequired;
    }

    return "Please follow the format '12' (2 digits)";
  }

  getPostalCodeErrorMessage(): string {
    if (this.postalCode.hasError('required')) {
      return this.fieldIsRequired;
    }

    return "Please follow the format '1234 AB' (4 digits, 2 letters)";
  }
}
