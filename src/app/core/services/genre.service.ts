import { Injectable } from '@angular/core';
import { ApiClientService } from '@app/core/services/api-client.service';
import { ConfigService } from '@app/core/services/config.service';
import { GenreInterface } from '@app/shared/models/genre.interface';
import { GenreModel } from '@app/shared/models/genre.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch(query = {}): Observable<GenreModel[]> {
    return this.apiClient.get(this.configService.urls.genres, query)
      .pipe(
        map((response: any) => {
          return response.data.genres.map((genre: GenreInterface) => {
            return new GenreModel(genre);
          });
        })
      );
  }
}
