import { Injectable } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { getJoke, listJokes, listFavorites, getFavorites, jokeByAuthor, listTags, listJokeTags } from 'src/graphql/queries';
import { createJoke, updateJoke, deleteJoke, createTag, createJokeTags, deleteJokeTags } from '../../graphql/mutations';
import { CreateJokeInput, CreateJokeTagsInput, CreateTagInput, DeleteJokeInput, DeleteJokeTagsInput, Joke, JokeTags, ModelJokeTagsFilterInput, Tag, UpdateJokeInput } from '../models/api';
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
  public static readonly listJokeTags = "listJokeTags";
  public static readonly createJokeTags = "createJokeTags";
  public static readonly jokeByAuthor = "jokeByAuthor";
  public static readonly listFavorites = "listFavorites";
  public static readonly getJoke = "getJoke";
  public static readonly createJoke = "createJoke";
  public static readonly getTag = "getTag";
  public static readonly createTag = "createTag";
  public static readonly listTags = "listTags";
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

  async createJokeAsync(joke: CreateJokeInput): Promise<SingleItemApiResponse<Joke>> {
    joke.author = this.global.currentUserEmail;
    const authToken = await this.getToken()
    const createJokeResponse = await API.graphql(graphqlOperation(createJoke, { input: joke }, authToken));
    return createJokeResponse as Promise<SingleItemApiResponse<Joke>>;
  }

  async updateJokeAsync(joke: UpdateJokeInput): Promise<any> {
    return await API.graphql(graphqlOperation(updateJoke, { input: joke }))
  }

  async createJokeTags(jokeID: string, tagID: string): Promise<SingleItemApiResponse<JokeTags>> {
    const request: CreateJokeTagsInput = {
      jokeID,
      tagID
    }
    const authToken = await this.getToken();
    const createReq = await API.graphql(graphqlOperation(createJokeTags, { input: request }, authToken));
    return createReq as Promise<SingleItemApiResponse<JokeTags>>;
  }

  async deleteJokeTags(id: string) {
    const request: DeleteJokeTagsInput = {
      id
    };
    const authToken = await this.getToken();
    return await API.graphql(graphqlOperation(deleteJokeTags, { input: request }, authToken));
  }

  async getJokeTagsByJokeIdAsync(jokeID: string): Promise<ArrayApiResponse<JokeTags>> {
    const filter: ModelJokeTagsFilterInput = {
      jokeID: {
        eq: jokeID
      }
    };
    const authToken = await this.getToken();
    const result = await API.graphql(graphqlOperation(listJokeTags, { filter }, authToken));
    return result as Promise<ArrayApiResponse<JokeTags>>;
  }

  async getAssociatedJokeTagsAsync(jokeID: string, tagID: string): Promise<ArrayApiResponse<JokeTags>> {
    const filter: ModelJokeTagsFilterInput = {
      tagID: {
        eq: tagID
      },
      jokeID: {
        eq: jokeID
      }
    };
    const authToken = await this.getToken();
    const result = await API.graphql(graphqlOperation(listJokeTags, { filter }, authToken));
    return result as Promise<ArrayApiResponse<JokeTags>>;
  }

  async getAllJokeTags() {
    const authToken = await this.getToken();
    const result = await API.graphql(graphqlOperation(listJokeTags, {}, authToken));
    return result as Promise<ArrayApiResponse<JokeTags>>;
  }

  async deleteJokeTagsByTagIdAsync(jokeId: string, tagId: string): Promise<any> {
    const jokeTagsRequest = await this.getAssociatedJokeTagsAsync(jokeId, tagId);
    const jokeTags = jokeTagsRequest.data[ApiResponseKeys.listJokeTags].items
    if (jokeTags.length >= 1) {
      await this.deleteJokeTags(jokeTags[0].id);
    }
  }

  async deleteJokeAsync(deleteEvent: { id: string }): Promise<any> {
    const request: DeleteJokeInput = deleteEvent;
    const authToken = await this.getToken();
    return await API.graphql(graphqlOperation(deleteJoke, { input: request }, authToken));
  }

  async getAllJokesAsync(filter?: ModelJokeTagsFilterInput): Promise<any> {
    const authToken = await this.getToken();
    const jokes = await API.graphql(
      graphqlOperation(listJokes, { filter }, authToken)
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

  async getAllTagsAsync(): Promise<ArrayApiResponse<Tag>> {
    const authToken = await this.getToken()
    const tags = await API.graphql(
      graphqlOperation(listTags, {
        author: this.global.currentUserEmail
      }, authToken)
    );
    return tags as Promise<ArrayApiResponse<Tag>>
  }

  async createTagAsync(tag: CreateTagInput): Promise<SingleItemApiResponse<Tag>> {
    const authToken = await this.getToken()
    const createTagResponse = await API.graphql(graphqlOperation(createTag, { input: tag }, authToken));
    return createTagResponse as Promise<SingleItemApiResponse<Tag>>;
  }
}
