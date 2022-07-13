/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
      title
      text
      author
      tags {
        nextToken
      }
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
        title
        text
        author
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
        title
        text
        author
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
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
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
        jokeIds
        catFacts
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
      name
      jokes {
        nextToken
      }
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getJokeTags = /* GraphQL */ `
  query GetJokeTags($id: ID!) {
    getJokeTags(id: $id) {
      id
      jokeID
      tagID
      joke {
        title
        text
        author
        id
        createdAt
        updatedAt
        owner
      }
      tag {
        name
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listJokeTags = /* GraphQL */ `
  query ListJokeTags(
    $filter: ModelJokeTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJokeTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        jokeID
        tagID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
