import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {bookFeatureKey, bookReducer, BookState} from "../store/book/book.reducer";

export interface State {
  [bookFeatureKey]: BookState;
}

export const reducers: ActionReducerMap<State> = {

  [bookFeatureKey]: bookReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
