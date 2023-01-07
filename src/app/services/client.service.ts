import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   
  private BASE_URL = 'http://localhost:3000/client/get';
  private URL2 = 'http://localhost:3000/client/delete';
  private URL = 'http://localhost:3000/client/update';
  private URL4 = 'http://localhost:3000/client/find';
  private URL5 = 'http://localhost:3000/client/post';
  // private URL6 = 'http://localhost:3000/task/project';
  // private URL7 = 'http://localhost:3000/task/task';

  constructor(private http:HttpClient) {

   }
   getClient(): Observable<Client[]> {  
    return this.http.get<Client[]>(this.BASE_URL);  
  } 

  
  deleteClient(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateClient(id:number, client: Client): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,client);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

  addClient(client: Client): Observable<any>
  {
     return this.http.post<Client>(`${this.URL5}`,client )
  }

}
