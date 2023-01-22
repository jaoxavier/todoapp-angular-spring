import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { API } from '../model/Api';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../dialog/edit-project/edit-project.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ){ }

  postNewProject(project: Project){
    return this.http.post<any>(`${API}/projects/new`, project);
  }
  //this will change to get projects by id client on future
  getAllProject(){
    return this.http.get<any>(`${API}/projects/`);
  }

  deleteProject(idProject: number){
    return this.http.delete<any>(`${API}/projects/delete/idProject/${idProject}`);
  }

  patchProject(project: Project, idProject: number){
    return this.http.patch<any>(`${API}/projects/edit/idProject/${idProject}`, project);
  }
}
