import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import { TaskDTO } from 'src/app/model/TaskDTO';
import { TaskService } from 'src/app/services/task.service';
import * as moment from 'moment';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  title = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('');
  dueDate = new FormControl('', [Validators.required]);

  idProject: number;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService
  )
  {
    this.idProject = data.id;
    
    this.title.setErrors({
      'required':'',
    });
  }

  onSubmit(){
    let date = moment(this.dueDate.value).format('yyyy-MM-DD');

    let model = new TaskDTO(
      this.idProject,
      this.title.value,
      this.description.value,
      date
    );

    this.taskService.postNewTask(model).subscribe(
      data => {
        window.location.reload()
      }
    );
  }

}
