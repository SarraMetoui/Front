import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private BASE_URL = 'http://localhost:3000/project/get';
  private URL2 = 'http://localhost:3000/project/delete';
  private URL = 'http://localhost:3000/project/update';
  private URL4 = 'http://localhost:3000/project/find';
  private URL5 = 'http://localhost:3000/project/post';
  private URL6 = 'http://localhost:3000/project/total';
  private URL7 = 'http://localhost:3000/project/active';
  private URL8 = 'http://localhost:3000/project/completed';


  constructor(private http:HttpClient) { }

  
  getProjects(): Observable<Project[]> {  
    return this.http.get<Project[]>(this.BASE_URL);  
  } 

  
  deleteproject(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateProjects(id:number, project: Project): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,project);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

  addProject(project: Project): Observable<any>
  {
     return this.http.post<Project>(`${this.URL5}`,project )
  }
 
  public getNbProjects(): Observable<any> {
    return this.http.get<any>(this.URL6);
  }
  public getActive(): Observable<any> {
    return this.http.get<any>(this.URL7);
  }
  public getCompleted(): Observable<any> {
    return this.http.get<any>(this.URL8);
  }
}