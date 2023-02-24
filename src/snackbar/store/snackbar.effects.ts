import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, mergeMap} from 'rxjs/operators';
import * as SnackbarActions from './snackbar.actions';
import {SnackbarService} from "../snackbar.service";
import {ColorClassNameEnum} from "../colorClassNameEnum";


@Injectable()
export class SnackbarEffects {

  loadGoodSnackbars$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SnackbarActions.loadGoodSnackbars),
      map((action) => this.snackbarService.openSnackBar(action.message,ColorClassNameEnum.colorSnackBarSuccessful))
    );
  }, {dispatch: false});
  loadBadSnackbars$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SnackbarActions.loadBadSnackbars),
      map((action) => this.snackbarService.openSnackBar(action.message,ColorClassNameEnum.colorSnackBarFailure))
    );
  }, {dispatch: false});



  constructor(private actions$: Actions,private snackbarService: SnackbarService) {}
}
