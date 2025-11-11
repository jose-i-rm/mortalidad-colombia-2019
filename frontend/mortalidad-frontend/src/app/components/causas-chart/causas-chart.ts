import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-causas-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './causas-chart.html'
})
export class CausasChartComponent implements OnInit {
  public causasChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public causasChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCausasPrincipales().subscribe((data: any[]) => {
      const etiquetas = data.map(item => item["Descripcion  de códigos mortalidad a cuatro caracteres"]);
      const valores = data.map(item => item.muertes);

      this.causasChartData = {
        labels: etiquetas,
        datasets: [
          {
            data: valores,
            label: 'Muertes',
            backgroundColor: '#FF9F40'
          }
        ]
      };
    });
  }
}
