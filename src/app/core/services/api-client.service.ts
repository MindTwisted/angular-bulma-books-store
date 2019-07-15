import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient) {
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    return throwError(err);
  }

  public get(url) {
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
}
