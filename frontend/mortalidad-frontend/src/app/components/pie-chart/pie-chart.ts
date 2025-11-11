import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './pie-chart.html',
  styleUrls: ['./pie-chart.css']
})
export class PieChartComponent implements OnInit {
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#C9CBCF', '#FF6666', '#66FF66', '#6666FF'
        ]
      }
    ]
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCiudadesMenorMortalidad().subscribe((data: any[]) => {
      if (!data || data.length === 0) {
        console.warn('No se recibieron datos del backend');
        return;
      }

      this.pieChartData.labels = data.map((item: any) => item.MUNICIPIO);
      this.pieChartData.datasets[0].data = data.map((item: any) => item.muertes);
    });
  }
}
