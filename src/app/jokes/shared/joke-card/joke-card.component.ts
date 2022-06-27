import { Component, Input, OnInit } from '@angular/core';
import { CreateJokeInput, Joke, UpdateJokeInput } from 'src/app/models/api';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent implements OnInit {

  @Input()
  isNew: boolean = false;



  constructor() { }

  ngOnInit(): void {

  }

}
