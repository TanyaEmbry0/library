import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  emailPattern = /^[a-zA-Z0-9.!#$%&'+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/;
  phoneNumberPattern = /\+\d{1,3}[ ]?\d{3,15}\b/;

  registerForm = this.fb.group({
    firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)]),
    lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)]),
    email: new FormControl('', [
        Validators.required,
        Validators.maxLength(256),
        Validators.pattern(this.emailPattern)]),
    phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(this.phoneNumberPattern)]),
    password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordPattern)]),
    country: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)]),
    city: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)]),
    street: new FormControl('', [
        Validators.required,
        Validators.maxLength(128)]),
    streetNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(65)]),
    buildingNumber: new FormControl('', [
        Validators.maxLength(65),]),
    apartmentNumber: new FormControl('', [
        Validators.maxLength(65),]),
    additionalInfo: new FormControl('', [
        Validators.maxLength(1028),]),

  });


    constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.registerForm);
    console.log(this.streetNumber);


  }

  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.registerForm.get('phoneNumber') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get country(): FormControl {
    return this.registerForm.get('country') as FormControl;
  }

  get city(): FormControl {
    return this.registerForm.get('city') as FormControl;
  }

  get street(): FormControl {
    return this.registerForm.get('street') as FormControl;
  }

  get streetNumber(): FormControl {
    return this.registerForm.get('streetNumber') as FormControl;
  }

  get buildingNumber(): FormControl {
    return this.registerForm.get('buildingNumber') as FormControl;
  }

  get apartmentNumber(): FormControl {
    return this.registerForm.get('apartmentNumber') as FormControl;
  }

  get additionalInfo(): FormControl {
    return this.registerForm.get('additionalInfo') as FormControl;
  }



  submitRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.streetNumber);
    this.authenticationService
      .adminRegister(this.registerForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.router.navigate(['/admin'])
          console.log(response);

        },
        error: (error) => {
          alert(error.error.message);
        },
      });
  }
}
