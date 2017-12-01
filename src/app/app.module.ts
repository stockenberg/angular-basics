import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


import {AppComponent} from './app.component';
import { BlaComponent } from './bla/bla.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        BlaComponent
    ],
    imports: [
        BrowserModule, FormsModule, CommonModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
