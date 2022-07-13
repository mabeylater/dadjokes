import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke, ModelJokeTagsFilterInput } from 'src/app/models/api';
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
  enableTableView = false;

  constructor(
    private api: ApiService,
    private global: GlobalService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAllJokes();

    // this.route.queryParamMap.subscribe(map => {
    //   console.log('query tag', map.get('tagId'))
    //   this.getAllJokes(map.get('tagId'));
    // })
  }

  async getAllJokes(tagId?: string) {
    let filter: ModelJokeTagsFilterInput = null;
    if(tagId) {
      filter = {
        tagID: {
          eq: tagId
        }
      }
    }
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;

    try {
      const jokesResponse = await this.api.getAllJokesAsync(filter);
      this.jokes = jokesResponse.data[ApiResponseKeys.listJokes].items;
      this.jokeCards = this.jokes?.map(joke => new ApiAppCard(joke, true, false, this.isAuthenticated))

      if (this.global.isAuthenticated) {
        const myJokesResponse = await this.api.getMyJokesAsync();
        this.myJokes = myJokesResponse.data[ApiResponseKeys.jokeByAuthor].items;
        this.myJokeCards = this.myJokes.map(joke => new ApiAppCard(joke, true, false, false));
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteJoke(deleteEvent: {id: string }) {
    await this.api.deleteJokeAsync(deleteEvent);
  }

  getFilteredJokesByTagId() {

  }
}
