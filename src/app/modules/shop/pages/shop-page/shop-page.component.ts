import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../../../../core/services/book.service';
import Book from '../../../../shared/models/Book';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public books$: Observable<Book[]>;

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.books$ = this.bookService.fetch();
  }

  public handleFilter(filters) {
    this.books$ = this.bookService.fetch(filters);
  }

}
