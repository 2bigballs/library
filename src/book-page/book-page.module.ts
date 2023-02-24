import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {bookPageFeatureKey, metaReducers, reducers} from "./store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {BookEffects} from "./store/book/book.effects";
import {bookReducer} from "./store/book/book.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(bookPageFeatureKey,reducers),
    EffectsModule.forFeature([BookEffects]),
  ]
})
export class BookPageModule { }
