import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';

import { Document } from '../models/document';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private BASE_URL = 'http://localhost:3000/document/get';
  private URL2 = 'http://localhost:3000/document/delete';
  private URL = 'http://localhost:3000/document/update';
  private URL4 = 'http://localhost:3000/document/find';
  private URL5 = 'http://localhost:3000/document/post';
  private URL6 = 'http://localhost:3000/document/image';

  private URL7 = 'http://localhost:3000/document/video';
  private URL8 = 'http://localhost:3000/document/pdf';
  private URL9 = 'http://localhost:3000/document/audio';

  // private URL6 = 'http://localhost:3000/task/project';
  // private URL7 = 'http://localhost:3000/task/task';

  constructor(private http:HttpClient) { }

  getDocument(): Observable<Document[]> {  
    return this.http.get<Document[]>(this.BASE_URL);  
  } 

  
  deleteDocument(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateDocument(id:number, document: Document): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,document);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

  addDocument(document: Document): Observable<any>
  {
     return this.http.post<Document>(`${this.URL5}`,document )
  }
  
  public getImages(): Observable<any> {
    return this.http.get<any>(this.URL6);
  }
  public getVideos(): Observable<any> {
    return this.http.get<any>(this.URL7);
  }

  public getPdf(): Observable<any> {
    return this.http.get<any>(this.URL8);
  }
  public getAudio(): Observable<any> {
    return this.http.get<any>(this.URL9);
  }
}
