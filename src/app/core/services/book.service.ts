import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookInterface } from '../../shared/models/book.interface';
import { ConfigService } from './config.service';
import { ApiClientService } from './api-client.service';
import BookModel from '../../shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch(query = {}): Observable<BookModel[]> {
    return this.apiClient.get(this.configService.urls.books, query)
      .pipe(
        map((response: any) => {
          return response.data.books.map((book: BookInterface) => {
            book.imagePath = this.configService.apiUrl + book.imagePath;

            return new BookModel(book);
          });
        })
      );
  }
}
