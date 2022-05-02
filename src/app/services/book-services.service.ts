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
    return this.http.get<Book[]>(
      API.Endpoint(Books.All))
  }

  getBooksCount() {
    return this.http.get<number>(
      API.Endpoint(Books.Count))
  }

  getNewlyAddedBooks() {
    return this.http.get<Book[]>(
      API.Endpoint(Books.NewlyAdded))
  }

  getFilteredBooks() {
    return this.http.get<Book[]>(
      API.Endpoint(Books.Filtered))
  }

  getBookById(id: string) {
    return this.http.get<Book>(
      API.Endpoint(Books.GetById(id)))
  }

  deleteBookById(id: string) {
    return this.http.delete<Book>(
      API.Endpoint(Books.DeleteById(id)))
  }

  getBooksByGenreId(id: string) {
    return this.http.get<Book[]>(
      API.Endpoint(Books.ByGenreId(id)))
  }

  getBooksByAuthorId(id: string) {
    return this.http.get<Book[]>(
      API.Endpoint(Books.ByAuthorId(id)))
  }

  addBook(book: Book) {
    return this.http.post<Book>(
      API.Endpoint(Books.Add), book)
  }

  updateBook(book: Book) {
    return this.http.put<Book>(
      API.Endpoint(Books.Update), book)
  }

}
