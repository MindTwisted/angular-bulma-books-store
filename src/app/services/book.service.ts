import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ServerResponse from '../interfaces/ServerResponse';
import { ConfigService } from './config.service';
import Book from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];

  constructor(private http: HttpClient, private configService: ConfigService) {
  }

  fetch() {
    this.http.get(this.configService.urls.books)
      .subscribe((response: ServerResponse) => {
        this.books = response.data.books;
      });
  }
}
