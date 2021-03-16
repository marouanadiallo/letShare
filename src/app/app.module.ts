import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavappComponent } from './navapp/navapp.component';
import { HeaderappComponent } from './headerapp/headerapp.component';
import { ContainerappComponent } from './containerapp/containerapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmComponent } from './film/film.component';
import { VideothequeComponent } from './videotheque/videotheque.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HoverDirective } from './film/hover.directive';
import {  RouterModule, Routes } from '@angular/router';
import { VideothequeFavoritesComponent } from './videotheque-favorites/videotheque-favorites.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import {EditFilmComponent} from './edit-film/edit-film.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const APP_ROUTES: Routes = [
  {path: '', component: VideothequeComponent},
  {path: 'film/:id', component: FilmDetailsComponent},
  {path: 'favorites', component: VideothequeFavoritesComponent},
  {path: 'create-film', component: CreateFilmComponent},
  {path: 'edit-film/:id', component: EditFilmComponent}
];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavappComponent,
    HeaderappComponent,
    ContainerappComponent,
    FilmComponent,
    VideothequeComponent,
    FilmDetailsComponent,
    HoverDirective,
    VideothequeFavoritesComponent,
    CreateFilmComponent,
    EditFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
