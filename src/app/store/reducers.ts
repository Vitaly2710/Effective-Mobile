import { createReducer, on } from '@ngrx/store';
import {add} from "./actions";
import {Posts} from "./interfaces";

export enum PostStore {
  Post = 'post',
}

export interface State {
  posts: Posts
}

export const initialState:State = {
  posts: {id: 1, body: '', title:'', userId: 1}
};

export const postReducer = createReducer(
  initialState,
  on(add, (state, post) => ({ posts: post.post}))
);
