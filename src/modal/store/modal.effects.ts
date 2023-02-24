import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {concatMap, map} from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ModalActions from './modal.actions';
import * as BookActions from "../../book-page/store/book/book.actions";
import {openModal} from "./modal.actions";
import {ViewBookComponent} from "../../book-page/modals/view-book/view-book.component";
import {IViewBook} from "../../book-page/models/view-book";
import {ModalService} from "../modal.service";

@Injectable()
export class ModalEffects {



openModal$ = createEffect(
  () => {
    return this.actions$.pipe(
      ofType(ModalActions.openModal),
      map((action) => this.modalService.openModal(action.component, action.props))
    );
  }, {dispatch: false})



  constructor(private actions$: Actions,private modalService: ModalService) {}
}
