/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const getJoke = /* GraphQL */ `
  query GetJoke($id: ID!) {
    getJoke(id: $id) {
      text
      owner
      author
      likedBy
      id
      createdAt
      updatedAt
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
        owner
        author
        likedBy
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchJokes = /* GraphQL */ `
  query SearchJokes(
    $filter: SearchableJokeFilterInput
    $sort: [SearchableJokeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableJokeAggregationInput]
  ) {
    searchJokes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        text
        owner
        author
        likedBy
        id
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
