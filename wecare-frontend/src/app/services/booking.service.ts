import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  bookAppointment(data: Booking): Observable<any>{
    return this.http.post(`http://localhost:8083/users/${data.userId}/booking/${data.coachId}`,data);
  }

  rescheduleAppointment(data: string, formData: Booking): Observable<any>{
    return this.http.put(`http://localhost:8083/booking/${data}`,formData);
  }
}
