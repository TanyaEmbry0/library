import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegister } from '../components/interfaces/userRegister.interface';
import { API } from '../enums/api-info';
import { Users } from '../enums/users-endpoints';


@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsersCount() {
    return this.httpClient.get<number>(API.Endpoint(Users.Count));
  }

  getUser(id: string) {
    return this.httpClient.get<UserRegister[]>(API.Endpoint(Users.GetById(id)));
  }
}
