import {Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Task} from "../task";
import {Error} from "../error";

@Component({
    selector: 'app-task-management',
    templateUrl: './task-management.component.html',
    styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {

    task: Task = new Task();
    errors: Error = new Error;
    postRoute = 'http://localhost:8000/api/task';

    constructor(private http: HttpClient) {

    }

    ngOnInit() {

    }

    submitTask() {

        console.log(this.task.taskTitle);
        console.log(this.task.taskDescription);

        this.http.post(this.postRoute, this.task).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
                this.errors = err.error.errors;
                console.log(this.errors);
            }
        );

        this.task = new Task;
    }


}
