import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view-profile',
  templateUrl: './user-view-profile.component.html',
  styleUrls: ['./user-view-profile.component.css']
})
export class UserViewProfileComponent implements OnInit {
  user: User;
  userId: string;

  constructor(private userService: UserService) {
    this.userId=localStorage.getItem("userId");
   }

  ngOnInit() {
    this.getUserById(this.userId);  
  }

  getUserById(id: string) {
    this.userService.getUserById(id).subscribe((result)=>{
      console.log(result)
      this.user = result;
  })
 }
}
