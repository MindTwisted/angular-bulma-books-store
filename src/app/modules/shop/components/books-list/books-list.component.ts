import { Component, Input, OnInit } from '@angular/core';
import Book from '../../../../shared/models/Book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() public books: Book[];

  constructor() {
  }

  public ngOnInit() {
  }

}
