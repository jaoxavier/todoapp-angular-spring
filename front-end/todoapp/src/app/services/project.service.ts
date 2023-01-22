import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { API } from '../model/Api';

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
}
