/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJoke = /* GraphQL */ `
  subscription OnCreateJoke($owner: String) {
    onCreateJoke(owner: $owner) {
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
export const onUpdateJoke = /* GraphQL */ `
  subscription OnUpdateJoke($owner: String) {
    onUpdateJoke(owner: $owner) {
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
export const onDeleteJoke = /* GraphQL */ `
  subscription OnDeleteJoke($owner: String) {
    onDeleteJoke(owner: $owner) {
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
export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites($owner: String) {
    onCreateFavorites(owner: $owner) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites($owner: String) {
    onUpdateFavorites(owner: $owner) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites($owner: String) {
    onDeleteFavorites(owner: $owner) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag($owner: String) {
    onCreateTag(owner: $owner) {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag($owner: String) {
    onUpdateTag(owner: $owner) {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag($owner: String) {
    onDeleteTag(owner: $owner) {
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
export const onCreateJokeTags = /* GraphQL */ `
  subscription OnCreateJokeTags($owner: String) {
    onCreateJokeTags(owner: $owner) {
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
export const onUpdateJokeTags = /* GraphQL */ `
  subscription OnUpdateJokeTags($owner: String) {
    onUpdateJokeTags(owner: $owner) {
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
export const onDeleteJokeTags = /* GraphQL */ `
  subscription OnDeleteJokeTags($owner: String) {
    onDeleteJokeTags(owner: $owner) {
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
