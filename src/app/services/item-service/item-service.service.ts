import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Item from '../../interfaces/Item';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'api/items';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }

  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Item[]>('getItems', [])));
  }

  addItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.apiUrl, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Item>('addItem'))
    );
  }

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
