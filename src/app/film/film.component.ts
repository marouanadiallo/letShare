import {Component, Input, OnInit} from '@angular/core';
import Film from '../interfaces/Film';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input()film?: Film;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }
  public toggleFavorite($event): void {
    $event.stopPropagation();
    this.film.isFavorite = !this.film.isFavorite;
    this.filmService.updateFilm(this.film).subscribe();
  }
}
