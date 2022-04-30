import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book-interface/book.interface';
import { API } from '../enums/api-info';
import { Books } from '../enums/books-endpoints';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(private http: HttpClient) { }
  getAllBooks() {
    return this.http.get<Book[]>(API.Get(Books.All))
  }

}
