import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BlaComponent} from "../bla/bla.component";
import {AppComponent} from "../app.component";

const routes: Routes = [
    {
        path: 'bla',
        component: BlaComponent,
    },
    {
        path: '',
        component: AppComponent,
    },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
