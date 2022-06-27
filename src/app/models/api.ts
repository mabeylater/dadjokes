/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFavoritesInput = {
  owner?: string | null,
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id?: string | null,
};

export type ModelFavoritesConditionInput = {
  owner?: ModelStringInput | null,
  jokeIds?: ModelStringInput | null,
  catFacts?: ModelStringInput | null,
  and?: Array< ModelFavoritesConditionInput | null > | null,
  or?: Array< ModelFavoritesConditionInput | null > | null,
  not?: ModelFavoritesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Favorites = {
  __typename: "Favorites",
  owner?: string | null,
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFavoritesInput = {
  owner?: string | null,
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id: string,
};

export type DeleteFavoritesInput = {
  id: string,
};

export type CreateJokeInput = {
  text?: string | null,
  owner?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id?: string | null,
};

export type ModelJokeConditionInput = {
  text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  author?: ModelStringInput | null,
  likedBy?: ModelStringInput | null,
  and?: Array< ModelJokeConditionInput | null > | null,
  or?: Array< ModelJokeConditionInput | null > | null,
  not?: ModelJokeConditionInput | null,
};

export type Joke = {
  __typename: "Joke",
  text?: string | null,
  owner?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJokeInput = {
  text?: string | null,
  owner?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id: string,
};

export type DeleteJokeInput = {
  id: string,
};

export type ModelFavoritesFilterInput = {
  owner?: ModelStringInput | null,
  jokeIds?: ModelStringInput | null,
  catFacts?: ModelStringInput | null,
  and?: Array< ModelFavoritesFilterInput | null > | null,
  or?: Array< ModelFavoritesFilterInput | null > | null,
  not?: ModelFavoritesFilterInput | null,
};

export type ModelFavoritesConnection = {
  __typename: "ModelFavoritesConnection",
  items:  Array<Favorites | null >,
  nextToken?: string | null,
};

export type ModelJokeFilterInput = {
  text?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  author?: ModelStringInput | null,
  likedBy?: ModelStringInput | null,
  and?: Array< ModelJokeFilterInput | null > | null,
  or?: Array< ModelJokeFilterInput | null > | null,
  not?: ModelJokeFilterInput | null,
};

export type ModelJokeConnection = {
  __typename: "ModelJokeConnection",
  items:  Array<Joke | null >,
  nextToken?: string | null,
};

export type SearchableJokeFilterInput = {
  text?: SearchableStringFilterInput | null,
  owner?: SearchableStringFilterInput | null,
  author?: SearchableStringFilterInput | null,
  likedBy?: SearchableStringFilterInput | null,
  id?: SearchableIDFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  and?: Array< SearchableJokeFilterInput | null > | null,
  or?: Array< SearchableJokeFilterInput | null > | null,
  not?: SearchableJokeFilterInput | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableJokeSortInput = {
  field?: SearchableJokeSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableJokeSortableFields {
  text = "text",
  owner = "owner",
  author = "author",
  likedBy = "likedBy",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableJokeAggregationInput = {
  name: string,
  type: SearchableAggregateType,
  field: SearchableJokeAggregateField,
};

export enum SearchableAggregateType {
  terms = "terms",
  avg = "avg",
  min = "min",
  max = "max",
  sum = "sum",
}


export enum SearchableJokeAggregateField {
  text = "text",
  owner = "owner",
  author = "author",
  likedBy = "likedBy",
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
}


export type SearchableJokeConnection = {
  __typename: "SearchableJokeConnection",
  items:  Array<Joke | null >,
  nextToken?: string | null,
  total?: number | null,
  aggregateItems:  Array<SearchableAggregateResult | null >,
};

export type SearchableAggregateResult = {
  __typename: "SearchableAggregateResult",
  name: string,
  result?: SearchableAggregateGenericResult | null,
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult


export type SearchableAggregateScalarResult = {
  __typename: "SearchableAggregateScalarResult",
  value: number,
};

export type SearchableAggregateBucketResult = {
  __typename: "SearchableAggregateBucketResult",
  buckets?:  Array<SearchableAggregateBucketResultItem | null > | null,
};

export type SearchableAggregateBucketResultItem = {
  __typename: "SearchableAggregateBucketResultItem",
  key: string,
  doc_count: number,
};

export type CreateFavoritesMutationVariables = {
  input: CreateFavoritesInput,
  condition?: ModelFavoritesConditionInput | null,
};

export type CreateFavoritesMutation = {
  createFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFavoritesMutationVariables = {
  input: UpdateFavoritesInput,
  condition?: ModelFavoritesConditionInput | null,
};

export type UpdateFavoritesMutation = {
  updateFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFavoritesMutationVariables = {
  input: DeleteFavoritesInput,
  condition?: ModelFavoritesConditionInput | null,
};

export type DeleteFavoritesMutation = {
  deleteFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJokeMutationVariables = {
  input: CreateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type CreateJokeMutation = {
  createJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJokeMutationVariables = {
  input: UpdateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type UpdateJokeMutation = {
  updateJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJokeMutationVariables = {
  input: DeleteJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type DeleteJokeMutation = {
  deleteJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFavoritesQueryVariables = {
  id: string,
};

export type GetFavoritesQuery = {
  getFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFavoritesQueryVariables = {
  filter?: ModelFavoritesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoritesQuery = {
  listFavorites?:  {
    __typename: "ModelFavoritesConnection",
    items:  Array< {
      __typename: "Favorites",
      owner?: string | null,
      jokeIds?: Array< string | null > | null,
      catFacts?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJokeQueryVariables = {
  id: string,
};

export type GetJokeQuery = {
  getJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJokesQueryVariables = {
  filter?: ModelJokeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJokesQuery = {
  listJokes?:  {
    __typename: "ModelJokeConnection",
    items:  Array< {
      __typename: "Joke",
      text?: string | null,
      owner?: string | null,
      author?: string | null,
      likedBy?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SearchJokesQueryVariables = {
  filter?: SearchableJokeFilterInput | null,
  sort?: Array< SearchableJokeSortInput | null > | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
  aggregates?: Array< SearchableJokeAggregationInput | null > | null,
};

export type SearchJokesQuery = {
  searchJokes?:  {
    __typename: "SearchableJokeConnection",
    items:  Array< {
      __typename: "Joke",
      text?: string | null,
      owner?: string | null,
      author?: string | null,
      likedBy?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    total?: number | null,
    aggregateItems:  Array< {
      __typename: "SearchableAggregateResult",
      name: string,
      result: ( {
          __typename: "SearchableAggregateScalarResult",
          value: number,
        } | {
          __typename: "SearchableAggregateBucketResult",
          buckets?:  Array< {
            __typename: string,
            key: string,
            doc_count: number,
          } | null > | null,
        }
      ) | null,
    } | null >,
  } | null,
};

export type OnCreateFavoritesSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateFavoritesSubscription = {
  onCreateFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFavoritesSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFavoritesSubscription = {
  onUpdateFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFavoritesSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFavoritesSubscription = {
  onDeleteFavorites?:  {
    __typename: "Favorites",
    owner?: string | null,
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateJokeSubscription = {
  onCreateJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateJokeSubscription = {
  onUpdateJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteJokeSubscription = {
  onDeleteJoke?:  {
    __typename: "Joke",
    text?: string | null,
    owner?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
