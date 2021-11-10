import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {
  [x: string]: any;
  // gettoken() {
  //   throw new Error('Method not implemented.');
  // }

  // constructor() { }

  // gettoken(){  
  //   return !!localStorage.getItem("SeesionUser");  
  //   } 

  constructor(private router: Router, private http: HttpClient) { }

  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  // addData(){
  //   return this.http.post("https://jsonplaceholder.typicode.com/posts").map(res => res.json());
  // }

  // updateData(id){
  //   return this.http.put("https://jsonplaceholder.typicode.com/posts/1").map(res => res.json(id,));
  // }

  // deleteData(){
  //   return this.http.delete("https://jsonplaceholder.typicode.com/posts/1").map(res => res.json());
  // }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.router.navigate(["login"]);
  }

  shareData = new Subject();
  
  userName = new BehaviorSubject("Behavior")
}


