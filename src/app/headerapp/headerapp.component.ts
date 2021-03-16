import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Film from '../interfaces/Film';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-headerapp',
  templateUrl: './headerapp.component.html',
  styleUrls: ['./headerapp.component.scss']
})
export class HeaderappComponent implements OnInit {
  public films: Film[];
  @ViewChild("ref") inptSerach: ElementRef<HTMLInputElement>;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

 public search(ref: HTMLInputElement) : void {
   if(ref.value !=="")
   {
     this.filmService.getFilmByName(ref.value).subscribe(films => this.films=films);
     console.log(this.films);
     
   }
  }
}
