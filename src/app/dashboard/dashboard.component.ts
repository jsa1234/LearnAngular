import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataServiceService } from '../userService/user-data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users = [];
  userName: string;

  constructor(private router: Router, private route: ActivatedRoute, private userservice: UserDataServiceService) {

  }

  ngOnInit() {
    this.initializeUser();
    this.getUserName();
  }

  getUserName() {
    this.userName = this.userservice.getLoggedinUserName();
  }

  initializeUser() {
    this.users = this.userservice.getUserDetails();
  }

  processUserData(users) {
    users.map(user=> {
      if(user.mark > 90) {
        user.status = "very good";
      } else {
        user.status = "poor";
      }
    });

    //users = users.filter(user=> user.mark>90);

    return users;
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
