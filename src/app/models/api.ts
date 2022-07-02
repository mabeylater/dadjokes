/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJokeInput = {
  text?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id?: string | null,
};

export type ModelJokeConditionInput = {
  text?: ModelStringInput | null,
  author?: ModelStringInput | null,
  likedBy?: ModelStringInput | null,
  and?: Array< ModelJokeConditionInput | null > | null,
  or?: Array< ModelJokeConditionInput | null > | null,
  not?: ModelJokeConditionInput | null,
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

export type Joke = {
  __typename: "Joke",
  text?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateJokeInput = {
  text?: string | null,
  author?: string | null,
  likedBy?: Array< string | null > | null,
  id: string,
};

export type DeleteJokeInput = {
  id: string,
};

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

export type ModelJokeFilterInput = {
  text?: ModelStringInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type CreateJokeMutationVariables = {
  input: CreateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type CreateJokeMutation = {
  createJoke?:  {
    __typename: "Joke",
    text?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
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

export type GetJokeQueryVariables = {
  id: string,
};

export type GetJokeQuery = {
  getJoke?:  {
    __typename: "Joke",
    text?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      author?: string | null,
      likedBy?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type JokeByAuthorQueryVariables = {
  author: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelJokeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type JokeByAuthorQuery = {
  jokeByAuthor?:  {
    __typename: "ModelJokeConnection",
    items:  Array< {
      __typename: "Joke",
      text?: string | null,
      author?: string | null,
      likedBy?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
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

export type MyFavoritesQueryVariables = {
  owner: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFavoritesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MyFavoritesQuery = {
  myFavorites?:  {
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

export type OnCreateJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateJokeSubscription = {
  onCreateJoke?:  {
    __typename: "Joke",
    text?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateJokeSubscription = {
  onUpdateJoke?:  {
    __typename: "Joke",
    text?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteJokeSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteJokeSubscription = {
  onDeleteJoke?:  {
    __typename: "Joke",
    text?: string | null,
    author?: string | null,
    likedBy?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
