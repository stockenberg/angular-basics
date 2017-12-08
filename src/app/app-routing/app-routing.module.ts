import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "../task-list/task-list.component";
import {TaskManagementComponent} from "../task-management/task-management.component";

const routes: Routes = [
    {
        path: '',
        component: TaskListComponent
    },
    {
        path: 'manage',
        component: TaskManagementComponent
    }
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
