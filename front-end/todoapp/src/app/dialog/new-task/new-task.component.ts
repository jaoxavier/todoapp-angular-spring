import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import { TaskDTO } from 'src/app/model/TaskDTO';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  taskForm = {
    title: '',
    description: '',
    dueDate: ''
  }

  idProject: number;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService  
  )
  {
    this.idProject = data.id
  }

  onSubmit(){
    let model = new TaskDTO(
      this.idProject,
      this.taskForm.title,
      this.taskForm.description,
      this.taskForm.dueDate
    );

    this.taskService.postNewTask(
      JSON.parse(model.toString())
    ).subscribe(data => {
      console.log(data)
      window.location.reload()
    });
  }

}
