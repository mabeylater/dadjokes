import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { getJoke, listJokes, listFavorites, getFavorites, searchJokes } from 'src/graphql/queries';
import { createJoke, updateJoke, deleteJoke } from '../../graphql/mutations';
import { CreateJokeInput, Joke, SearchableJokeFilterInput, SearchableJokeSortableFields, SearchableJokeSortInput, SearchableSortDirection, SearchableStringFilterInput, UpdateJokeInput } from '../models/api';
import { GlobalService } from './global.service';

export interface ArrayApiResponse<T> {
  data: {
    [key: string]: {
      items: Array<T>
    }
  }
}

export interface SingleItemApiResponse<T> {
  data: {
    [key: string]: T
  }
}

export class ApiResponseKeys {
  public static readonly listJokes = "listJokes";
  public static readonly listFavorites = "listFavorites";
  public static readonly searchJokes = "searchJokes";
  public static readonly getJoke = "getJoke";
  public static readonly getFavorites = "getFavorites";
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private global: GlobalService
  ) { }

  async createJokeAsync(joke: CreateJokeInput): Promise<any> {
    joke.owner = this.global.currentUserId;
    return await API.graphql(graphqlOperation(createJoke, { input: joke }))
  }

  async updateJokeAsync(joke: UpdateJokeInput): Promise<any> {
    return await API.graphql(graphqlOperation(updateJoke, { input: joke }))
  }

  async deleteJokeAsync(id: string): Promise<any> {
    return await API.graphql(graphqlOperation(deleteJoke, { input: id }))
  }

  async getAllJokesAsync(): Promise<any> {
    const jokes = await API.graphql(
      graphqlOperation(listJokes)
    );
    return jokes as Promise<ArrayApiResponse<Joke>>
  }

  async getMyJokesAsync(filter: SearchableJokeFilterInput): Promise<ArrayApiResponse<Joke>> {
    const sort: SearchableJokeSortInput = {
      field: SearchableJokeSortableFields.author,
      direction: SearchableSortDirection.asc
    }

    const jokes = await API.graphql(
      graphqlOperation(listJokes, { filter: filter })
    );
    return jokes as Promise<ArrayApiResponse<Joke>>
  }

  async getJokeByIdAsync(id: string): Promise<SingleItemApiResponse<Joke>> {
    const joke = await API.graphql(graphqlOperation(getJoke, { id }));
    return joke as Promise<SingleItemApiResponse<Joke>>;
  }
}
