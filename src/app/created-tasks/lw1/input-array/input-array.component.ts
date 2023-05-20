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
    console.log(this.surroundingText)
  }

  update(){
    this.onChange.next(Array.from(this.rawInputs))
  }
}
