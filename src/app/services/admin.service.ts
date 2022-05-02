import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "../enums/admin-endpoints";
import { API } from "../enums/api-info";
import { UserFullInfo } from "../models and interfaces/user-full-info.interface";
// import { ApproveUserModel } from "../models and interfaces/approve-user-model";




@Injectable({ providedIn: 'root' })

export class AdminService{

    constructor(private httpClient: HttpClient){}

    getUnaprovedUsers(){
      return this.httpClient.get<any>(
        API.Endpoint(Admin.UnapprovedUsers));
    }

    getUser(id: string){
      return this.httpClient.get<any>(
        API.Endpoint(Admin.UserById(id)));
    }

    approveUser(id: string){
      return this.httpClient.post<any>(
        API.Endpoint(Admin.ApproveUser),{
          id: id,
        } );
    }
    // approveUser(id: string){
    //   return this.httpClient.post<any>(
    //     API.Endpoint(Admin.ApproveUser),id);
    // }

    deleteUser(id: string){
      return this.httpClient.delete<any>(
        API.Endpoint(Admin.DeleteUserById(id)));
    }
}
