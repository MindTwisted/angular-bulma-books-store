import { Component, Input, OnInit } from '@angular/core';
import BookModel from '../../../../shared/models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  @Input() public books: BookModel[];

  constructor() {
  }

  public ngOnInit() {
  }

}
