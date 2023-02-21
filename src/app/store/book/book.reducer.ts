import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import {IBook} from "../../models/book";

export const bookFeatureKey = 'book';

export interface BookState {
  books: IBook[];
  selectedBook?: IBook;
}

export const initialState:  BookState = {
  books: [],
  selectedBook: undefined
};

export const bookReducer = createReducer(
  initialState,

  on(BookActions.getBooksSuccess, (state,action) => ({
    ...state,
    books: action.books

  })),

  on(BookActions.selectBook, (state,action) => ({
    ...state,
    selectedBook: action.book
  }))



);
