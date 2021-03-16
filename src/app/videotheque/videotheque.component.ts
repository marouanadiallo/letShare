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

  constructor(private filmService: FilmService) {  }

  ngOnInit(): void {
    this.getVideotheque();
  }

  getVideotheque(): void {
    this.filmService.getVideotheque().subscribe(videotheque => this.videotheque = videotheque);
  }

}
