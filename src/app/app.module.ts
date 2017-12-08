import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { TaskListComponent } from './task-list/task-list.component';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent
    ],
    imports: [
        BrowserModule, FormsModule, CommonModule, AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
