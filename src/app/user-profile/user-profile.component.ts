import { Component, OnInit ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import {Router} from'@angular/router';
import {environment } from '../../environments/environment';
import {AppServiceService} from '../../app-service.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit{
  
  public displayedColumns:any[]=["username","mobilenum","imei","custom"];
  public dataSource:any[]=environment.data;
  constructor(private router:Router,private service: AppServiceService) { }

  ngOnInit() {
    this.service.fork().subscribe(res=>{
     console.log("success"+res);
    },(err)=>{
      console.log("error"+err);
    },()=>{
      console.log("complete");
    });

  }
  ngAfterViewInit() {
  
  }
 public navi(){
   console.log("sda");
this.router.navigate(['/user-profile/edit']);
 }
}
