import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Film from '../interfaces/Film';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.scss']
})
export class EditFilmComponent implements OnInit {
  public film : Film;
  public form: FormGroup;

  constructor(private filmService: FilmService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((paramsMap: ParamMap)=>{
      if(paramsMap.has('id'))
      {
        this.filmService.getFilmById(parseInt(paramsMap.get('id'))).subscribe(film => {
          this.film = film; 

          this.form = this.formBuilder.group({
            name: [this.film.name, [Validators.required]],
            description: [this.film.description, [Validators.required]]
          });
        });
      }
    })
  }

  public onSubmit(): void {
    if (this.form.valid){
      this.film.name = this.form.value.name
      this.film.description = this.form.value.description;

      this.filmService.updateFilm(this.film ).subscribe( response => {
        this.router.navigate(['/']);
      });
    }
  }

}
