import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/book-interface/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
@Input() book:Book  | undefined;
  constructor() {}

  ngOnInit(): void {
  }

}
