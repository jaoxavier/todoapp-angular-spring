import { Component, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent{

  constructor(
    private projectService: ProjectService
  ){}
  
  projectForm = {
    title: '',
    description: ''
  }

  onSubmit(){
    let model = new Project(
      this.projectForm.title,
      this.projectForm.description
    );

    this.projectService.postNewProject(
      JSON.parse(model.toString())
    ).subscribe(
      data => {
        window.location.reload()
      }
    );
  }

}
