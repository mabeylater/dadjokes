/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $input: CreateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    createJoke(input: $input, condition: $condition) {
      text
      author
      likedBy
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $input: UpdateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    updateJoke(input: $input, condition: $condition) {
      text
      author
      likedBy
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $input: DeleteJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    deleteJoke(input: $input, condition: $condition) {
      text
      author
      likedBy
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createFavorites = /* GraphQL */ `
  mutation CreateFavorites(
    $input: CreateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    createFavorites(input: $input, condition: $condition) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateFavorites = /* GraphQL */ `
  mutation UpdateFavorites(
    $input: UpdateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    updateFavorites(input: $input, condition: $condition) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteFavorites = /* GraphQL */ `
  mutation DeleteFavorites(
    $input: DeleteFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    deleteFavorites(input: $input, condition: $condition) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
