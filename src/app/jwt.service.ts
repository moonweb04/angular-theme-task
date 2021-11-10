// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class JwtService {
//   [x: string]: any;

//   constructor(private httpclient: HttpClient) { }

//   login(email:string, password:string) {
//     return this.httpClient.post<{access_token:  string}>('localhost:4200/auth/login', {email, password}).pipe(tap(res => {
//     localStorage.setItem('access_token', res.access_token);
// }))
// }

// register(email:string, password:string) {
//   return this.httpClient.post<{access_token: string}>('localhost:4200/auth/register', {email, password}).pipe(tap(res => {
//   this.login(email, password)
// }))
// }

// logout() {
//   localStorage.removeItem('access_token');
// }

// public get loggedIn(): boolean{
//   return localStorage.getItem('access_token') !==  null;
// }

// }


