import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/services/book.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(public bookService: BookService) {
  }

  public ngOnInit() {
    this.bookService.fetch();
  }

}
