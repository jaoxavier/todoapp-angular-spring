import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  taskForm = {
    title: '' as string | null,
    description: '' as string | null,
    dueDate: '' as string | null
  }

  id: number;
  dueDate: string;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService
  ){
    this.id = data.id
    this.dueDate = data.dueDate
  }

  onSubmit(){

    this.taskForm.title = this.taskForm.title === '' ? null : this.taskForm.title
    this.taskForm.description = this.taskForm.description === '' ? null : this.taskForm.description
    this.taskForm.dueDate = this.taskForm.dueDate === '' ? this.taskForm.dueDate = this.dueDate : this.taskForm.dueDate

    let model = new Task(
      this.taskForm.title,
      this.taskForm.description,
      this.taskForm.dueDate
    )

    this.taskService.patchTask(
      model.taskData,
      this.id
    ).subscribe(data =>{
      window.location.reload()
    });
  }

}
