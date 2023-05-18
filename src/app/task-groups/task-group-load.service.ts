import { Injectable } from '@angular/core';
import { TaskGroup } from './task-group';
import { TaskGroupComponent } from './task-group/task-group.component';
import { IndexedInfoLabel, indexInfoLabel } from './indexed-info-label';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupLoadService {
  private groupsList: TaskGroup[] = [];
  constructor() { }
  get Labels(): IndexedInfoLabel[]{
    return this.groupsList.map((tg, i) => indexInfoLabel(tg.Label, i))
  }
  load(to: TaskGroupComponent, selecion: IndexedInfoLabel | number){
    let id;
    if(typeof selecion === 'number')
      id = selecion
    else
      id = selecion.index
    to.loadTasks(this.groupsList[id])
  }
  register(taskGroup: TaskGroup): number{
    this.groupsList.push(taskGroup);
    return this.groupsList.findIndex(o => o === taskGroup);
  }
}

