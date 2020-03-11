import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['Jun 2', 'Jun 8', 'Jun 14', 'Jun 20', 'Jun 26', 'Jul 1'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [1000, 34000, 20000, 10000, 5000, 12000, 25000, 40000], label: 'TOTAL AVAILABLE BALANCE'},
  ];

  for(){

  }
  public chartColors: any[] = [
    { 
      backgroundColor:[]
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
