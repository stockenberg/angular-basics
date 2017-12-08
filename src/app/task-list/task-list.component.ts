import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../task";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    getPath = 'http://localhost:8000/api/tasks';

    tasks: Array<Task>;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get(this.getPath).subscribe(res => {
            this.tasks = res;
            console.log(this.tasks);
        });
    }

}
