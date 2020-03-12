import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  public chartColors: any[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = ['Jun 2','','','','','', 'Jun 8','','','','','', 'Jun 14','','','','','','Jun 20','','','','','','Jun 26','','','','','Jul 1'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData = [
    {data: [
            35000, 20000, 35000, 38000, 15000, 35000, 18000, 35000, 20000,35000,
            38000, 35000, 18000, 25000, 35000, 20000, 18000, 38000, 20000, 35000,
            35000, 18000,35000, 38000, 18000, 18000, 35000, 20000, 35000, 20000, 5000
          ], label: 'TOTAL AVAILABLE BALANCE'},
  ];
  
  constructor() { }

  ngOnInit(): void {
    for( let d of this.barChartData[0].data){
      this.chartColors = [
        { 
          backgroundColor:'#aed3ff'
        }];
    }
  }

}
