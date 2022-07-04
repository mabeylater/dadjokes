/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
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
export const listJokes = /* GraphQL */ `
  query ListJokes(
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        text
        author
        likedBy
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const jokeByAuthor = /* GraphQL */ `
  query JokeByAuthor(
    $author: String!
    $sortDirection: ModelSortDirection
    $filter: ModelJokeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jokeByAuthor(
      author: $author
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        text
        author
        likedBy
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getFavorites = /* GraphQL */ `
  query GetFavorites($id: ID!) {
    getFavorites(id: $id) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        owner
        jokeIds
        catFacts
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const myFavorites = /* GraphQL */ `
  query MyFavorites(
    $owner: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    myFavorites(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        owner
        jokeIds
        catFacts
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
