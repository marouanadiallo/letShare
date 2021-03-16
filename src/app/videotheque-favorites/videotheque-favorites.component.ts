import { Component, OnInit } from '@angular/core';
import Film from '../interfaces/Film';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-videotheque-favorites',
  templateUrl: './videotheque-favorites.component.html',
  styleUrls: ['./videotheque-favorites.component.scss']
})
export class VideothequeFavoritesComponent implements OnInit {

  public favorites: Film[];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllFavorites().subscribe(videotheque => this.favorites = videotheque);
  }

}
