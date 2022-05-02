import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book-interface/book.interface';
import { BookServicesService } from 'src/app/services/book-services.service';

@Component({
  selector: 'app-new-books-list',
  templateUrl: './new-books-list.component.html',
  styleUrls: ['./new-books-list.component.scss']
})
export class NewBooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookServices: BookServicesService) { }

  ngOnInit(): void {
    this.showBooks();


  }

  showBooks() {
    return  this.bookServices.getNewlyAddedBooks().subscribe((book) => {
      console.log(book);
      this.books = book;

    });
  }

}
