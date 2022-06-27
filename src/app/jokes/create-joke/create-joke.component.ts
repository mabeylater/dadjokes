import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { CreateJokeInput } from 'src/app/models/api';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.scss']
})
export class CreateJokeComponent implements OnInit {

  joke: CreateJokeInput = {};

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  createJoke() {
    this.apiService.createJokeAsync(this.joke)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
