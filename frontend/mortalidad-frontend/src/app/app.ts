import { Component } from '@angular/core';
import { LineChartComponent } from './components/line-chart/line-chart';
import { BarChartComponent } from './components/bar-chart/bar-chart';
import { PieChartComponent } from './components/pie-chart/pie-chart';  
import { StackedBarChartComponent } from './components/stacked-bar-chart/stacked-bar-chart';
import { CausasChartComponent } from './components/causas-chart/causas-chart';
// <-- importa el nuevo componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    StackedBarChartComponent,
    CausasChartComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'mortalidad-frontend';
}