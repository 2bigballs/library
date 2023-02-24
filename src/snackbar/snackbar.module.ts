import {isDevMode, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "../app/reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {SnackbarEffects} from "./store/snackbar.effects";
import {SnackbarService} from "./snackbar.service";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forFeature([SnackbarEffects]),

  ],
  providers: [SnackbarService],
})
export class SnackbarModule { }
