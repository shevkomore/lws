import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task-groups/task';
import { Labwork1 } from '../labwork1';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputArrayComponent } from 'src/app/input-array/input-array.component';
import { InputArrayEvent } from 'src/app/input-array/input-array-event';

@Component({
  selector: 'app-lw1-task3',
  templateUrl: './lw1-task3.component.html',
  styleUrls: ['./lw1-task3.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, InputArrayComponent]
})
export class Lw1Task3Component extends Task<Labwork1> {
  results:number[] = [0,0,0]

  constructor() {
    super();
  }

  update(event: InputArrayEvent){
    let nums = event.data.map(el => Number.parseInt(el))
    nums.sort()
    // create array from smaller to larger num
    let arr = new Array(nums[1] - nums[0]).fill(0).map((v,i) => i + nums[0])
    this.results = [
      arr.filter(v => v % 44 == 0).length,
      arr.filter(v => v % 2 != 0).length,
      arr.filter(v => v % 5 == 3).length
    ]
  }
}
