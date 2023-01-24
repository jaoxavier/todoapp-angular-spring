import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../model/Api';
import { Task } from '../model/Task';
import { TaskDTO } from '../model/TaskDTO';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  postNewTask(task: Task | TaskDTO){
    return this.http.post<any>(`${API}/tasks/new`, task);
  }

  getAllTasks(idProject: number){
    return this.http.get<any>(`${API}/tasks/idProject/${idProject}`);
  }

  patchTask(task: Task, idTask: number){
    return this.http.patch<any>(`${API}/tasks/edit/idTask/${idTask}`, task);
  }

  deleteTask(idTask: number){
    return this.http.delete<any>(`${API}/tasks/delete/idTask/${idTask}`);
  }
}
