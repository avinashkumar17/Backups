import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import {Observable} from 'rxjs';
import{ AppServiceService} from './app-service.service' 
@Injectable({
  providedIn: 'root'
  
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router,private appService: AppServiceService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("local storage :"+localStorage.getItem('sessionId'));
    if(localStorage.getItem('sessionId') != null){
      return  true;
    }
    // navigate to login page
    this.router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  };



}
