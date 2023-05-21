import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/task-groups/task'
import { Labwork2 } from '../labwork2';
import Chart from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lw2graph',
  templateUrl: './lw2graph.component.html',
  styleUrls: ['./lw2graph.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class Lw2graphComponent extends Task<Labwork2> implements AfterViewInit, OnDestroy {
  @ViewChild('graphCanvas')
  private canvas!: ElementRef

  chart?: any

  constructor() {
    super();
  }

  private GraphUpdateSubscription?: Subscription
  ngAfterViewInit() {
    this.showChart()
    this.GraphUpdateSubscription = this.core?.OnOutputGraphUpdate.subscribe(() => {
      this.chart.data.datasets[0].data = this.core?.outputGraph.map(v => [v.x, v.y])
      this.chart.update()
    })
  }
  ngOnDestroy() {
      this.GraphUpdateSubscription?.unsubscribe()
  }


  showChart(){
    this.chart = new Chart(this.canvas?.nativeElement, {
      type: 'line',
      options: {
        animation: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      },
      data:{
        labels: this.core?.outputGraph.map(v => v.x.toFixed(1)),
        datasets:[
          {
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.core?.outputGraph.map(v => [v.x, v.y]),
            spanGaps: false
          }
      ]
      }
    })
    console.log(this.chart)
  }
}
