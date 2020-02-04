import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataServiceService } from '../userService/user-data-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users = {};

  constructor(private router: Router, private route: ActivatedRoute, private userservice: UserDataServiceService) {

  }

  ngOnInit() {
    this.initializeUser();
  }

  initializeUser() {
    this.users = this.userservice.getUserDetails();
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
