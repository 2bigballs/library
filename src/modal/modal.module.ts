import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {ModalEffects} from "./store/modal.effects";
import {ModalService} from "./modal.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ModalEffects]),
  ],
  providers: [ModalService],

})
export class ModalModule { }
