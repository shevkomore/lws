import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskGroup } from "src/app/task-groups/task-group";
import { DiceGameContainerComponent } from "./dice-game-container/dice-game-container.component";

export class ExamTaskGroup extends TaskGroup{
    public override get Label(): InfoLabel {
        return {
            title: "Завдання з заліку",
            description: "Гра в кості"
        }
    }
    override get Tasks() {
        return [
            {
                info:{
                    title:"Гра в кості",
                    description: "Після натиснення кнопки \"Грати\" буде відкрито нову гру. "
                    + "Ваша мета - отримати більше балів. Натисніть \"Кинути\" в свій хід, щоб зробити кидок. "
                    + "Зправа показано всі попередні кидки. Після вказаної кількості раундів відобразиться екран з статистикою."
                },
                component: DiceGameContainerComponent
            }
        ]
    }
}
