import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  constructor(
    private taskService: TaskService
  ){}

  tasks: Task[] = [];

  ngOnInit(){
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data
    });
  }

}
