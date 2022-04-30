import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book-interface/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(private http: HttpClient) { }
getAllBooks(){
return this.http.get<Book[]>("https://schoolofdotnet2022-staraplanina-api.azurewebsites.net/api/v1/Books/All")
}

}
