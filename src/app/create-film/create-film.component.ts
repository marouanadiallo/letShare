import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmService } from '../services/film-service/film-service.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent implements OnInit {
  public form: FormGroup;

  constructor(private filmService: FilmService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public onSubmit(): void {
    console.log(this.form.valid);
    console.log(this.form);


    if (this.form.valid){
      console.log('valid');

      const value = this.form.value;
      this.filmService.addFilm(
        {
          name: value.name,
          isFavorite: false,
          description: value.description
        }
      ).subscribe( response => {
        this.router.navigate(['/']);
      });
    }

  }

}
