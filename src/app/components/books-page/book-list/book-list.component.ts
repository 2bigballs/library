import {Component} from '@angular/core';
import {BookService} from "../../../services/book.service";
import {Observable, tap} from "rxjs";
import {IBook} from "../../../models/book";
import {MockStore} from "@ngrx/store/testing";
import {Store} from "@ngrx/store";
import * as BookActions from "../../../store/book/book.actions";
import {getBooks} from "../../../store/book/book.selectors";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books$ = this.store.select(getBooks);
  filterBooks="All";

  constructor(private bookService: BookService, private store: Store) {
    this.onChangeFilter();
  }


  onChangeFilter() {
    this.store.dispatch(BookActions.getBooks({filter: this.filterBooks}))
  }


}
