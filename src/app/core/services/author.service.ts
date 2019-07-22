import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Author from '../../shared/models/Author';
import { ApiClientService } from './api-client.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch(query = {}): Observable<Author[]> {
    return this.apiClient.get(this.configService.urls.authors, query)
      .pipe(
        map((response: any) => {
          return response.data.authors.map(author => {
            return new Author(
              author._id,
              author.name
            );
          });
        })
      );
  }
}
