import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Item from '../interfaces/Item';
import { ItemService } from '../services/item-service/item-service.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public item: Item = {name:'', isFavorite:false, description:''};

  constructor(private itemActive: ActivatedRoute, private router: Router, private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemActive.paramMap.subscribe((paramsMap: ParamMap)=>{
      if(paramsMap.has('id'))
      {
        this.itemService.getItemById(parseInt(paramsMap.get('id'))).subscribe(item => {this.item = item;});
      }
    })
  }
  public deleteItem(): void{    
    this.itemService.deleteItem(this.item).subscribe(response =>{
      this.router.navigate(['/']);
    });
  }

}
