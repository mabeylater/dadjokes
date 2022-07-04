import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from 'src/app/models/api';
import { ApiAppCard } from 'src/app/models/app.models';
import { ApiResponseKeys, ApiService, SingleItemApiResponse } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-view-joke',
  templateUrl: './view-joke.component.html',
  styleUrls: ['./view-joke.component.scss']
})
export class ViewJokeComponent implements OnInit {

  joke?: Joke
  jokeCard?: ApiAppCard

  id?: string | null;
  isNew: boolean;
  isAuthenticated!: boolean;

  constructor(
    private api: ApiService,
    private global: GlobalService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.isNew = this.id === 'create';
  }

  ngOnInit(): void {
    this.getJoke();
  }

  async getJoke() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;
    if (this.id) {
      try {
        const jokeResponse = await this.api.getJokeByIdAsync(this.id);
        this.joke = jokeResponse?.data[ApiResponseKeys.getJoke];
        this.jokeCard = new ApiAppCard(this.joke, undefined, false, false)
      } catch (err) {
        console.log(err);
      }
    }
  }
}
