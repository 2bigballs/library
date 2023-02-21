import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import {Observable, EMPTY, of, tap, empty} from 'rxjs';
import * as BookActions from './book.actions';
import {BookService} from "../../services/book.service";
import {IViewBook} from "../../models/view-book";
import {openModal} from "../modal/modal.actions";
import {ViewBookComponent} from "../../modals/view-book/view-book.component";


@Injectable()
export class BookEffects {

  getBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.getBooks),

      concatMap((action) => this.bookService.getBooks(action.filter)

        .pipe(
          map(books => BookActions.getBooksSuccess({books}))
        )
      )
    );
  });


  createBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBook),
      concatMap((action) => this.bookService.createBook(action.book)
        .pipe(
          map(book => BookActions.getBooks({filter: ""})),
        )
      )
    );
  })

  updateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.updateBook),
      concatMap((action) => this.bookService.updateBook(action.book)
        .pipe(
          map(book => BookActions.getBooks({filter: ""})),
        )
      )
    );
  })

  getViewBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.getViewBook),

      concatMap((action) => this.bookService.getViewBook(action.bookId)

        .pipe(
          map(book => BookActions.prepareForOpenViewBookModal({viewBook: book})),
        )
      )
    );
  })

  prepareForOpenViewBookModal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.prepareForOpenViewBookModal),
      map((action) => openModal({
        props: action.viewBook,
        component: ViewBookComponent
      })),
    )
  })


  constructor(private actions$: Actions, private bookService: BookService) {
  }

}


