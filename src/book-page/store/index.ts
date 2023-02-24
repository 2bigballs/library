import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {bookFeatureKey, bookReducer, BookState} from "./book/book.reducer";
import * as fromBook from "./book/book.reducer";
 export const bookPageFeatureKey= 'bookPage';
export interface State {
  [bookFeatureKey]: BookState;
}

export const reducers: ActionReducerMap<State> = {

  [bookFeatureKey]: bookReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

export const bookPageState = createFeatureSelector<State>(
  bookPageFeatureKey
);
