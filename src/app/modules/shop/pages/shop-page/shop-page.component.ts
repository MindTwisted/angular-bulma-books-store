import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import Book from '../../../../shared/models/Book';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public books: Book[] = [];
  public offset = 0;
  public filters = {};

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.bookService.fetch()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  public handleFilter(filters) {
    this.filters = filters;
    this.offset = 0;
    this.bookService.fetch(filters)
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  public handleLoadMore() {
    this.offset += 50;
    this.bookService.fetch({ ...this.filters, offset: this.offset })
      .subscribe((books: Book[]) => {
        if (!books.length) {
          this.offset = -1;
        }

        this.books.push(...books);
      });
  }

}
