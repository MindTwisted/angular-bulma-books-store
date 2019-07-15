import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';
import { LoaderService } from '../../../../core/services/loader.service';
import ServerResponse from '../../../../shared/models/ServerResponse';

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
        (response: ServerResponse) => {
          this.bookService.books = response.data.books;
          this.loaderService.isLoading = false;
        },
        () => {
          this.loaderService.isLoading = false;
        }
      );
  }

}
