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
    if (this.id && !this.isNew) {
      try {
        const jokeResponse = await this.api.getJokeByIdAsync(this.id);
        this.joke = jokeResponse?.data[ApiResponseKeys.getJoke];
        const canEdit = this.global.currentUserEmail === this.joke.author;
        this.jokeCard = new ApiAppCard(this.joke, false, canEdit, false)
      } catch (err) {
        console.log(err);
      }
    }
  }

  async deleteJoke(deleteEvent: { id: string }) {
    await this.api.deleteJokeAsync(deleteEvent);
  }
}
