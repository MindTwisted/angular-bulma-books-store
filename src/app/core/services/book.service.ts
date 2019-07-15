import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { ApiClientService } from './api-client.service';
import Book from '../../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books: Book[] = [];

  constructor(private apiClient: ApiClientService, private configService: ConfigService) {
  }

  public fetch() {
    return this.apiClient.get(this.configService.urls.books);
  }
}
