import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public apiUrl = 'http://docker-machine.test:3000/';
  public urls = {
    books: this.apiUrl + 'api/books'
  };

  constructor() {
  }
}
