import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router';
import { AppServiceService} from '../../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model:any={
    username:"avinash",
    password:"kumar"
  }
  constructor(private route :Router,private appService:AppServiceService) { }

  ngOnInit() {
  }
  login(){
    this.appService.login().subscribe(res=>{
      console.log(res.status);
      if(res.status == 200){
        localStorage.setItem('sessionId',res.body);
        this.route.navigate(['/dashboard']);
      }
    });
    // this.route.navigate(['/dashboard']);
  }

  onSubmit(data:any){
    //this.route.navigate(['/dashboard']);
    this.login();
    console.log("the login form data"+JSON.stringify(data.form.value));
  }
}
