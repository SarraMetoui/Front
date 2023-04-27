import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private BASE_URL = 'http://localhost:3000/user/get';
  private URL2 = 'http://localhost:3000/user/delete';
  private URL3 = 'http://localhost:3000/user/update';
  private URL4 = 'http://localhost:3000/user/find';
  private URL6 = 'http://localhost:3000/user/topic';


  constructor(private http:HttpClient) { }

  
  getUsers(): Observable<User[]> {  
    return this.http.get<User[]>(this.BASE_URL);  
  } 

  
  deleteuser(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  updateUsers(id:number, user: User): Observable<any> {
    return this.http.put(`${this.URL3}/${id}`,user);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }
  getProjectTopics(id:number): Observable<any>
  {
    return this.http.get(`${this.URL6}/${id}`);
  }
}