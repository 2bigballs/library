import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IBook} from "../models/book";
import {bookReducer} from "../store/book/book.reducer";
import {IViewBook} from "../models/view-book";
import {MockStore} from "@ngrx/store/testing";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})


export class ViewBookComponent {

  book: IViewBook
  constructor(private dialogRef: MatDialogRef<ViewBookComponent>,
              @Inject(MAT_DIALOG_DATA) private props: IViewBook )
  {
  this.book = props;


  }




  onClose(): void {
    this.dialogRef.close();
  }



}
