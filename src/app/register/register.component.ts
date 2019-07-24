import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model:any={
    username:"",
    password:"",
    confirmPassword:""
  }
  constructor() { }

  ngOnInit() {
  }

}
