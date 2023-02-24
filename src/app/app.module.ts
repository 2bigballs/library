import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BooksPageComponent} from '../book-page/books-page.component';
import {BookListComponent} from '../book-page/components/book-list/book-list.component';
import {BookListItemComponent} from '../book-page/components/book-list/book-list-item/book-list-item.component';
import {EditBookComponent} from '../book-page/components/edit-book/edit-book.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import {FlexLayoutModule} from "@angular/flex-layout";
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from '../book-page/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {BookEffects} from "../book-page/store/book/book.effects";
import {MatDialogModule} from "@angular/material/dialog";
import {ViewBookComponent} from "../book-page/modals/view-book/view-book.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SnackbarModule} from "../snackbar/snackbar.module";
import {ModalModule} from "../modal/modal.module";
import {BookPageModule} from "../book-page/book-page.module";


@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatFileInputModule,
    FlexLayoutModule,
    StoreModule.forRoot({}, {
      runtimeChecks:
        {
          strictStateImmutability: false,
          strictActionImmutability: false,
        },
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([]),
    MatDialogModule,
    MatToolbarModule,
    SnackbarModule,
    ModalModule,
    BookPageModule


  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {
}
