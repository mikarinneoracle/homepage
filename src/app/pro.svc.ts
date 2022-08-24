import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pro } from './pro';

@Injectable({ providedIn: 'root' })
export class ProSvc {

  private proUrl = 'http://price:3010/pro';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getPro(): Observable<Pro> {
    return this.http.get<Pro>(this.proUrl)
      .pipe(
        tap(_ => this.log('fetched pro')),
        catchError(this.handleError<Pro>('getPro', {price: { monthly: 0, users: 0, storage: 0, support: '' }, options: {}}))
      );
  }
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
      console.error(message);
  }
  
}

