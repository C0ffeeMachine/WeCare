import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = "http://localhost:8082"
  constructor(private http: HttpClient) { }

  userLogin(body):Observable<any>{
    return this.http.post(this.baseURL+"/users/login", body)
  }

  getUserAppointments(userId):Observable<any>{
    return this.http.get(this.baseURL+"/users/booking/" + userId)
  }

  getUserById(id: string): Observable<any> {
        return this.http.get(this.baseURL + "/users/" + id)
  }
}
