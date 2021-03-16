import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Film from '../interfaces/Film';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  public film: Film = {name: '', isFavorite: false, description: ''};

  constructor(private filmActive: ActivatedRoute, private router: Router, private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmActive.paramMap.subscribe((paramsMap: ParamMap) => {
      if (paramsMap.has('id'))
      {
        // tslint:disable-next-line:radix
        this.filmService.getFilmById(parseInt(paramsMap.get('id'))).subscribe(film => {this.film = film; });
      }
    });
  }
  public deleteItem(): void{
    this.filmService.deleteFilm(this.film).subscribe(response => {
      this.router.navigate(['/']);
    });
  }

}
