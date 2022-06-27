import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJokesComponent } from './list-jokes/list-jokes.component';
import { ViewJokeComponent } from './view-joke/view-joke.component';

const routes: Routes = [
  {
    path: '',
    component: ListJokesComponent
  },
  {
    path: ':id',
    component: ViewJokeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
