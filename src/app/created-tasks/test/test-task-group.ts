import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskType } from "src/app/task-groups/task";
import { TaskGroup } from "src/app/task-groups/task-group";
import { TestTaskComponent } from "./test-task/test-task.component";

export class TestTaskGroup extends TaskGroup{
    override get Tasks(): { info: InfoLabel; component: TaskType<any>; }[] {
        return [
            {
                info: {
                    title: "TestComponent1",
                    description: "Seeing if this works..."
                },
                component: TestTaskComponent
            },
            {
                info: {
                    title: "TestComponent2",
                    description: "Just a copy of a previous one"
                },
                component: TestTaskComponent
            }
        ]
    }
    public override get Label(): InfoLabel {
        return {
            title: "Test1",
            description: "checking if everything works correctly!"
        }
    }
    
}