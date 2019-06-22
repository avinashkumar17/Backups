import { Component, OnInit ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';
import {Router} from'@angular/router';
import {environment } from '../../environments/environment';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit{
  public @ViewChild("iid",{read:ElementRef}) iid : ElementRef;
  public displayedColumns:any[]=["username","mobilenum","imei","custom"];
  public dataSource:any[]=environment.data;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  this.iid.nativeElement.style.display = "none";
  }
 public navi(){
   console.log("sda");
this.router.navigate(['/user-profile/edit']);
 }
}
