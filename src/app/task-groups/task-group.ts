import { TaskType } from "./task";
import { InfoLabel } from "./info-label";
import { Type } from "@angular/core";

export abstract class TaskGroup{
    public abstract get Label(): InfoLabel;
    abstract get Tasks(): {info: InfoLabel, component:TaskType<any>}[];
    afterTasksInit(){}
}

export interface TaskGroupType<T extends TaskGroup> extends Type<T>{}