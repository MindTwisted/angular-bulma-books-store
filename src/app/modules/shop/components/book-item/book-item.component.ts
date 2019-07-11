import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from '../../../../core/services/config.service';
import Book from '../../../../shared/models/Book';

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
