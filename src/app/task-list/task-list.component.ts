import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Task} from "../task";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Array<Task>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/tasks').subscribe(res => {
      console.log(res);
    });
  }

}
