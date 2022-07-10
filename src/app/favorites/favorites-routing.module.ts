import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCatFactsComponent } from './cat-facts/cat-facts.component';
import { MyJokesComponent } from './jokes/jokes.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';

const routes: Routes = [
  {
    path: '',
    component: MyFavoritesComponent
  },
  {
    path: 'my-cat-facts',
    component: MyCatFactsComponent
  },
  {
    path: 'my-jokes',
    component: MyJokesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
