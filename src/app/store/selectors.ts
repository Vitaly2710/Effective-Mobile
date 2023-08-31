import {State} from "./reducers";
import {createSelector} from "@ngrx/store";
import {Posts} from "./interfaces";

export const selectFeature = (state: State) => state.posts;

export const selectFeatureCount = createSelector(
  selectFeature,
  (state) => state
);
