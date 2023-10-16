import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  errorRequired = 'This field is required';

  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  streetName = new FormControl('', Validators.required);
  houseNumber = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+$/),
  ]);
  postalCode = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{4} [A-Za-z]{2}$/),
  ]);
  city = new FormControl('', Validators.required);

  clientFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

  getEmailErrorMessage(): string {
    if (this.email.hasError('required')) {
      return this.errorRequired;
    }

    if (this.email.hasError('email')) {
      return 'Not a valid email';
    }

    return '';
  }

  getHouseNumberErrorMessage(): string {
    if (this.postalCode.hasError('required')) {
      return this.errorRequired;
    }

    return "Please follow the format '12' (2 digits)";
  }

  getPostalCodeErrorMessage(): string {
    if (this.postalCode.hasError('required')) {
      return this.errorRequired;
    }

    return "Please follow the format '1234 AB' (4 digits, 2 letters)";
  }
}
