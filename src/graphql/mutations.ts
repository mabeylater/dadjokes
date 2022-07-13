/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJoke = /* GraphQL */ `
  mutation CreateJoke(
    $input: CreateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    createJoke(input: $input, condition: $condition) {
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
export const updateJoke = /* GraphQL */ `
  mutation UpdateJoke(
    $input: UpdateJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    updateJoke(input: $input, condition: $condition) {
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
export const deleteJoke = /* GraphQL */ `
  mutation DeleteJoke(
    $input: DeleteJokeInput!
    $condition: ModelJokeConditionInput
  ) {
    deleteJoke(input: $input, condition: $condition) {
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
export const createFavorites = /* GraphQL */ `
  mutation CreateFavorites(
    $input: CreateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    createFavorites(input: $input, condition: $condition) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFavorites = /* GraphQL */ `
  mutation UpdateFavorites(
    $input: UpdateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    updateFavorites(input: $input, condition: $condition) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFavorites = /* GraphQL */ `
  mutation DeleteFavorites(
    $input: DeleteFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    deleteFavorites(input: $input, condition: $condition) {
      jokeIds
      catFacts
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
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
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
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
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
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
export const createJokeTags = /* GraphQL */ `
  mutation CreateJokeTags(
    $input: CreateJokeTagsInput!
    $condition: ModelJokeTagsConditionInput
  ) {
    createJokeTags(input: $input, condition: $condition) {
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
export const updateJokeTags = /* GraphQL */ `
  mutation UpdateJokeTags(
    $input: UpdateJokeTagsInput!
    $condition: ModelJokeTagsConditionInput
  ) {
    updateJokeTags(input: $input, condition: $condition) {
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
export const deleteJokeTags = /* GraphQL */ `
  mutation DeleteJokeTags(
    $input: DeleteJokeTagsInput!
    $condition: ModelJokeTagsConditionInput
  ) {
    deleteJokeTags(input: $input, condition: $condition) {
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
