import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../userService/user-data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private router: Router, private userService: UserDataServiceService) { }

  ngOnInit() {
  }

  authenticateUser() {
    if(this.userName && this.password) {
      this.userService.setUserDetailsToLocalstorage(this.userName, this.password);
      this.router.navigate(['/dashboard']);
    } else {
      alert("pls enter cred")
    }

  }

}
