import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { ApiClientService } from './api-client.service';
import Book from '../../shared/models/Book';
import Author from '../../shared/models/Author';
import Genre from '../../shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books: Book[] = [];

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch(): Observable<Book[]> {
    return this.apiClient.get(this.configService.urls.books)
      .pipe(
        map((response: any) => {
          return response.data.books.map(book => {
            return new Book(
              book._id,
              book.title,
              book.description,
              book.discount,
              book.price,
              book.imagePath,
              book.authors.map(author => new Author(author._id, author.name)),
              book.genres.map(genre => new Genre(genre._id, genre.name))
            );
          });
        })
      );
  }
}
