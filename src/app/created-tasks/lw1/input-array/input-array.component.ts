import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';

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
  surroundingText: string[] = [""]

  rawInputs: any[] = []
  @Output()
  onChange: Subject<string[]> = new Subject()

  constructor() { }

  ngOnInit() {
    let n_inputs = this.surroundingText.length - 1
    this.rawInputs = new Array(n_inputs).fill("0")
    this.update()
  }

  update(){
    this.onChange.next(Array.from(this.rawInputs))
  }

  fillTextRepeatingMiddle(before: string, middle: string, after: string){
    if(this.surroundingText.length > 0)
      this.surroundingText[0] = before
    this.surroundingText.fill(middle, 1,-2)
    if(this.surroundingText.length > 1)
      this.surroundingText[-1] = after
  }
}
