import { Component, HostListener, OnInit, inject } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables); // Register all the controllers it uses
import { showchartservice } from '../../service/showchart.service';
import { MenuButtonsComponent } from '../../Reusable-view/menu-buttons/menu-buttons.component';

@Component({
  selector: 'app-annalysis-performance',
  standalone: true,
  imports: [MenuButtonsComponent],
  templateUrl: './analysis-performance.component.html',
  styleUrl: './annalysis-performance.component.css'
})
export class AnnalysisPerformanceComponent implements OnInit {
  Showchartservice = inject(showchartservice);

  chart: any;  // Store desktop chart instances
  chart2: any;
  chart3: any;
  chart4: any;
  chart5: any;

  chartMobile: any;  // Store mobile chart instances
  chart2Mobile: any;
  chart3Mobile: any;
  chart4Mobile: any;
  chart5Mobile: any;

  ngOnInit(): void {
    this.AllStudnetMarks();
    this.AllStudnetMarksMobile();

    this.AvrageSuccessrate();
    this.AvrageSuccessrateMobile();

    this.AvrageSubSuccessrate();
    this.AvrageSubSuccessrateMobile();

    this.PIEAvrageSubSuccessrate();
    this.PIEAvrageSubSuccessrateMobile();

    this.DpughnutAvrageSubSuccessrate();
    this.DpughnutAvrageSubSuccessrateMobile();

    this.BubbleAvrageSubSuccessrate();
    this.BubbleAvrageSubSuccessrateMobile();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AllStudnetMarks() {
    this.Showchartservice.fetchchart().subscribe((data: any) => {
      this.chart = new Chart("MyChart", {
        type: "bar",
        data: {
          labels: data.data.students,
          datasets: data.data.datasets,
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
          },
        },
      });
    });
  }

  AllStudnetMarksMobile() {
    this.Showchartservice.fetchchart().subscribe((data: any) => {
      this.chartMobile = new Chart("MyChartMobile", {
        type: "bar",
        data: {
          labels: data.data.students,
          datasets: data.data.datasets,
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
          },
        },
      });
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AvrageSuccessrate() {
    this.chart2 = new Chart("cahrtSuccessRate", {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: 'green' },
          { label: 'Wrong', data: ['200', '140', '100', '80'], backgroundColor: 'red' },
          { label: 'Not Solved', data: ['100', '120', '133', '134'], backgroundColor: 'gray' },
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  AvrageSuccessrateMobile() {
    this.chart2Mobile = new Chart("cahrtSuccessRateMobile", {
      type: 'line',
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: 'green' },
          { label: 'Wrong', data: ['200', '140', '100', '80'], backgroundColor: 'red' },
          { label: 'Not Solved', data: ['100', '120', '133', '134'], backgroundColor: 'gray' },
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  AvrageSubSuccessrate() {
    this.chart3 = new Chart("cahrtSubSuccessRate", {
      type: 'bar',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: 'green' },
          { label: 'Wrong', data: ['200', '140', '100', '80'], backgroundColor: 'red' },
          { label: 'Not Solved', data: ['100', '120', '133', '134'], backgroundColor: 'gray' },
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  AvrageSubSuccessrateMobile() {
    this.chart3Mobile = new Chart("cahrtSubSuccessRateMobile", {
      type: 'bar',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: 'green' },
          { label: 'Wrong', data: ['200', '140', '100', '80'], backgroundColor: 'red' },
          { label: 'Not Solved', data: ['100', '120', '133', '134'], backgroundColor: 'gray' },
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  PIEAvrageSubSuccessrate() {
    this.chart4 = new Chart('piecahrtSubSuccessRate', {
      type: 'pie',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: ['green', 'blue', 'red', 'orange'] }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  PIEAvrageSubSuccessrateMobile() {
    this.chart4Mobile = new Chart('piecahrtSubSuccessRateMobile', {
      type: 'pie',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: ['green', 'blue', 'red', 'orange'] }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  DpughnutAvrageSubSuccessrate() {
    this.chart5 = new Chart('DoughnutpiecahrtSubSuccessRate', {
      type: 'doughnut',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: ['green', 'blue', 'red', 'orange'] }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  DpughnutAvrageSubSuccessrateMobile() {
    this.chart5Mobile = new Chart('DoughnutpiecahrtSubSuccessRateMobile', {
      type: 'doughnut',
      data: {
        labels: ['English', 'Math', 'Marathi', 'EVS'],
        datasets: [
          { label: 'Correct', data: ['200', '300', '400', '420'], backgroundColor: ['green', 'blue', 'red', 'orange'] }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  BubbleAvrageSubSuccessrate() {
    this.chart5 = new Chart('BubblepiecahrtSubSuccessRate', {
      type: 'bubble',
      data: {
        labels: ['Performance'],
        datasets: [
          {
            label: 'Performance',
            data: [
              { x: 2022, y: 60, r: 20 },
              { x: 2023, y: 80, r: 40 },
              { x: 2024, y: 90, r: 50 },
              { x: 2025, y: 70, r: 80 }
            ],
            backgroundColor: ['green', 'blue', 'red', 'orange']
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }

  BubbleAvrageSubSuccessrateMobile() {
    this.chart5Mobile = new Chart('BubblepiecahrtSubSuccessRateMobile', {
      type: 'bubble',
      data: {
        labels: ['Performance'],
        datasets: [
          {
            label: 'Performance',
            data: [
              { x: 2022, y: 60, r: 20 },
              { x: 2023, y: 80, r: 40 },
              { x: 2024, y: 90, r: 50 },
              { x: 2025, y: 70, r: 80 }
            ],
            backgroundColor: ['green', 'blue', 'red', 'orange']
          }
        ]
      },
      options: { responsive: true, plugins: { legend: { position: 'top' } } }
    });
  }


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
