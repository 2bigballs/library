import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BookListComponent } from './components/books-page/book-list/book-list.component';
import { BookListItemComponent } from './components/books-page/book-list/book-list-item/book-list-item.component';
import { EditBookComponent } from './components/books-page/edit-book/edit-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import {FlexLayoutModule} from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {BookEffects} from "./store/book/book.effects";
import {MatDialogModule} from "@angular/material/dialog";
import {ViewBookComponent} from "./modals/view-book/view-book.component";
import {ModalEffects} from "./store/modal/modal.effects";






@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent
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
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BookEffects,ModalEffects]),
    MatDialogModule



  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
