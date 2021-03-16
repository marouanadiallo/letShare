import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Film from '../../interfaces/Film';
import {Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'api/videotheque';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private http: HttpClient,
  ) { }

  getVideotheque(): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiUrl)
      .pipe(catchError(this.handleError<Film[]>('getVideotheque', [])));
  }
  getAllFavorites(): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiUrl).pipe(
      map(item => {
        return item.filter(elem => elem.isFavorite);
      })
    );
  }


  getFilmById(id: number): Observable<Film>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Film>(url);
  }

  getFilmByName(name: string): Observable<Film[]>{
    return this.http.get<Film[]>(this.apiUrl).pipe(
      map(item => {
        return item.filter(elem => elem.name.includes(name));
      })
    );
  }

  addFilm(film: Film): Observable<Film>{
    return this.http.post<Film>(this.apiUrl, film, this.httpOptions)
      .pipe(
        catchError(this.handleError<Film>('addFilm'))
    );
  }

  updateFilm(film: Film) :Observable<Film>{
    return this.http.put(this.apiUrl, film, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }
  deleteFilm(film: Film | number): Observable<Film> {
    const id = typeof film === 'number' ? film : film.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Film>(url, this.httpOptions).pipe(
      catchError(this.handleError<Film>('deleteFilm'))
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
