import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { getJoke, listJokes, listFavorites, getFavorites, jokeByAuthor } from 'src/graphql/queries';
import { createJoke, updateJoke, deleteJoke } from '../../graphql/mutations';
import { CreateJokeInput, DeleteJokeInput, Joke, UpdateJokeInput } from '../models/api';
import { AuthService } from './auth.service';
import { GlobalService } from './global.service';

export interface ArrayApiResponse<T> {
  data: {
    [key: string]: {
      items: Array<T>
    }
  },
  errors: Array<any>
}

export interface SingleItemApiResponse<T> {
  data: {
    [key: string]: T
  },
  errors: Array<any>
}

export class ApiResponseKeys {
  public static readonly listJokes = "listJokes";
  public static readonly jokeByAuthor = "jokeByAuthor";
  public static readonly listFavorites = "listFavorites";
  public static readonly getJoke = "getJoke";
  public static readonly getFavorites = "getFavorites";
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private global: GlobalService,
    private auth: AuthService
  ) { }

  async getToken() {
    const session = await this.auth.getCurrentSession();
    return session.getAccessToken().getJwtToken();
  }

  async createJokeAsync(joke: CreateJokeInput): Promise<any> {
    joke.author = this.global.currentUserEmail;
    const authToken = await this.getToken()
    const createJokeResponse = await API.graphql(graphqlOperation(createJoke, { input: joke }, authToken));
    return createJokeResponse;
  }

  async updateJokeAsync(joke: UpdateJokeInput): Promise<any> {
    return await API.graphql(graphqlOperation(updateJoke, { input: joke }))
  }

  async deleteJokeAsync(deleteEvent: { id: string }): Promise<any> {
    const request: DeleteJokeInput = deleteEvent;
    const authToken = await this.getToken();
    return await API.graphql(graphqlOperation(deleteJoke, { input: request }, authToken));
  }

  async getAllJokesAsync(): Promise<any> {
    const jokes = await API.graphql(
      graphqlOperation(listJokes)
    );
    return jokes as Promise<ArrayApiResponse<Joke>>
  }

  async getMyJokesAsync(): Promise<ArrayApiResponse<Joke>> {
    const authToken = await this.getToken()
    const jokes = await API.graphql(
      graphqlOperation(jokeByAuthor, {
          author: this.global.currentUserEmail
      }, authToken)
    );
    return jokes as Promise<ArrayApiResponse<Joke>>
  }

  async getJokeByIdAsync(id: string): Promise<SingleItemApiResponse<Joke>> {
    const joke = await API.graphql(graphqlOperation(getJoke, { id }));
    return joke as Promise<SingleItemApiResponse<Joke>>;
  }
}
