import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkoutDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostBlogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Post {
  readonly id: string;
  readonly title?: string | null;
  readonly author?: string | null;
  readonly image?: string | null;
  readonly data?: string | null;
  readonly Blogs?: (PostBlog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Blog {
  readonly id: string;
  readonly title?: string | null;
  readonly author?: string | null;
  readonly image?: string | null;
  readonly shortDescription?: string | null;
  readonly posts?: (PostBlog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Blog, BlogMetaData>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog, BlogMetaData>) => MutableModel<Blog, BlogMetaData> | void): Blog;
}

export declare class WorkoutGroups {
  readonly id: string;
  readonly group?: string | null;
  readonly WorkoutData?: (WorkoutData | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WorkoutGroups, WorkoutGroupsMetaData>);
  static copyOf(source: WorkoutGroups, mutator: (draft: MutableModel<WorkoutGroups, WorkoutGroupsMetaData>) => MutableModel<WorkoutGroups, WorkoutGroupsMetaData> | void): WorkoutGroups;
}

export declare class WorkoutData {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly group: string;
  readonly workoutgroupsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WorkoutData, WorkoutDataMetaData>);
  static copyOf(source: WorkoutData, mutator: (draft: MutableModel<WorkoutData, WorkoutDataMetaData>) => MutableModel<WorkoutData, WorkoutDataMetaData> | void): WorkoutData;
}

export declare class PostBlog {
  readonly id: string;
  readonly post: Post;
  readonly blog: Blog;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PostBlog, PostBlogMetaData>);
  static copyOf(source: PostBlog, mutator: (draft: MutableModel<PostBlog, PostBlogMetaData>) => MutableModel<PostBlog, PostBlogMetaData> | void): PostBlog;
}