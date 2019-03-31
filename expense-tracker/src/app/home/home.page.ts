import { Component, ViewChild } from '@angular/core';
// import { CrendtialService } from '../crendtial.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userdata: any;
  slideOpts = {
    effect: 'flip'
  };
  amount = 2000;
  expense: number;
  lineChart: any;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvasSav') lineCanvasSav;
  constructor(private service : DataService, private router : Router){}
  ngOnInit(){
    this.getAmount();

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["01", "02", "03", "04", "05", "06", "07"],
          datasets: [
              {
                  label: "Total Expenses",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(241,110,62,0.4)",
                  borderColor: "rgba(241,110,62,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(241,110,92,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [65, 59, 80, 81, 56, 55, 40],
                  spanGaps: false,
              }
          ]
      }

  });
  this.lineChart = new Chart(this.lineCanvasSav.nativeElement, {

    type: 'line',
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07"],
        datasets: [
            {
                label: "Total Savings",
                fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                data: [10, 15, 5, 30, 10, 15, 40],
                spanGaps: false,
            }
        ]
    }

});
  }
  getExpense(){
    this.router.navigate(['view-expense']);
  }
  getAmount(){
    this.expense = this.service.getExpenseAmount();
    this.amount = this.amount - this.expense;
  }
}
