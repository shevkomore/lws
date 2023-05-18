import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/task-groups/task';
import { TestTaskGroup2 } from '../test-task-group-2';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-test-component2',
  templateUrl: './test-component2.component.html',
  styleUrls: ['./test-component2.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TestComponent2Component extends Task<TestTaskGroup2> implements OnInit {
  calls?: number
  constructor() {
    super();
  }

  ngOnInit() {
    this.update()
  }

  update(){
    this.calls = this.core?.Update
  }

}
