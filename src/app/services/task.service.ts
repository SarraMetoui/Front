import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Task } from '../models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private BASE_URL = 'http://localhost:3000/task/get';
  private URL2 = 'http://localhost:3000/task/delete';
  private URL = 'http://localhost:3000/task/update';
  private URL4 = 'http://localhost:3000/task/find';
  private URL5 = 'http://localhost:3000/task/post';
  private URL6 = 'http://localhost:3000/task/project';
  private URL7 = 'http://localhost:3000/task/task';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {  
    return this.http.get<Task[]>(this.BASE_URL);  
  } 

  
  deleteTask(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateTask(id:number, task: Task): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,task);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

  addTask(task: Task): Observable<any>
  {
     return this.http.post<Task>(`${this.URL5}`,task )
  }

  getProjectTasks(id:number): Observable<any>
  {
    return this.http.get(`${this.URL6}/${id}`);
  }

  getTaskProject(id:number): Observable<any>
  {
    return this.http.get(`${this.URL7}/${id}`);
  }
}
