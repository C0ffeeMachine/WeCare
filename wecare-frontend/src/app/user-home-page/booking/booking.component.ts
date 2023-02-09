import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookAppointmentForm: FormGroup;
  userId: string;
  coachId: string;
  isError: boolean;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute ,private bookingService: BookingService) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['userId'];
    this.coachId = this.route.snapshot.params['coachId'];
    this.bookAppointmentForm = this.formBuilder.group({
      DateOfAppointment: ['',[Validators.required,validateDate]],
      Slot: ['',Validators.required]
    });
  }

  register(){
    console.log(this.bookAppointmentForm.value);
    this.submitted=true;
    let bookingObj: Booking = new Booking(this.bookAppointmentForm.controls.DateOfAppointment.value,this.bookAppointmentForm.controls.Slot.value,this.coachId,this.userId);
    console.log(bookingObj);
    this.bookingService.bookAppointment(bookingObj).subscribe(
      success => {console.log("book"+success);
                  if(success.hasOwnProperty('errorCode')){
                    this.isError=true
                  }else{
                    this.isError=false
                  }},
      error => {console.log("book"+error);
                this.isError=true}
    );
  }

  goBack(){
    this.isError=false;
    this.submitted=false;
    this.router.navigate(["/userhome"]);
  }

}
//the date should be any upcoming 7 day  formDate[2]+"-"+formDate[0]+"-"+formDate[1]
function validateDate(c: FormControl){
  let currentDate: Date = new Date();
  let appointmentDate: Date = new Date(c.value);
  if(appointmentDate.getTime() - currentDate.getTime() < 0){
      return{  dateInvalid: {
                    message:"the date should be any upcoming 7 days"
                  }
            }
  }else{
    let diff: number = appointmentDate.getTime() - currentDate.getTime();
    let numberOfDays: number = diff / (1000*60*60*24);
    if(numberOfDays>7){
      return{  dateInvalid: {
                              message:"the date should be any upcoming 7 days"
                            }
            }
    }
  }
  return null;
}
