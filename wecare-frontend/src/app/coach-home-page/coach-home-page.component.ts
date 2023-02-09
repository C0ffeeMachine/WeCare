import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoachService } from '../services/coach.service';

@Component({
  selector: 'app-coach-home-page',
  templateUrl: './coach-home-page.component.html',
  styleUrls: ['./coach-home-page.component.css']
})
export class CoachHomePageComponent implements OnInit {
  appointments
  coachId
  
  isAppointmentspresent: boolean = false

  constructor(private coachService:CoachService, private router: Router) {
    this.coachId=localStorage.getItem("coachId")
    coachService.getCoachSchedule(this.coachId).subscribe((success)=>{
      this.appointments=success
      this.isAppointmentspresent=this.appointments.length>0
    })
   }

  ngOnInit(): void {
    const coachId = localStorage.getItem("coachId");
    console.log(coachId);
    // if (!coachId) this.router.navigate(["/login/coach"])
    // this.appointments = [
    // ]
    // this.isAppointmentspresent = this.appointments.length >0
  }





}
