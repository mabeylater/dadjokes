import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { MyJokesComponent } from './jokes/jokes.component';
import { MyCatFactsComponent } from './cat-facts/cat-facts.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';


@NgModule({
  declarations: [
    MyJokesComponent,
    MyCatFactsComponent,
    MyFavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
