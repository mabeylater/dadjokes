import { Component, OnInit } from '@angular/core';
import { Joke, SearchableJokeFilterInput } from 'src/app/models/api';
import { ApiAppCard } from 'src/app/models/app.models';
import { ArrayApiResponse, ApiResponseKeys, ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-list-jokes',
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.scss']
})
export class ListJokesComponent implements OnInit {

  jokes!: Array<Joke>
  jokeCards!: Array<ApiAppCard>

  myJokes!: Array<Joke>
  myJokeCards!: Array<ApiAppCard>

  isAuthenticated = false;

  constructor(
    private api: ApiService,
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.getAllJokes()
  }

  async getAllJokes() {
    this.isAuthenticated = this.global.isAuthenticated;

    const jokesResponse = await this.api.getAllJokesAsync();
    this.jokes = jokesResponse.data[ApiResponseKeys.listJokes].items;
    this.jokeCards = this.jokes.map(joke => new ApiAppCard(joke, true, false, this.isAuthenticated))

    if (this.global.isAuthenticated) {

      const myJokesSearch: SearchableJokeFilterInput = {
        owner: {
          eq: this.global.currentUserId
        }
      }

      const myJokesResponse = await this.api.getMyJokesAsync(myJokesSearch);
      this.myJokes = myJokesResponse.data[ApiResponseKeys.listJokes].items;
      this.myJokeCards = this.jokes.map(joke => new ApiAppCard(joke, true, true, false));
    }
  }
}
