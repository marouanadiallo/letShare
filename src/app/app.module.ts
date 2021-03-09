import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavappComponent } from './navapp/navapp.component';
import { HeaderappComponent } from './headerapp/headerapp.component';
import { ContainerappComponent } from './containerapp/containerapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavappComponent,
    HeaderappComponent,
    ContainerappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
