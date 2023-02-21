import {Component, Input} from '@angular/core';
import {IBook} from "../../../../models/book";
import {baseUrl} from "../../../../services/book.service";
import {Store} from "@ngrx/store";
import * as BookActions from "../../../../store/book/book.actions";

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})

export class BookListItemComponent {
@Input() book : IBook




  constructor(private store: Store) {


  }
  handleEdit()
  {
    this.store.dispatch(BookActions.selectBook({book: this.book}))
  }

  handleView() {
  this.store.dispatch(BookActions.getViewBook({bookId: this.book.id}))
}

}
