import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, switchMap} from 'rxjs/operators';
import {Observable, EMPTY, of, tap, empty, from} from 'rxjs';
import * as BookActions from './book.actions';
import {BookService} from "../../services/book.service";
import {openModal} from "../modal/modal.actions";
import {ViewBookComponent} from "../../modals/view-book/view-book.component";
import * as SnackbarActions from '../../../snackbar/store/snackbar.actions';
import {HttpErrorResponse} from "@angular/common/http";
import {convertHttpErrorResponse} from "../../services/helpers/httpClient.helper";

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
          map(book => BookActions.createBookSuccessful()),
          catchError((error : HttpErrorResponse)=>{
            return of(SnackbarActions.loadBadSnackbars({message: convertHttpErrorResponse(error)}))
          })
        )
      )
    )
  })
  createBookSuccessful$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBookSuccessful),
      map(books => BookActions.getBooks({filter: ''}))
  )
  })
  createSnackBar$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.createBookSuccessful),
      map(books => SnackbarActions.loadGoodSnackbars({message: 'Book Created Successfully'}))
    )
  })


  updateBook$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.updateBook),
      concatMap((action) => this.bookService.updateBook(action.book)
        .pipe(
          map(book => BookActions.updateBookSuccessful()),
          catchError((error : HttpErrorResponse)=>
            of(SnackbarActions.loadBadSnackbars({message:convertHttpErrorResponse(error)})))
        )
      )
    );
  })
  updateBookSuccessful$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.updateBookSuccessful),
    map(books => BookActions.getBooks({filter: ''}))
  ))

  updateSnackBar$ =createEffect(() => this.actions$.pipe(
    ofType(BookActions.updateBookSuccessful),
    map(books => SnackbarActions.loadGoodSnackbars({message: 'Book Updated Successfully'}))
  ))





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


