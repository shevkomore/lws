import { Component, Input, OnInit } from '@angular/core';
import { DiceState } from '../dice-state';

@Component({
  selector: 'app-dice-display',
  templateUrl: './dice-display.component.html',
  styleUrls: ['./dice-display.component.scss'],
})
export class DiceDisplayComponent  {
  private data:DiceState = {dice: [0,0], total: 0}
  @Input()
  set Data(value: DiceState){
    this.data = value
    //animate

  }
  get Data(): DiceState{
    return this.data
  }

  constructor() { }

}
