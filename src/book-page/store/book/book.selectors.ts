import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import {AssignHelperFn} from "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers";
import {bookPageFeatureKey, bookPageState} from "../index";
import {BookState} from "./book.reducer";

const selectBookState = createSelector(bookPageState, (state) => state.book);

export const getBooks = createSelector(
  selectBookState,(state: fromBook.BookState) => state.books
)

export const selectedBook = createSelector(
  selectBookState,(state: fromBook.BookState) => state.selectedBook
)
