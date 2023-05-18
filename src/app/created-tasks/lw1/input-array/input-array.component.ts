import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
})
export class InputArrayComponent  implements OnInit {
  @Input()
  inputType: string = "text"
  @Input()
  n_inputs:number = 0

  rawInputs: string[] = []
  inputs: Subject<string[]> = new Subject()
  //@Input()   possibly??
  texts: string[] = []

  constructor() { }

  ngOnInit() {
    if(this.inputType = "number")
      this.rawInputs.fill("0", 0, this.n_inputs)
    else this.rawInputs.fill("", 0, this.n_inputs)

    this.texts.fill("", 0, this.n_inputs+1)
    this.update()
  }

  update(){
    this.inputs.next(Array.from(this.rawInputs))
  }
}
