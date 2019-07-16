import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
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

  public get(url) {
    this.loaderService.isLoading = true;

    return this.http.get(url)
      .pipe(
        catchError(this.handleError),
        finalize(this.handleFinally)
      );
  }
}
