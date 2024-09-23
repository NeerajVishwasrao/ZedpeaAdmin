import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); //register all the controller it use 


@Component({
  selector: 'app-annalysis-performance',
  standalone: true,
  imports: [],
  templateUrl: './annalysis-performance.component.html',
  styleUrl: './annalysis-performance.component.css'
})
export class AnnalysisPerformanceComponent implements OnInit {
  public showChart: boolean = false; // Flag to control chart visibility

  public config: any = {
    type: 'bar',// this denotes the type of chart

    data: {
      labels: ['JAN', 'FEB', 'MAR', 'APRIL'],
      datasets: [
        {
          label: 'Sales',
          data: ['467', '576', '572', '588'],
          backgroundColor: 'blue',
        },
        {
          label: 'PAT',
          data: ['100', '120', '133', '134'],
          backgroundColor: 'red',
        },
      ]

    },
    options: {
      aspectRatio: 1,
    },
  };


  chart: any;  //make variable
  ngOnInit(): void {
    this.chart = new Chart('MyChart', this.config);
  }

  // displayChart() {
  //   this.showChart = true; // Set flag to true
  //   this.chart = new Chart('MyChart', this.config); // Create the chart
  // }
}


