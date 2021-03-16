import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavappComponent } from './navapp/navapp.component';
import { HeaderappComponent } from './headerapp/headerapp.component';
import { ContainerappComponent } from './containerapp/containerapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { HoverDirective } from './item/hover.directive';
import {  RouterModule, Routes } from '@angular/router';
import { ItemsFavoritesComponent } from './items-favorites/items-favorites.component';
import { CreateItemComponent } from './create-item/create-item.component';


const APP_ROUTES : Routes = [
  {path:'', component: ItemsComponent},
  {path:'items/:id', component: ItemDetailsComponent},
  {path:'favorites', component: ItemsFavoritesComponent},
  {path:'create-item', component: CreateItemComponent}
]
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavappComponent,
    HeaderappComponent,
    ContainerappComponent,
    ItemComponent,
    ItemsComponent,
    ItemDetailsComponent,
    HoverDirective,
    ItemsFavoritesComponent,
    CreateItemComponent
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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
