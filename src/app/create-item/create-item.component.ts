import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../services/item-service/item-service.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  public form : FormGroup;
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  public onSubmit() {
    console.log(this.form.valid);
    console.log(this.form);
    
    
    if(this.form.valid){
      console.log('valid');
      
      const value = this.form.value;
      this.itemService.addItem(
        {
          name: value.name, 
          isFavorite:false,
          description:value.description
        }
      ).subscribe( response => {
        this.router.navigate(['/']);
      })
    }
    
  }

}
