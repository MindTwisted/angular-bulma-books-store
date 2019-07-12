import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { LoaderService } from './loader.service';
import ServerResponse from '../../shared/models/ServerResponse';
import Book from '../../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books: Book[] = [];

  constructor(private http: HttpClient, private configService: ConfigService, private loaderService: LoaderService) {
  }

  public fetch() {
    this.loaderService.isLoading = true;

    this.http.get(this.configService.urls.books)
      .subscribe((response: ServerResponse) => {
        this.books = response.data.books;

        this.loaderService.isLoading = false;
      });
  }
}
