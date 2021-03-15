import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import Item from '../../interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  createDb(){
    const items: Item[] = [
      {id: 11, name: 'Brahim'},
      {id: 12, name: 'Marouane'},
      {id: 13, name: 'Achraf'},
      {id: 14, name: 'Mohamed'},
    ];
    return{items};
  }

  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(hero => hero.id)) + 1 : 11;
  }
}
