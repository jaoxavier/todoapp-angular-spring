import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from 'src/app/dialog/edit-task/edit-task.component';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  panelOpenState = false;

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog
  ){}

  tasks: Task[] = [];

  ngOnInit(){
    this.taskService.getAllTasks().subscribe(data => {
      this.tasks = data
    });
  }

  finished(id: number){
    let task = this.tasks.find(i => i.id == id);  

    if(task != undefined){
      task.finished = !task.finished;
      this.taskService.patchTask(task, id).subscribe(
        data => {
          let index = this.tasks.findIndex(task => task.id == id);
          this.tasks[index] = data;
          window.location.reload()
        }
      );
    }
  }

  edit(id: number, dueDate: string){
    this.dialog.open(EditTaskComponent, {
      data: {
        id: id,
        dueDate: dueDate
      }
    })
  }

  delete(id: number){
    this.taskService.deleteTask(id).subscribe(
      data => window.location.reload()
    )
  }

}
