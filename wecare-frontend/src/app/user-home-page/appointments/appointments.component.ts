import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments;
  userId:string;
  isAppointmentspresent: boolean = false

  constructor(private userService:UserService,private router: Router) {
    this.userId=localStorage.getItem("userId")
    console.log(this.userId);
    userService.getUserAppointments(this.userId).subscribe((success)=>{
      this.appointments=success
      this.isAppointmentspresent=this.appointments.length>0
    })
   }

  ngOnInit() {
  }

  rescheduleAppointment(bookingId: string){
    this.router.navigate([`/bookings/${bookingId}`]);
  }
}
