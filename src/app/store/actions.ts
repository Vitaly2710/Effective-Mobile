import {createAction, props} from "@ngrx/store";
import {Posts} from "./interfaces";

export const add = createAction('Add posts', props<{post: Posts}>());

