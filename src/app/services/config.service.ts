import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public baseUrl = 'http://docker-machine.test:3000/';
  public urls = {
    books: this.baseUrl + 'api/books'
  };

  constructor() { }
}
