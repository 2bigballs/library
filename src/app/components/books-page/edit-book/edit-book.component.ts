import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import {IBookForm} from "../../../models/bookForm";
import {ErrorStateMatcher, ThemePalette} from "@angular/material/core";
import {BookService} from "../../../services/book.service";
import {Store} from "@ngrx/store";
import * as BookActions from "../../../store/book/book.actions";
import {selectedBook} from "../../../store/book/book.selectors";

type BookForm = { [T in keyof Omit<IBookForm, "id">]: AbstractControl<any> }


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent {
  matcher = new MyErrorStateMatcher();
  bookForm = new FormGroup<BookForm>({
    title: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    cover: new FormControl(null, Validators.required),
    genre: new FormControl("", {
      updateOn: "change",
      validators: [
        Validators.required,
        Validators.pattern("^[a-zA-Z- ]*$"),
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
    }),
    author: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-zA-Z- ]*$")
    ]),
    content: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000)
    ]),


  });
  color: ThemePalette = "accent";
  bookId?: number;


  constructor(private bookService: BookService, private store: Store) {

    this.store.select(selectedBook).subscribe(books => {
      if (!books) {
        return;
      }
      this.bookId = books.id;
      this.bookForm.patchValue({
        title: books.title,
        genre: books.genre,
        author: books.author,
        content: books.content

      })
      const filenameFromUrl = this.getFileName(books.cover)
      this.bookForm.controls.cover.setValue(new File([], filenameFromUrl!));
    })

    this.bookForm.statusChanges.subscribe(status => {
      console.log(this.bookForm);
    })
  }


  getFileName(urlBook: string) {
    let newCover = urlBook.split('/').pop();
    return newCover;
  }


  get cover() {
    return this.bookForm.controls.cover as FormControl;
  }

  addBook(): void {
    this.store.dispatch(BookActions.createBook({book: this.bookForm.value}));
    this.clearForm();
  }

  updateBook(): void {
    this.store.dispatch(BookActions.updateBook({book: {...this.bookForm.value, id: this.bookId}}));
  }

  clearForm(): void {
    this.bookForm.reset();
    this.bookId = undefined;
    this.store.dispatch(BookActions.selectBook({book: undefined}));
  }


}


