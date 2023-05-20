import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Labwork1 } from '../labwork1';
import { Task } from 'src/app/task-groups/task'
import { InputArrayEvent } from '../input-array/input-array-event';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { InputArrayComponent } from '../input-array/input-array.component';

@Component({
  selector: 'app-lw1-task2',
  templateUrl: './lw1-task2.component.html',
  styleUrls: ['./lw1-task2.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, InputArrayComponent]
})
export class Lw1Task2Component extends Task<Labwork1> {
  result: number = 0
  isCubed: boolean = false

  constructor() {
    super();
  }

  update(event:InputArrayEvent){
    let nums = event.data.map(el => Number.parseFloat(el))
    this.isCubed = nums.filter(v => v > 5).length > 0

    this.result = nums.reduce((sum,v) => sum + v)
    if(this.isCubed) this.result = Math.pow(this.result, 3)
  }
}
