import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskType } from "src/app/task-groups/task";
import { TaskGroup } from "src/app/task-groups/task-group";

export class Labwork1 extends TaskGroup{
    public override get Label(): InfoLabel {
        return {
            title: "Лабораторна робота №1",
            description: "Знайомство з Ionic"
        }
    }
    override get Tasks(): { info: InfoLabel; component: TaskType<any>; }[] {
        throw new Error("Method not implemented.");
    }

}