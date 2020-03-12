import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = ['Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun8'];
  public lineChartType = 'line';
  public lineChartLegend = false;

  public lineChartData = [
    {data: [1000, 34000, 20000, 10000, 5000, 12000, 25000, 40000], label: 'TOTAL VOLUME'},
  ];

  public chartColors: any[] = [
    { 
      backgroundColor:"rgba(197, 197, 197, 0.07)",
      borderColor: "rgba(105, 174, 255, 0.47)"
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
