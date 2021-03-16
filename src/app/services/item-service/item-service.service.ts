import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Item from '../../interfaces/Item';
import {Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';

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
  getAllFavorites(): Observable<Item[]>{
    return this.http.get<Item[]>(this.apiUrl).pipe(
      map(item => {
        return item.filter(elem => elem.isFavorite)
      })
    )
  }


  getItemById(id: number): Observable<Item>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Item>(url);
  }

  addItem(item: Item): Observable<Item>{
    return this.http.post<Item>(this.apiUrl, item, this.httpOptions)
      .pipe(
        catchError(this.handleError<Item>('addItem'))
    );
  }

  deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Item>(url, this.httpOptions).pipe(
      catchError(this.handleError<Item>('deleteItem'))
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
