import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorInterface } from '../../shared/models/author.interface';
import AuthorModel from '../../shared/models/author.model';
import { ApiClientService } from './api-client.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch(query = {}): Observable<AuthorModel[]> {
    return this.apiClient.get(this.configService.urls.authors, query)
      .pipe(
        map((response: any) => {
          return response.data.authors.map((author: AuthorInterface) => {
            return new AuthorModel(author);
          });
        })
      );
  }
}
