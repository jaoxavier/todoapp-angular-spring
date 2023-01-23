import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  ){
    this.title.setErrors({
      'required':'Title is required',
      'minLength':'Title must be 3 caracters long'
    });
  }

  title = new FormControl('', [Validators.required, Validators.minLength(3)])
  description = new FormControl('');
  
  onSubmit(){
    let model = new Project(
      this.title.value,
      this.description.value
    );

    this.projectService.postNewProject(
      model.projectData
    ).subscribe(
      data => {
        window.location.reload()
      }
    );
  }

}
