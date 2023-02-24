import { createAction, props } from '@ngrx/store';

export const loadGoodSnackbars = createAction(
  '[Snackbar] Load Good Snackbars',
  props<{message:string}>()
);
export const loadBadSnackbars = createAction(
  '[Snackbar] Load Bad Snackbars',
  props<{message:string}>()
);


