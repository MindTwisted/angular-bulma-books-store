import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import { LoaderService } from '../../../../core/services/loader.service';
import Book from '../../../../shared/models/Book';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(public bookService: BookService, private loaderService: LoaderService) {
  }

  public ngOnInit() {
    this.loaderService.isLoading = true;

    this.bookService.fetch()
      .subscribe(
        (books: Book[]) => {
          this.bookService.books = books;
          this.loaderService.isLoading = false;
        },
        () => {
          this.loaderService.isLoading = false;
        }
      );
  }

}
