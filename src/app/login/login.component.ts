import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  authenticateUser() {
    this.router.navigate(['/dashboard'], { queryParams: { name: this.userName, pass: this.password } });
  }

}
