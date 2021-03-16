import { Component, OnInit } from '@angular/core';
import Film from '../interfaces/Film';
import {FilmService} from '../services/film-service/film-service.service';

@Component({
  selector: 'app-videotheque',
  templateUrl: './videotheque.component.html',
  styleUrls: ['./videotheque.component.scss']
})
export class VideothequeComponent implements OnInit {

  videotheque: Film[];
  public filmRandom: Film;

  constructor(private filmService: FilmService) {  }

  ngOnInit(): void {
    this.getVideotheque();
  }
  getFilmRandom() :void{

  }
  getVideotheque(): void {
    this.filmService.getVideotheque().subscribe(videotheque =>{
      this.videotheque = videotheque;      
      this.filmRandom = this.videotheque[Math.round(Math.random() * (this.videotheque.length-1 - 0) + 0)]
      console.log(this.filmRandom);
      
    } );
  }

}
