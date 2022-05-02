import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  subscription?: Subscription;

  loginForm = this.fb.group({
    email: new FormControl('', [
      Validators.required]),
    password: new FormControl('', [
      Validators.required])
  })

  constructor(private fb: FormBuilder,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  submitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.subscription = this.authenticationService
      .login(this.loginForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          // console.log(response);
          this.router.navigate(['/admin']);

          // return response;
        },

        error: (error) => {
          alert(error.error.message);
        },
      });
  }

}
