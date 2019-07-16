import { Component, Input, OnInit } from '@angular/core';
import Book from '../../../../shared/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: Book;

  constructor() {
  }

  public ngOnInit() {
  }

}
