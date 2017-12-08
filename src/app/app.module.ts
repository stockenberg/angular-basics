import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {TaskListComponent} from './task-list/task-list.component';
import {TaskManagementComponent} from './task-management/task-management.component';


@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskManagementComponent
    ],
    imports: [
        BrowserModule, FormsModule, CommonModule, AppRoutingModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
