import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomServiceService } from '../custom-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  
  constructor(private Authguardservice: CustomServiceService, private router: Router) {}  
// canActivate(): boolean {  
//     if (!this.Authguardservice.gettoken()) {  
//         this.router.navigateByUrl("/login");  
//     }  
//     return this.Authguardservice.gettoken();  
// }  

canActivate(
  next: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(this.Authguardservice.isLoggedIn()){
    return true;
  }else{
    this.router.navigate(["login"]);
    return false;
  }
}
}
