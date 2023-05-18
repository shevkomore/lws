import { Component, Input, Type } from "@angular/core";

@Component({
    selector: 'task[core]',
    template: ''
  })
export abstract class Task<TaskGroupType>{
    @Input()
    core?: TaskGroupType
}

export interface TaskType<T extends Task<any>> extends Type<T>{}