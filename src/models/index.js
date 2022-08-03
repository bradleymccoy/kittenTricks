// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Blog, WorkoutGroups, WorkoutData, PostBlog } = initSchema(schema);

export {
  Post,
  Blog,
  WorkoutGroups,
  WorkoutData,
  PostBlog
};
