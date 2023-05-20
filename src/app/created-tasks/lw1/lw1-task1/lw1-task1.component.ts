import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Labwork1 } from '../labwork1';
import { Task } from 'src/app/task-groups/task'
import { InputArrayComponent } from '../input-array/input-array.component';
import { InputArrayEvent } from '../input-array/input-array-event';
import { ShowNanPipe } from '../show-nan-pipe';

@Component({
  selector: 'app-lw1-task1',
  templateUrl: './lw1-task1.component.html',
  styleUrls: ['./lw1-task1.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonicModule, CommonModule, InputArrayComponent, ShowNanPipe]
})
export class Lw1Task1Component extends Task<Labwork1> {
  result: number = 0
  constructor() {
    super();
  }
  update(event:InputArrayEvent){
    console.log(event)
    let nums = event.data.map(el => Number.parseFloat(el))
    let positives = nums.filter(n => n>=0).length, negatives = nums.filter(n=>n<0).length
    if(negatives == 0){
      event.source.fillTextRepeatingMiddle('','+','')
      // add all of them, left to right
      this.result = nums.reduce((sum, next) => sum+=next)
    }
    else if (positives == 0){
      event.source.fillTextRepeatingMiddle('','*','')
      // multiply all of them, left to right
      this.result = nums.reduce((sum, next) => sum*=next)
    }
    else if (positives > negatives){
      event.source.fillTextRepeatingMiddle('(','*',')<sup><sup>1</sup>&frasl;<sub>'+nums.length+'</sub></sup>') // <- writes "(#*#*#)^1/3", but with formatting
      // multiply all of them, left to right, then take lengthth root
      this.result = Math.pow(nums.reduce((sum, next) => sum*=next), 1/nums.length)
    }
    else if (negatives > positives){
      event.source.fillTextRepeatingMiddle('(','+',')/'+nums.length)
      // add all of them, left to right, then divide by length
      this.result = nums.reduce((sum, next) => sum+=next)/nums.length
    }
  }

}
