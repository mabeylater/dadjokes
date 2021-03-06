/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJokeInput = {
  title?: string | null,
  text?: string | null,
  author?: string | null,
  id?: string | null,
};

export type ModelJokeConditionInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  author?: ModelStringInput | null,
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
  title?: string | null,
  text?: string | null,
  author?: string | null,
  tags?: ModelJokeTagsConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelJokeTagsConnection = {
  __typename: "ModelJokeTagsConnection",
  items:  Array<JokeTags | null >,
  nextToken?: string | null,
};

export type JokeTags = {
  __typename: "JokeTags",
  id: string,
  jokeID: string,
  tagID: string,
  joke: Joke,
  tag: Tag,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Tag = {
  __typename: "Tag",
  name?: string | null,
  jokes?: ModelJokeTagsConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateJokeInput = {
  title?: string | null,
  text?: string | null,
  author?: string | null,
  id: string,
};

export type DeleteJokeInput = {
  id: string,
};

export type CreateFavoritesInput = {
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id?: string | null,
};

export type ModelFavoritesConditionInput = {
  jokeIds?: ModelStringInput | null,
  catFacts?: ModelStringInput | null,
  and?: Array< ModelFavoritesConditionInput | null > | null,
  or?: Array< ModelFavoritesConditionInput | null > | null,
  not?: ModelFavoritesConditionInput | null,
};

export type Favorites = {
  __typename: "Favorites",
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFavoritesInput = {
  jokeIds?: Array< string | null > | null,
  catFacts?: Array< string | null > | null,
  id: string,
};

export type DeleteFavoritesInput = {
  id: string,
};

export type CreateTagInput = {
  name?: string | null,
  id?: string | null,
};

export type ModelTagConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  name?: string | null,
  id: string,
};

export type DeleteTagInput = {
  id: string,
};

export type CreateJokeTagsInput = {
  id?: string | null,
  jokeID: string,
  tagID: string,
};

export type ModelJokeTagsConditionInput = {
  jokeID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelJokeTagsConditionInput | null > | null,
  or?: Array< ModelJokeTagsConditionInput | null > | null,
  not?: ModelJokeTagsConditionInput | null,
};

export type ModelIDInput = {
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

export type UpdateJokeTagsInput = {
  id: string,
  jokeID?: string | null,
  tagID?: string | null,
};

export type DeleteJokeTagsInput = {
  id: string,
};

export type ModelJokeFilterInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  author?: ModelStringInput | null,
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

export type ModelTagFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type ModelTagConnection = {
  __typename: "ModelTagConnection",
  items:  Array<Tag | null >,
  nextToken?: string | null,
};

export type ModelJokeTagsFilterInput = {
  id?: ModelIDInput | null,
  jokeID?: ModelIDInput | null,
  tagID?: ModelIDInput | null,
  and?: Array< ModelJokeTagsFilterInput | null > | null,
  or?: Array< ModelJokeTagsFilterInput | null > | null,
  not?: ModelJokeTagsFilterInput | null,
};

export type CreateJokeMutationVariables = {
  input: CreateJokeInput,
  condition?: ModelJokeConditionInput | null,
};

export type CreateJokeMutation = {
  createJoke?:  {
    __typename: "Joke",
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFavoritesMutationVariables = {
  input: UpdateFavoritesInput,
  condition?: ModelFavoritesConditionInput | null,
};

export type UpdateFavoritesMutation = {
  updateFavorites?:  {
    __typename: "Favorites",
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFavoritesMutationVariables = {
  input: DeleteFavoritesInput,
  condition?: ModelFavoritesConditionInput | null,
};

export type DeleteFavoritesMutation = {
  deleteFavorites?:  {
    __typename: "Favorites",
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateJokeTagsMutationVariables = {
  input: CreateJokeTagsInput,
  condition?: ModelJokeTagsConditionInput | null,
};

export type CreateJokeTagsMutation = {
  createJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateJokeTagsMutationVariables = {
  input: UpdateJokeTagsInput,
  condition?: ModelJokeTagsConditionInput | null,
};

export type UpdateJokeTagsMutation = {
  updateJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteJokeTagsMutationVariables = {
  input: DeleteJokeTagsInput,
  condition?: ModelJokeTagsConditionInput | null,
};

export type DeleteJokeTagsMutation = {
  deleteJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetJokeQueryVariables = {
  id: string,
};

export type GetJokeQuery = {
  getJoke?:  {
    __typename: "Joke",
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
      title?: string | null,
      text?: string | null,
      author?: string | null,
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
      title?: string | null,
      text?: string | null,
      author?: string | null,
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
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
      jokeIds?: Array< string | null > | null,
      catFacts?: Array< string | null > | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  id: string,
};

export type GetTagQuery = {
  getTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTagsQueryVariables = {
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTagsQuery = {
  listTags?:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetJokeTagsQueryVariables = {
  id: string,
};

export type GetJokeTagsQuery = {
  getJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListJokeTagsQueryVariables = {
  filter?: ModelJokeTagsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJokeTagsQuery = {
  listJokeTags?:  {
    __typename: "ModelJokeTagsConnection",
    items:  Array< {
      __typename: "JokeTags",
      id: string,
      jokeID: string,
      tagID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
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
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    title?: string | null,
    text?: string | null,
    author?: string | null,
    tags?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
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
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFavoritesSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateFavoritesSubscription = {
  onUpdateFavorites?:  {
    __typename: "Favorites",
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFavoritesSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteFavoritesSubscription = {
  onDeleteFavorites?:  {
    __typename: "Favorites",
    jokeIds?: Array< string | null > | null,
    catFacts?: Array< string | null > | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTagSubscription = {
  onCreateTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTagSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag?:  {
    __typename: "Tag",
    name?: string | null,
    jokes?:  {
      __typename: "ModelJokeTagsConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateJokeTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateJokeTagsSubscription = {
  onCreateJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateJokeTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateJokeTagsSubscription = {
  onUpdateJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteJokeTagsSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteJokeTagsSubscription = {
  onDeleteJokeTags?:  {
    __typename: "JokeTags",
    id: string,
    jokeID: string,
    tagID: string,
    joke:  {
      __typename: "Joke",
      title?: string | null,
      text?: string | null,
      author?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    tag:  {
      __typename: "Tag",
      name?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
