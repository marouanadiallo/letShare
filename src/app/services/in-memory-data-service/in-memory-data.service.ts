import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import Film from '../../interfaces/Film';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  createDb(){
    const videotheque: Film[] = [
      {id: 11, name: 'Brahim', isFavorite: true, description: 'Une description de Brahim !'},
      {id: 12, name: 'Marouane', isFavorite: true,  description: 'une description de Marouana !'},
      {id: 13, name: 'Achraf',  isFavorite: false, description: 'une description d\'Achraf !'},
      {id: 14, name: 'Mohamed', isFavorite: false,  description: 'une description de Mohamed !'},
    ];
    return{videotheque};
  }

  genId(videotheque: Film[]): number {
    return videotheque.length > 0 ? Math.max(...videotheque.map(hero => hero.id)) + 1 : 11;
  }
}
