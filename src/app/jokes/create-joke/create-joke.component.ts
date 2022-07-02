import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateJokeInput } from 'src/app/models/api';
import { ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.scss']
})
export class CreateJokeComponent implements OnInit {

  joke: CreateJokeInput = {};
  isAuthenticated!: boolean;

  constructor(
    private apiService: ApiService,
    private global: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async createJoke() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;

    console.log(this.isAuthenticated);

    this.apiService.createJokeAsync(this.joke)
      .then(response => {
        console.log(response);
        this.router.navigate(['/jokes']);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
