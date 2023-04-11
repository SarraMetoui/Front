import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Risk } from '../models/risk';

@Injectable({
  providedIn: 'root'
})
export class  RiskService {

  private BASE_URL = 'http://localhost:3000/risk/get';
  private URL2 = 'http://localhost:3000/risk/delete';
  private URL = 'http://localhost:3000/risk/update';
  private URL4 = 'http://localhost:3000/risk/find';
  private URL5 = 'http://localhost:3000/risk/post';
  private URL6 = 'http://localhost:3000/risk/design';
  private URL7 = 'http://localhost:3000/risk/front';
  private URL8 = 'http://localhost:3000/risk/back';
  private URL9 = 'http://localhost:3000/risk/test';
  private URL10 = 'http://localhost:3000/risk/conception';


  // private URL6 = 'http://localhost:3000/task/project';
  // private URL7 = 'http://localhost:3000/task/task';

  constructor(private http:HttpClient) { }

  getRisk(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.BASE_URL);  
  } 

  
  deleteRisk(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateRisk(id:number, risk: Risk): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,risk);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

  addRisk(risk: Risk): Observable<any>
  {
     return this.http.post<Risk>(`${this.URL5}`,risk )
  }

  // getProjectTasks(id:number): Observable<any>
  // {
  //   return this.http.get(`${this.URL6}/${id}`);
  // }

  // getTaskProject(id:number): Observable<any>
  // {
  //   return this.http.get(`${this.URL7}/${id}`);
  // }

  getDesign(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.URL6); 

  } getFront(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.URL7);  
  }
  getBack(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.URL8);  
  }
  getTest(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.URL9);  
  }
  getConception(): Observable<Risk[]> {  
    return this.http.get<Risk[]>(this.URL10);  
  }
}
