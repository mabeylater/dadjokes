import { E } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { CreateJokeInput, CreateJokeTagsInput, CreateTagInput, Joke, JokeTags, ModelJokeFilterInput, Tag } from 'src/app/models/api';
import { ApiAppCard } from 'src/app/models/app.models';
import { ApiResponseKeys, ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private _tags: Tag[];
  private _tagMapByName: Map<string, Tag>;
  private _tagMapById: Map<string, Tag>;
  private _jokeTagMapByJokeId: Map<string, JokeTags>;
  private _jokes: Joke[];
  private _myJokes: Joke[];
  private _isAuthenticated: boolean;

  public get Tags(): Tag[] {
    return this._tags;
  };

  public get TagMapByName(): Map<string, Tag> {
    return this._tagMapByName;
  };

  public get TagMapById(): Map<string, Tag> {
    return this._tagMapById;
  };

  public get Jokes(): Joke[] {
    return this._jokes;
  };

  public get MyJokes(): Joke[] {
    return this._myJokes;
  };

  constructor(
    private global: GlobalService,
    private api: ApiService,
  ) { }

  jokeToCard(joke: Joke, canEdit: boolean) {
    return new ApiAppCard(joke, false, canEdit, false);
  }

  getAuthStatus() {

  }

  updateTagsArray() {
    this.getTags();
  }

  updateJokesArray() {
    this.getJokes();
  }

  // crud
  async createJoke(joke: CreateJokeInput, tags?: CreateTagInput[]) {
    const request = await this.api.createJokeAsync(joke)
    const createdJoke = request.data[ApiResponseKeys.createJoke];

    if (tags && tags?.length > 0) {
      for (const tagToCreate of tags) {
        if (!this._tagMapByName.has(tagToCreate.name)) {
          const tag = await this.createTag(tagToCreate);

        }
        else {
          const existingTag = this._tagMapByName.get(tagToCreate.name);
          await this.api.createJokeTags(createdJoke.id, existingTag.id);
        }
      }
    }
  }

  getJokes(filter?: ModelJokeFilterInput) {

  }

  deleteJoke(id: string) {

  }

  async createTag(tag: CreateTagInput) {
    const tagReq = await this.api.createTagAsync(tag);
    return tagReq.data[ApiResponseKeys.createTag];
  }

  getTags() {

  }

  async createJokeTag(jokeId: string, tagId: string) {
    const response = await this.api.createJokeTags(jokeId, tagId);
    const jokeTag = response.data[ApiResponseKeys.createJokeTags];
    if(!this._jokeTagMapByJokeId.has(jokeId)) {
      this._jokeTagMapByJokeId.set(jokeId, jokeTag);
    }
    return jokeTag;
  }

  async getJokeTags(getJokeTagsFilter?: {jokeId: string, tagId: string}) {
    let response = null;
    if(getJokeTagsFilter) {
      response = await this.api.getAssociatedJokeTagsAsync(getJokeTagsFilter.jokeId, getJokeTagsFilter.tagId);
    } else {
      response = await this.api.getAllJokeTags();
    }
    const jokeTags = response.data[ApiResponseKeys.listJokeTags].items;

    for(const jt of jokeTags) {
      if(!this._jokeTagMapByJokeId.has(jt.jokeID)) {
        this._jokeTagMapByJokeId.set(jt.jokeID, jt)
      }
    }
  }

  deleteJokeTag(id: string) {

  }

}
