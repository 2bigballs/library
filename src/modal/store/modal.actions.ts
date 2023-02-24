import { createAction, props } from '@ngrx/store';
import {IViewBook} from "../../book-page/models/view-book";
import {MatDialogRef} from "@angular/material/dialog";
import {R} from "@angular/cdk/keycodes";

export const openModal = createAction(
    '[Modal] Open Modal',
    props<{component: any, props: any}>()
  );






