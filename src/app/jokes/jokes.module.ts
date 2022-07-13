import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { CreateJokeComponent } from './create-joke/create-joke.component';
import { ListJokesComponent } from './list-jokes/list-jokes.component';
import { JokeCardComponent } from './shared/joke-card/joke-card.component';
import { SharedModule } from '../shared/shared.module';
import { ViewJokeComponent } from './view-joke/view-joke.component';
import { JokesComponent } from './jokes.component';


@NgModule({
  declarations: [
    CreateJokeComponent,
    ListJokesComponent,
    JokeCardComponent,
    ViewJokeComponent,
    JokesComponent
  ],
  imports: [
    CommonModule,
    JokesRoutingModule,
    SharedModule
  ]
})
export class JokesModule { }
