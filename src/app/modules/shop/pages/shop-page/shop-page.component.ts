import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import BookModel from '../../../../shared/models/book.model';

const initialFilters = {
  search: '',
  authors: ''
};

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public books: BookModel[] = [];
  public offset = 0;
  public filters = { ...initialFilters };

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.bookService.fetch()
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  public submitFilter() {
    this.offset = 0;
    this.bookService.fetch(this.filters)
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  public resetFilter() {
    this.offset = 0;
    this.filters = { ...initialFilters };
    this.bookService.fetch(this.filters)
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  public handleLoadMore() {
    this.offset += 50;
    this.bookService.fetch({ ...this.filters, offset: this.offset })
      .subscribe((books: BookModel[]) => {
        if (!books.length) {
          this.offset = -1;
        }

        this.books.push(...books);
      });
  }

}
