import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset,  } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 // Bar Chart Data
 public barChartOptions: ChartOptions = {
  scales: {
    y: {
      alignToPixels: true,
      display: 'auto'
    },
    x: {
      display: 'auto',
      alignToPixels: true,
    }
  },
  devicePixelRatio: 1,
  responsive: true,
};
public barChartLabels: string[] = [
  '1 Jul', '2 Jul', '3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul', 
  '8 Jul', '9 Jul', '10 Jul', '11 Jul', '12 Jul'
];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartData: ChartDataset[] = [
  { data: [45, 37, 60, 70, 46, 33, 50, 70, 40, 60, 55, 35], label: 'Gross Margin' },
  { data: [28, 48, 40, 19, 32, 27, 23, 50, 40, 70, 50, 30], label: 'Revenue' },
];

// Doughnut Chart Data
public doughnutChartLabels: string[] = [
  'Living room', 'Kids', 'Office', 'Bedroom', 
  'Kitchen', 'Bathroom', 'Dining room', 'Decor', 
  'Lighting', 'Outdoor'
];
public doughnutChartData: number[] = [25, 17, 13, 12, 9, 8, 6, 5, 3, 2];
public doughnutChartType: ChartType = 'doughnut';

constructor() {}
}
