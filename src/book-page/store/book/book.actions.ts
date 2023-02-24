import { createAction, props } from '@ngrx/store';
import {IBookForm} from "../../models/bookForm";
import {IBook} from "../../models/book";
import {IViewBook} from "../../models/view-book";

export const getBooks = createAction(
  '[Book] Get Books',
  props<{ filter: string }>()
)

export const getBooksSuccess = createAction(
  '[Book] Get Books Success',
  props<{ books: IBook[] }>()
)

export const createBook = createAction(
  '[Book] Create Book',
  props<{ book: Partial<IBookForm> }>()
)
export const createBookSuccessful = createAction(
  '[Book] Create Book Successful',
)

export const updateBook= createAction(
  '[Book] Update Book',
  props<{ book: Partial<IBookForm> }>()
)
export const updateBookSuccessful= createAction(
  '[Book] Update Book Successful',
)

export const selectBook= createAction(
  '[Book] Select Book',
  props<{ book?: IBook }>()
)

export const getViewBook = createAction(
  '[Book] Get View Book',
  props<{ bookId: number }>()
)

export const prepareForOpenViewBookModal=createAction(
  '[Book] Prepare For Open View Book Modal',
  props<{ viewBook: IViewBook }>()
)








