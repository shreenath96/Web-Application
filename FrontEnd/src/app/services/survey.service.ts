import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseURL = "http://localhost:8080";
  constructor(private http: HttpClient) { 
  }

  getSurveyDetails(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseURL}/surveys`);
  }

  saveSurvey(student:Partial<Student>): Observable<any>{
    return this.http.post<Student[]>(`${this.baseURL}/student`,student);
  }

}
