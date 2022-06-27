/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites($owner: String) {
    onCreateFavorites(owner: $owner) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites($owner: String) {
    onUpdateFavorites(owner: $owner) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites($owner: String) {
    onDeleteFavorites(owner: $owner) {
      owner
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJoke = /* GraphQL */ `
  subscription OnCreateJoke($owner: String) {
    onCreateJoke(owner: $owner) {
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
export const onUpdateJoke = /* GraphQL */ `
  subscription OnUpdateJoke($owner: String) {
    onUpdateJoke(owner: $owner) {
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
export const onDeleteJoke = /* GraphQL */ `
  subscription OnDeleteJoke($owner: String) {
    onDeleteJoke(owner: $owner) {
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
