import {State} from "./reducers";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Posts} from "./interfaces";


export const state = createFeatureSelector<State>('count');
export const data = createSelector(state, (state) => state.posts)
