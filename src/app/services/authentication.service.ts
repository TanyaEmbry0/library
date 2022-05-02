import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { map, Observable, ReplaySubject } from "rxjs";
import { AdminRegister } from "../components/interfaces/adminRegister.interface";
import { UserInterface } from "../components/interfaces/user.interface";
import { API } from "../enums/api-info";
import { Users } from "../enums/users-endpoints";
import { UserFullInfo } from "../models and interfaces/user-full-info.interface";
import { UserLogin } from "../models and interfaces/user-login.interface";


@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  // private currentUser = new ReplaySubject<UserFullInfo | null>(1);
  // currentUser$ = this.currentUser.asObservable();
  private currentUser = new ReplaySubject<UserLogin | null>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) { }


  login(formGroup: FormGroup): Observable<UserLogin> {
    return this.httpClient
      .post<UserLogin>(
        API.Endpoint(Users.Login),
        formGroup.value
      )
      .pipe(
        map((response) => {
          this.cookieService.set('token', response.token.result);
          this.currentUser.next(response);
          return response;
        })
      );
  }

  userRegister(formGroup: FormGroup) {
    return this.httpClient
      .post(
        API.Endpoint(Users.Register),
        formGroup.value
      )

  }

  adminRegister(formGroup: FormGroup): Observable<AdminRegister> {
    return this.httpClient
      .post<AdminRegister>(
        API.Endpoint(Users.RegisterAdmin),
        formGroup.value
      )
  }
 logout(){
this.cookieService.delete('token');
this.currentUser.next(null);
  }
}
