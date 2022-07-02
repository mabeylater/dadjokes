import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type JokeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FavoritesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Joke {
  readonly id: string;
  readonly text?: string | null;
  readonly owner?: string | null;
  readonly author?: string | null;
  readonly likedBy?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Joke, JokeMetaData>);
  static copyOf(source: Joke, mutator: (draft: MutableModel<Joke, JokeMetaData>) => MutableModel<Joke, JokeMetaData> | void): Joke;
}

export declare class Favorites {
  readonly id: string;
  readonly owner?: string | null;
  readonly jokeIds?: (string | null)[] | null;
  readonly catFacts?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Favorites, FavoritesMetaData>);
  static copyOf(source: Favorites, mutator: (draft: MutableModel<Favorites, FavoritesMetaData>) => MutableModel<Favorites, FavoritesMetaData> | void): Favorites;
}