import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachHomePageComponent } from './coach-home-page/coach-home-page.component';
import { CoachViewProfileComponent } from './coach-home-page/coach-view-profile/coach-view-profile.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { AppointmentsComponent } from './user-home-page/appointments/appointments.component';
import { BookingComponent } from './user-home-page/booking/booking.component';
import { RescheduleComponent } from './user-home-page/reschedule/reschedule.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserViewProfileComponent } from './user-home-page/user-view-profile/user-view-profile.component';

const routes: Routes = [
  {path:'user/:userId/booking/:coachId',component:BookingComponent},
  {path:'bookings/:bookingId',component:RescheduleComponent},
  {path:'home',component:HomeComponentComponent},
  {path:'login/:type', component:LogInComponentComponent},
  {path:'userhome', component:UserHomePageComponent},
  {path:'signup/:type', component:SignUpComponentComponent},
  {path:'coachhome',component:CoachHomePageComponent},
  {path: "userviewprofile", component: UserViewProfileComponent},
  {path: "userappointments", component: AppointmentsComponent},
  {path: "coachviewprofile", component: CoachViewProfileComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
