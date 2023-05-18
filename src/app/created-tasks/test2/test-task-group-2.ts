import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskType } from "src/app/task-groups/task";
import { TaskGroup } from "src/app/task-groups/task-group";
import { TestComponent2Component } from "./test-component2/test-component2.component";

export class TestTaskGroup2 extends TaskGroup{
    public override get Label(): InfoLabel {
        return {
            title: "Test2",
            description: "Testing the list functionality by adding the second option"
        }
    }
    override get Tasks(): { info: InfoLabel; component: TaskType<any>; }[] {
        return [
            {
                info: {
                    title: "InfoComponent",
                    description: "A component that gets data from core, to check if that's working too"
                },
                component: TestComponent2Component
            }
        ]
    }

    private counter:number = 0
    get Update(){
        return ++this.counter
    }
    
}