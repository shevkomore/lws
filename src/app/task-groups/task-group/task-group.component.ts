import { Component } from '@angular/core';
import { TaskType } from '../task'
import { InfoLabel } from '../info-label';
import { TaskGroup } from '../task-group';

@Component({
  selector: 'app-task-group-view',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss'],
})
export class TaskGroupComponent {
  core?: TaskGroup;
  tasks: {info: InfoLabel, component:TaskType<any>}[] = []
  constructor() {}
  
  async loadTasks(from: TaskGroup){
    this.core = from
    this.tasks = from.Tasks
  }

}
