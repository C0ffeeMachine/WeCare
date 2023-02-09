import { Component, OnInit } from '@angular/core';
import { Coach } from 'src/app/models/coach.model';
import { CoachService } from 'src/app/services/coach.service';

@Component({
  selector: 'app-coach-view-profile',
  templateUrl: './coach-view-profile.component.html',
  styleUrls: ['./coach-view-profile.component.css']
})
export class CoachViewProfileComponent implements OnInit {

  coach: Coach;

  constructor(private userService: CoachService) { }

  ngOnInit() {
    const coachId = localStorage.getItem("coachId");
    this.getCoachById(coachId);  
  }

  getCoachById(id: string) {
    this.userService.getCoachById(id).subscribe((result)=>{
      console.log(result)
      this.coach = result;
  })
 }
}
