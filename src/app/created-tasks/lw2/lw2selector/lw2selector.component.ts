import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule, RangeCustomEvent } from '@ionic/angular';
import { Labwork2 } from '../labwork2';
import { Task } from 'src/app/task-groups/task'

@Component({
  selector: 'app-lw2selector',
  templateUrl: './lw2selector.component.html',
  styleUrls: ['./lw2selector.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class Lw2selectorComponent extends Task<Labwork2> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}

  onRangeChange(event: Event){
    let o = Object.values((event as RangeCustomEvent).target.value)
    console.log(o)//
    this.core?.updateOutputGraph(o)
  }

}
