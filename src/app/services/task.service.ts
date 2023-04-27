import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Task } from '../models/tasks';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

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
  private URL8 = 'http://localhost:3000/task/user';


  constructor(private http:HttpClient, private route: ActivatedRoute) { }
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

  // addTask(task: Task): Observable<any>
  // {
  //   const projectID = this.route.snapshot.paramMap.get('id'); // Extract the project ID from the URL
  //   task.projectid = parseInt(projectID, 10); // Convert the project ID to a number and set it as the task's project ID
  //    return this.http.post<Task>(`${this.URL5}`,task )
  // }

  addTask(task: Task, topicid: number): Observable<any> {
    task.topicid = topicid;
   
    return this.http.post<Task>(`${this.URL5}/${topicid}`, task);
  }
  addTask2(task:Task, uid:number): Observable<any> {
   
    task.uid =uid;
  
    return this.http.post<Task>(`${this.URL8}/${uid}`, task);
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
