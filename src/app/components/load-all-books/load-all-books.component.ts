import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/book-interface/book.interface';
import { BookServicesService } from 'src/app/services/book-services.service';

@Component({
  selector: 'app-load-all-books',
  templateUrl: './load-all-books.component.html',
  styleUrls: ['./load-all-books.component.scss'],
})
export class LoadAllBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookServices: BookServicesService) {}

  ngOnInit(): void {
    this.showBooks();
    console.log(this.books);
  }

  showBooks() {
   return  this.bookServices.getAllBooks().subscribe((book) => {
      this.books = book;
    });
  }
}
