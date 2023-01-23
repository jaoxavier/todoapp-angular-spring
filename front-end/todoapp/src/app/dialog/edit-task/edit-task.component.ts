import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  title = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('');
  dueDateForm = new FormControl('')

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

    this.title = this.title.value === '' ? new FormControl(null) : this.title
    this.description = this.description.value === '' ? new FormControl(null) : this.description
    this.dueDateForm = this.dueDateForm.value === '' ? new FormControl(this.dueDate) : this.dueDateForm

    let model = new Task(
      this.title.value,
      this.description.value,
      this.dueDateForm.value
    )

    this.taskService.patchTask(
      model.taskData,
      this.id
    ).subscribe(data =>{
      window.location.reload()
    });
  }

}
