import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

  title = new FormControl('', [Validators.minLength(3)]);
  description = new FormControl('');

  id: number;

  constructor(
    @Inject (MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService
  ){
    this.id = data.id
  }

  onSubmit(){
    this.title = this.title.value === '' ? new FormControl(null) : this.title
    this.description= this.description.value === '' ? new FormControl(null) : this.description

    let model: Project = {
      title: this.title.value,
      description: this.description.value
    };

    console.log(model)

    this.projectService.patchProject(
      model,
      this.id
    ).subscribe(
      data => {
        window.location.reload()
      }
    );
  }


}
