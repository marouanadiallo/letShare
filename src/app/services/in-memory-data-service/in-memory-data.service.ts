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
      {id: 11, name: 'Le roi lion', isFavorite: true, description: "L'Afrique, dans une contrée nommée la Terre des Lions, les lions dirigent le monde animal du haut du Rocher des Lions. Le roi Mufasa et la reine Sarabi, aidés du mandrill Rafiki, chaman et conseiller du roi, présentent leur nouveau-né Simba aux animaux du royaume.!"},
      {id: 12, name: 'Snatch', isFavorite: true,  description: "La première scène du film montre Turkish, qui est le narrateur du film, et son partenaire Tommy, assis face à un homme inconnu. Ils ont passé une mauvaise semaine, et se retrouvent là pour une histoire de diamant, que le film va raconter."},
      {id: 13, name: 'Avengers',  isFavorite: false, description: "Un an après avoir été exilé d'Asgard, Loki, le frère de Thor, s’allie avec « l'Autre », le chef d'une race extra-terrestre : les Chitauris. L'Autre souhaite s'emparer du Tesseract, qui est actuellement sur la Terre. Avec l'aide de l'armée des Chitauris, Loki pourra prendre le contrôle de cette planète en échange du Tesseract. Loki se voit confier un sceptre qui l'aidera dans sa mission."},
      {id: 14, name: 'Spoof movie', isFavorite: false,  description: "Tous les quatre se rendent à une fête organisée pour célébrer la libération de « Cure Dent », un excité de la gâchette. C'est là que Cendar fait la connaissance de Dashiki, une jeune femme très séduisante et mère célibataire d'une ribambelle d'enfants de pères différents. Avant que « Loc Dog » ait pu l'avertir du danger, le joyeux drille tombe fou amoureux d'elle."},
    ];
    return{videotheque};
  }

  genId(videotheque: Film[]): number {
    return videotheque.length > 0 ? Math.max(...videotheque.map(hero => hero.id)) + 1 : 11;
  }
}
