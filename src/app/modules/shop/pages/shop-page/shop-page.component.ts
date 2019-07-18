import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import Book from '../../../../shared/models/Book';

const initialFilters = {
  search: ''
};

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public books: Book[] = [];
  public offset = 0;
  public filters = { ...initialFilters };

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.bookService.fetch()
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  public submitFilter() {
    this.offset = 0;
    this.bookService.fetch(this.filters)
      .subscribe((books: Book[]) => {
        this.books = books;
      });
  }

  public resetFilter() {
    this.offset = 0;
    this.filters = { ...initialFilters };
    this.bookService.fetch(this.filters)
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
