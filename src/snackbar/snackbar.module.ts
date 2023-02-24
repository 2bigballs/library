import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../book-page/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {SnackbarEffects} from "./store/snackbar.effects";
import {SnackbarService} from "./snackbar.service";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SnackbarEffects]),

  ],
  providers: [SnackbarService],
})
export class SnackbarModule { }
