import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() { }

  getUserDetails() {
    const user = [{
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

    return user;
  }
}
