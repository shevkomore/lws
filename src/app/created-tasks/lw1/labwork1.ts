import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskType } from "src/app/task-groups/task";
import { TaskGroup } from "src/app/task-groups/task-group";
import { Lw1Task1Component } from "./lw1-task1/lw1-task1.component";

export class Labwork1 extends TaskGroup{
    public override get Label(): InfoLabel {
        return {
            title: "Лабораторна робота №1",
            description: "Знайомство з Ionic"
        }
    }
    override get Tasks(): { info: InfoLabel; component: TaskType<any>; }[] {
        return [
            {
                info:{
                    title: "Завдання -1",
                    description: "Задано три числа. Якщо всі вони додатні - знайти їх суму, від’ємні -"
                    +"добуток, якщо два від’ємних - середнє арифметичне модулів, два"
                    +"додатних - середнє геометричне модулів."
                },
                component: Lw1Task1Component
            }
        ]
    }

}