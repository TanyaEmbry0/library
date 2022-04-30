import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { map, Observable, ReplaySubject } from "rxjs";
import { AdminRegister } from "../components/interfaces/adminRegister.interface";
import { UserInterface } from "../components/interfaces/user.interface";
import { API } from "../enums/api-info";
import { Users } from "../enums/users-endpoints";

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
  private currentUser = new ReplaySubject<UserInterface | null>(1);
  currentUser$ = this.currentUser.asObservable();

  constructor(private httpClient: HttpClient,
    private cookieService: CookieService) { }


  login(formGroup: FormGroup): Observable<UserInterface> {
    return this.httpClient
      .post<UserInterface>(
        API.Get(Users.Login),
        formGroup.value
      )
      .pipe(
        map((response) => {
          this.currentUser.next(response);
          return response;
        })
      );
  }

  userRegister(formGroup: FormGroup) {
    return this.httpClient
      .post(
        API.Get(Users.Register),
        formGroup.value
      )

  }

  adminRegister(formGroup: FormGroup): Observable<AdminRegister> {
    return this.httpClient
      .post<AdminRegister>(
        API.Get(Users.RegisterAdmin),
        formGroup.value
      )
  }
}
