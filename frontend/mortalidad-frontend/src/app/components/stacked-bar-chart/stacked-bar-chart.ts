import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../../services/api';

@Component({
  selector: 'app-stacked-bar-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './stacked-bar-chart.html',
  styleUrls: ['./stacked-bar-chart.css']
})
export class StackedBarChartComponent implements OnInit {
  public stackedBarChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  public stackedBarChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getSexoDepartamento().subscribe((data: any[]) => {
      if (!data || data.length === 0) return;

      const agrupado: { [dep: string]: { M: number; F: number } } = {};

      data.forEach((item: any) => {
        const dep = item.DEPARTAMENTO;
        const sexo = item.SEXO;
        const muertes = item.muertes;

        if (!agrupado[dep]) {
          agrupado[dep] = { M: 0, F: 0 };
        }

        if (sexo === 1) agrupado[dep].M += muertes;
        if (sexo === 2) agrupado[dep].F += muertes;
      });

      const departamentos = Object.keys(agrupado);
      const hombres = departamentos.map(dep => agrupado[dep].M);
      const mujeres = departamentos.map(dep => agrupado[dep].F);

      this.stackedBarChartData.labels = departamentos;
      this.stackedBarChartData.datasets = [
        {
          data: hombres,
          label: 'Hombres',
          backgroundColor: '#36A2EB'
        },
        {
          data: mujeres,
          label: 'Mujeres',
          backgroundColor: '#FF6384'
        }
      ];
    });
  }
}