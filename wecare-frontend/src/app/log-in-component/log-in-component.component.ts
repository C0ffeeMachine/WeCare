import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoachService } from '../services/coach.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css']
})
export class LogInComponentComponent implements OnInit {

  type:string;
  loginform:FormGroup;
  errorStatus:boolean=true;
  error:string;
  constructor(private route:ActivatedRoute, private fb:FormBuilder, private router:Router,
     private coachService:CoachService, private userService:UserService) { }

  ngOnInit() {
    this.type = this.route.snapshot.params['type'];
    this.loginform = this.fb.group({
      id:['', Validators.required],
      password:['', Validators.required]
    })
  }
  submitCoach(){
    this.coachService.coachLogin(this.loginform.value).subscribe((result)=>{
      this.errorStatus = result;
      if(this.errorStatus){
        localStorage.setItem("coachId",this.loginform.controls.id.value)
        this.router.navigate(["/coachhome"])
      }
    })
  }
  submitUser(){
    this.userService.userLogin(this.loginform.value).subscribe((result)=>{
      this.errorStatus = result;
      if(this.errorStatus){
        localStorage.setItem("userId",this.loginform.controls.id.value)
        this.router.navigate(["/userhome"])
      }
    })
  }
}
