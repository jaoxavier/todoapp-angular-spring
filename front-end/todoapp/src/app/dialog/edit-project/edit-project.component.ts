import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

  id: number;

  constructor(
    @Inject (MAT_DIALOG_DATA) data: any,
    private projectService: ProjectService
  ){
    this.id = data.id
  }
  
  projectForm = {
    title: '' as string | null,
    description: '' as string | null
  }

  onSubmit(){

    this.projectForm.title = this.projectForm.title === '' ? null : this.projectForm.title
    this.projectForm.description = this.projectForm.description === '' ? null : this.projectForm.description

    let model = new Project(
      this.projectForm.title,
      this.projectForm.description
    );

    this.projectService.patchProject(
      JSON.parse(model.toString()),
      this.id
    ).subscribe(
      data => {
        window.location.reload()
      }
    );
  }


}
