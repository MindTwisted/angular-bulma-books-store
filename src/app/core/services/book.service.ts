import { Injectable } from '@angular/core';
import { ApiClientService } from '@app/core/services/api-client.service';
import { ConfigService } from '@app/core/services/config.service';
import { BookInterface } from '@app/shared/models/book.interface';
import { BookModel } from '@app/shared/models/book.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
