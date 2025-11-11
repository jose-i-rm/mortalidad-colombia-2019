import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './bar-chart.html',
  styleUrls: ['./bar-chart.css']
})
export class BarChartComponent implements OnInit {
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Ciudades más violentas', backgroundColor: '#FF6384' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCiudadesViolentas().subscribe((data: any[]) => {
      if (!data || data.length === 0) {
        console.warn('No se recibieron datos del backend');
        return;
      }

      this.barChartData.labels = data.map((item: any) => item.MUNICIPIO);
      this.barChartData.datasets[0].data = data.map((item: any) => item.muertes);
    });
  }
}