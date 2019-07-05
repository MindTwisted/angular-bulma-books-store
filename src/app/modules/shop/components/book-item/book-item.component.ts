import { Component, Input, OnInit } from '@angular/core';
import Book from '../../../../models/Book';
import { ConfigService } from '../../../../services/config.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
  }

  get imagePath() {
    return this.configService.baseUrl + this.book.imagePath;
  }

}
