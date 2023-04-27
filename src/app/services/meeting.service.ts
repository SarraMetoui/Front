import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meeting } from '../models/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private apiUrl = 'http://localhost:3000/meetings';
  private BASE_URL = 'http://localhost:3000/meetings/get';
  private URL2 = 'http://localhost:3000/meetings/delete';
  private URL = 'http://localhost:3000/meetings/update';
  private URL4 = 'http://localhost:3000/meetings/find';
  private URL5 = 'http://localhost:3000/meetings/post';
  private URL6 = 'http://localhost:3000/meetings/project';
  private URL7 = 'http://localhost:3000/meetings/change';
  
  constructor(private http: HttpClient) { }

  getMeetings(): Observable<Meeting[]> {  
    return this.http.get<Meeting[]>(this.BASE_URL);  
  } 

  
  deleteMeeting(id: number): Observable<any> {  
    return this.http.delete(`${this.URL2}/${id}`,{ responseType: 'text' });  
  }   
 
  
  updateMeeting(id:number, meeting: Meeting): Observable<any> {
    return this.http.put(`${this.URL}/${id}`,meeting);  
  }
  
  getCurrentData(id:number): Observable<any>
  {
    return this.http.get(`${this.URL4}/${id}`);
  }

 

  addmeeting(meeting: Meeting, projectid: number): Observable<any> {
    meeting.projectid = projectid;
    return this.http.post<Meeting>(`${this.URL5}/${projectid}`, meeting);
  }
  

  getProjectMeetings(id:number): Observable<any>
  {
    return this.http.get(`${this.URL6}/${id}`);
  }

  updateStatus(id:number, status: string): Observable<any> {
    return this.http.put(`${this.URL7}/${id}/status`, { status });  
  }  

  getMeetingsByDate(date: Date): Observable<Meeting[]> {
    const formattedDate = date.toISOString().split('T')[0]; // format the date as YYYY-MM-DD
    const params = new HttpParams().set('date', formattedDate); // add the formatted date as a query parameter
    return this.http.get<Meeting[]>('http://localhost:3000/meetings/getdate', { params });
  }
  
  
}
