// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Joke, Favorites } = initSchema(schema);

export {
  Joke,
  Favorites
};