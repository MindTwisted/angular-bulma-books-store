import { Injectable } from '@angular/core';
import { ApiClientService } from '@app/core/services/api-client.service';
import { ConfigService } from '@app/core/services/config.service';
import { AuthorInterface } from '@app/shared/models/author.interface';
import { AuthorModel } from '@app/shared/models/author.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
