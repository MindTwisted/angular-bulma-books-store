import { Component, Input, OnInit } from '@angular/core';
import BookModel from '../../../../shared/models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() public book: BookModel;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
