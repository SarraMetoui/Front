import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  private baseUrl = 'http://localhost:3000/files';

  constructor(private http: HttpClient){}

//    upload(file: File): Observable<any> {
//     const formData: FormData = new FormData();

//     formData.append('file', file);
//     // const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*' })
//     const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData,{
//       reportProgress: true,
//       responseType: 'json',
//     });

//     return this.http.post(`${this.baseUrl}/upload`,formData);
//   }

//   getFiles(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/files`);
//   }
// }

upload(file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('file', file);

  const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}

getFiles(): Observable<any> {
  return this.http.get(`${this.baseUrl}/files`);
}
}