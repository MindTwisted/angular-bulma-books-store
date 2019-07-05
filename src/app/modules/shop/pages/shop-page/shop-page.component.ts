import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../services/book.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.fetch();
  }

}
