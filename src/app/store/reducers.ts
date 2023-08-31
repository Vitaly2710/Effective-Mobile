import { createReducer, on } from '@ngrx/store';
import {Posts} from './interfaces';
import {add} from "./actions";

export interface State {
  posts: number
}

export const initialState:State = {
  posts: 0
};

export const counterReducer = createReducer(
  initialState,
  on(add, state => ({...state, posts: state.posts + 1 }))
);
