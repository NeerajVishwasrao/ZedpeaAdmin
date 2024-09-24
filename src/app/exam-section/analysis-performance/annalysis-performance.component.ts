import { Component, OnInit, inject } from '@angular/core';
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
  Showchartservice=inject(showchartservice)

  chart: any;  //make variable to store chart instance
  chart2: any


  ngOnInit(): void {

    this.AllStudnetMarks()

    this.AvrageSuccessrate();


  }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AllStudnetMarks() {
    const ctx = document.getElementById('MyChart') as HTMLCanvasElement;

    this.Showchartservice.fetchchart().subscribe((data: any) => {
      console.log("Data fetch:", data);

      this.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.data.students,
          datasets: data.data.datasets,
        },
        options: {
          responsive: true, 
          plugins: {        
            legend: {
              position: 'top',  
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



AvrageSuccessrate()
{
  const idchart2 = document.getElementById('cahrtSuccessRate') as HTMLCanvasElement;

  this.chart2 = new Chart(
    idchart2, {
    type: 'bar',
    data: {
      labels: ['JAN', 'FEB', 'MAR', 'APRIL'],
      datasets: [
        {
          label: 'Correct',
          data: ['200', '300', '400', '420'],
          backgroundColor: 'green',
        },
        {
          label: 'wrong',
          data: ['200', '140', '100', '80'],
          backgroundColor: 'red',
        },
        {
          label: 'Not solved',
          data: ['100', '120', '133', '134'],
          backgroundColor: 'gray',
        },
      ]
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

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











}

