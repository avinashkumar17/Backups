import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pieChartLabels:string[] = ["Total Hours", "Checkin Hours", "Short Fall"];
  public pieChartData:number[] = [21, 39, 10];
  public pieChartType:string = 'pie';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56"
            ]}
 
  
  
 
  constructor() { }
  
  ngOnInit() {
      
  }
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }

  
 // event on pie chart slice hover
 public chartHovered(e:any):void {
  console.log(e);
}

}
