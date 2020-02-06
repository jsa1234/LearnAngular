import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() { }

  setUserDetailsToLocalstorage(userName: string, password: string) {
    localStorage.setItem("uname", userName)
    localStorage.setItem("upass", password)
  }

  getLoggedinUserName(): string {
    return localStorage.getItem("uname")
  }

  getUserDetails() {
    const users = [{
      name: "rahul",
      age: 23,
      mark: 66
    }, {
      name: "tom",
      age: 22,
      mark: 99
    }, {
      name: "latty",
      age: 20,
      mark: 40
    }]

    return users;
  }
}
