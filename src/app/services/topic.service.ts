import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Topic } from '../models/topics';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private BASE_URL = 'http://localhost:3000/topic/get';
  private URL2 = 'http://localhost:3000/topic/delete';
  private URL = 'http://localhost:3000/topic/update';
  private URL4 = 'http://localhost:3000/topic/find';
  private URL5 = 'http://localhost:3000/topic/post';
  private URL6 = 'http://localhost:3000/topic/project';
  // private URL7 = 'http://localhost:3000/task/task';

  constructor(private http:HttpClient) { }

  getTopics(): Observable<Topic[]> {  
    return this.http.get<Topic[]>(this.BASE_URL);  
  } 

  
  deleteTopic(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateTopic(id:number, topic: Topic): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,topic);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  } 

  addTopic(topic: Topic): Observable<any>
  {
     return this.http.post<Topic>(`${this.URL5}`,topic )
  }
  addTopic2(topic: Topic, projectid: number): Observable<any> {
    topic.projectid = projectid;
    return this.http.post<Topic>(`${this.URL5}/${projectid}`, topic);
  }
  

  getProjectTopics(id:number): Observable<any>
  {
    return this.http.get(`${this.URL6}/${id}`);
  }

  // getTaskProject(id:number): Observable<any>
  // {
  //   return this.http.get(`${this.URL7}/${id}`);
  // }
}
