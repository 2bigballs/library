import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Dialog} from "@angular/cdk/dialog";
import {props} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  dialogRef: MatDialogRef<any>;
  constructor(public dialog: MatDialog) { }

openModal<T, R>(
    component: new (dialogRef: MatDialogRef<T>, props: R) => T,
    props: R
  ): void {
    this.dialogRef = this.dialog.open(component, { data: props });
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
