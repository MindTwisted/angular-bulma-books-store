import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import BookModel from '../../../../shared/models/book.model';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  public books: BookModel[] = [];
  public offset = 0;

  @ViewChild('shopFilter', { static: false }) public shopFilter;

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.bookService.fetch()
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  public applyFilter() {
    this.offset = 0;
    this.bookService.fetch(this.shopFilter.filters)
      .subscribe((books: BookModel[]) => {
        this.books = books;
      });
  }

  public handleLoadMore() {
    this.offset += 50;
    this.bookService.fetch({ ...this.shopFilter.filters, offset: this.offset })
      .subscribe((books: BookModel[]) => {
        if (!books.length) {
          this.offset = -1;
        }

        this.books.push(...books);
      });
  }

}
