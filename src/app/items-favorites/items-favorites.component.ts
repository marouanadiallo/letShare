import { Component, OnInit } from '@angular/core';
import Item from '../interfaces/Item';
import { ItemService } from '../services/item-service/item-service.service';

@Component({
  selector: 'app-items-favorites',
  templateUrl: './items-favorites.component.html',
  styleUrls: ['./items-favorites.component.scss']
})
export class ItemsFavoritesComponent implements OnInit {

  public favorites: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllFavorites().subscribe(items => this.favorites = items);
  }

}
