import { Component, OnInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); //register all the controller it use 
import { showchartservice } from '../../service/showchart.service'; // Make sure this matches the updated class name
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-annalysis-performance',
  standalone: true,
  imports: [MenuButtonsComponent],
  templateUrl: './analysis-performance.component.html',
  styleUrl: './annalysis-performance.component.css'
})
export class AnnalysisPerformanceComponent implements OnInit {
  Showchartservice = inject(showchartservice)

  chart: any;  //make variable to store chart instance
  chart2: any


  ngOnInit(): void {

    this.AllStudnetMarks()

    this.AvrageSuccessrate();

    this.AvrageSubSuccessrate();

    this.PIEAvrageSubSuccessrate();

    this.DpughnutAvrageSubSuccessrate();

    this.BubbleAvrageSubSuccessrate();

  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AllStudnetMarks() {

    this.Showchartservice.fetchchart().subscribe((data: any) => {
      console.log("Data fetch:", data);

      this.chart = new Chart("MyChart", {
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



  AvrageSuccessrate() {

    this.chart2 = new Chart("cahrtSuccessRate", {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APRIL', 'May', "June", 'July', 'Aug'],
        datasets: [
          {
            label: 'Correct',
            data: ['200', '300', '400', '420', '430', '440', '450', '450'],
            backgroundColor: 'green',
          },
          {
            label: 'wrong',
            data: ['200', '140', '100', '80', '90', '78', '34', '56'],
            backgroundColor: 'red',
          },
          {
            label: 'Not solved',
            data: ['100', '120', '133', '134', '100', '120', '133', '134'],
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


  AvrageSubSuccessrate() {

    this.chart2 = new Chart("cahrtSubSuccessRate", {
      type: 'bar',
      data: {
        labels: ['english', 'math', 'marathi', 'evs'],
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

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  PIEAvrageSubSuccessrate() {

    this.chart2 = new Chart('piecahrtSubSuccessRate', {
      type: 'pie',
      data: {
        labels: ['english', 'math', 'marathi', 'evs'],
        datasets: [
          {
            label: 'Correct',
            data: ['200', '300', '400', '420'],
            backgroundColor: ['green', 'blue', 'red', 'orange']
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



  DpughnutAvrageSubSuccessrate() {

    this.chart2 = new Chart('DoughnutpiecahrtSubSuccessRate', {
      type: 'doughnut',
      data: {
        labels: ['english', 'math', 'marathi', 'evs'],
        datasets: [
          {
            label: 'Correct',
            data: ['200', '300', '400', '420'],
            backgroundColor: ['green', 'blue', 'red', 'orange']
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
  BubbleAvrageSubSuccessrate() {

    this.chart2 = new Chart('BubblepiecahrtSubSuccessRate', {
      type: 'bubble',
      data: {
        labels: ['Performance'],
        datasets: [
          {
            label: 'Correct',
            data: [
              {
                x: 2022,
                y: 60,
                r: 20

              },
              {
                x: 2023,
                y: 80,
                r: 40

              },
              {
                x: 2024,
                y: 90,
                r: 50

              },
              {
                x: 2025,
                y: 70,
                r: 80
              }
            ],
            backgroundColor: ['green', 'blue', 'red']
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



}

