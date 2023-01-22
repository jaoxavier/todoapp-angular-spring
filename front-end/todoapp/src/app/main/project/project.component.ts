import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from 'src/app/dialog/edit-project/edit-project.component';
import { NewTaskComponent } from 'src/app/dialog/new-task/new-task.component';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit{
  
  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ){}

  projects: Project[] = [];

  ngOnInit(){
    this.projectService.getAllProject().subscribe(
      data => this.projects = data
    )
  }

  edit(idProject: number){
    this.dialog.open(EditProjectComponent, {
      data: {
        id: idProject
      }
    });
  }

  delete(idProject: number){
    this.projectService.deleteProject(idProject).subscribe(
      data => window.location.reload()
    )
  }

  newTask(idProject: number){
    this.dialog.open(NewTaskComponent, {
      data : {
        id: idProject
      }
    });
  }

}
