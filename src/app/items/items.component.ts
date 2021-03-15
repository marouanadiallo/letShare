import { Component, OnInit } from '@angular/core';
import {ITEMS} from '../interfaces/mock-item';
import Item from '../interfaces/Item';
import {ItemService} from '../services/item-service/item-service.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) {  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  delete(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item).subscribe();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.itemService.addItem({ name } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

}
