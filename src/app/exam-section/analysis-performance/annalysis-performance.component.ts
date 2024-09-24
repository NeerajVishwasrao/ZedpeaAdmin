import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); //register all the controller it use 
import { showchartservice } from '../../service/showchart.service'; // Make sure this matches the updated class name

@Component({
  selector: 'app-annalysis-performance',
  standalone: true,
  imports: [],
  templateUrl: './analysis-performance.component.html',
  styleUrl: './annalysis-performance.component.css'
})
export class AnnalysisPerformanceComponent implements OnInit {
 
 chart: any;  //make variable to store chart instance

constructor(private showchartservice:showchartservice){}

  ngOnInit(): void {
    //fetch the chart data
    this.showchartservice.fetchchart().subscribe((data: any)=>{
      console.log("Data fetch:",data);
      // this.chart=data;
      // this.config=data;
      // console.log("this.chart "+ this.chart.data.labels[0]);

      //ctx (short for "context")
      const ctx = document.getElementById('MyChart') as HTMLCanvasElement;

      // Create the chart after getting data
      this.chart = new Chart(ctx, {
        type: "bar",//data.data.type
        data: {
          labels: data.data.students,
          datasets: data.data.datasets,
        },
        options: {
          responsive: true, //adjusts to different screen sizes automatically.
          plugins: {        //customize built-in plugins
            legend: {
              position: 'top',  //the labels for datasets) at the top of the chart
            },
          },
        },
      });
    },
    (error) => {
      console.error("Error fetching chart data: ", error);
    }
    );
    }
  }

