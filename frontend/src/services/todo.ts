import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ToDo {
  private apiUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}