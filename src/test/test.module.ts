import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './test-component/test-component.component';
import {BrowserModule} from "@angular/platform-browser";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMatFileInputModule,
    FormsModule

  ],
  bootstrap:[
    AppComponent
  ]

})
export class TestModule { }
