import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../model/Api';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  postNewTask(task: Task){
    return this.http.post<any>(`${API}/tasks/new`, task);
  }

  getAllTasks(){
    return this.http.get<any>(`${API}/tasks/`);
  }
}
