import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-progress-chart',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.css']
})
export class ProgressChartComponent {
  view: [number, number] = [700, 300];

  results = [
    {
      name: 'Mi progreso',
      series: [
        { name: '2022-Q1', value: 1 },
        { name: '2022-Q2', value: 2 },
        { name: '2022-Q3', value: 3.2 },
        { name: '2022-Q4', value: 3.8 },
        { name: '2023-Q1', value: 3.4 },
        { name: '2023-Q2', value: 3.2 },
        { name: '2023-Q3', value: 2.9 },
        { name: '2023-Q4', value: 2.5 },
        { name: '2024-Q1', value: 2.1 }
      ]
    },
    {
      name: 'Promedio',
      series: [
        { name: '2022-Q1', value: 1 },
        { name: '2022-Q2', value: 1.8 },
        { name: '2022-Q3', value: 2.9 },
        { name: '2022-Q4', value: 3 },
        { name: '2023-Q1', value: 3.8 },
        { name: '2023-Q2', value: 2.7 },
        { name: '2023-Q3', value: 2.5 },
        { name: '2023-Q4', value: 2.2 },
        { name: '2024-Q1', value: 2 }
      ]
    }
  ];

  colorScheme: any = {
    domain: ['#ee7202', '#c0c0c0']
  };

}
