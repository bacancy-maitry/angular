import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AppInterface } from './app-interface';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  // private dataUrl = 'https://reqres.in/api/users?page=2';
  // private dataUrl = 'https://reqres.in/api/unknown/2';
  private dataUrl = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getData(): Observable<AppInterface[]>{
    return this.http.get<AppInterface[]>(this.dataUrl);
  }

  addData(title: AppInterface): Observable<AppInterface>{
    return this.http.post<AppInterface>(this.dataUrl, title);
  }

  deleteData (id: AppInterface | number): Observable<AppInterface>{
    const dataId = typeof id === 'number' ? id : id.id;
    const url = `${this.dataUrl}/${id}`;

    return this.http.delete<AppInterface>(url);
  }
}
