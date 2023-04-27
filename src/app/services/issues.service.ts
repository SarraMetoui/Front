// issue.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/issue';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private apiUrl = 'http://localhost:3000/issues';
  private BASE_URL = 'http://localhost:3000/issue/get';
  private URL2 = 'http://localhost:3000/issue/delete';
  private URL = 'http://localhost:3000/issue/update';
  private URL4 = 'http://localhost:3000/issue/find';
  private URL5 = 'http://localhost:3000/issue/post';
  private URL6 = 'http://localhost:3000/issue/project';
  private URL7 = 'http://localhost:3000/issue/change';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {  
    return this.http.get<Issue[]>(this.BASE_URL);  
  } 

  
  deleteIssue(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateIssue(id:number, issue: Issue): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,issue);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

 

  addissue(issue: Issue, projectid: number): Observable<any> {
    issue.projectid = projectid;
    return this.http.post<Issue>(`${this.URL5}/${projectid}`, issue);
  }
  

  getProjectIssues(id:number): Observable<any>
  {
    return this.http.get(`${this.URL6}/${id}`);
  }

  updateStatus(id:number, status: string): Observable<any> {
    return this.http.put(`${this.URL7}/${id}/status`, { status });  
  }  

}
