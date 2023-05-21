import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonInput, IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';
import { InputArrayEvent } from './input-array-event';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class InputArrayComponent implements OnInit {
  @Input()
  set surroundingText(value: string[]){
    if(this._surroundingText.length == 0){
      this._surroundingText = value.map((v,i) => {return {index:i,value:v}})
      return
    }
    if(this._surroundingText.length == value.length)
      this._surroundingText.map((v,i) => {return {index:i,value:value[i]}})
  }
  _surroundingText: {index: number, value: string}[] = []

  rawInputs: any[] = []
  @Output()
  onChange: Subject<InputArrayEvent> = new Subject()

  constructor() { }

  ngOnInit() {
    let n_inputs = this._surroundingText.length - 1
    this.rawInputs = new Array(n_inputs).fill(0)
  }

  update(which:number, who?: any){
    let input = who as IonInput
    this.rawInputs[which] = input.value
    this.onChange.next({
      source: this,
      sourceInput: who,
      data: this.rawInputs.slice()
    })
    console.log(this._surroundingText)
  }
  setText(index: number, value: string){
    let el = this._surroundingText.find(v => v.index == index)
    if(el)
      el.value = value
  }
  fillTextRepeatingMiddle(before: string, middle: string, after: string){
    this._surroundingText = this._surroundingText.map((v,i,a) => {
      if(v.index == 0)
        return {index: v.index, value: before}
      if(v.index < a.length - 1)
        return {index: v.index, value: middle}
      if(v.index == a.length - 1)
        return {index: v.index, value: after}
      console.error("Weird data while traversing array: "+v+"; array length is "+a.length)
      return v
    })
  }
  extractIndex(index: number, item: {index: number, value: string}){
    return item.index
  }
  sortByIndex(a:{index: number, value: string}, b:{index: number, value: string}):number{
    return a.index - b.index
  }
}
