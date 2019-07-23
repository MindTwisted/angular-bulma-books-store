import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  private handleError = (err: HttpErrorResponse) => {
    this.loaderService.isLoading = false;

    return throwError(err);
  }

  private handleFinally = () => {
    this.loaderService.isLoading = false;
  }

  public get(url, query = {}): Observable<any> {
    this.loaderService.isLoading = true;

    return this.http.get(url, { params: query })
      .pipe(
        catchError(this.handleError),
        finalize(this.handleFinally)
      );
  }
}
