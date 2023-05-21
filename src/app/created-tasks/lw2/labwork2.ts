import { InfoLabel } from "src/app/task-groups/info-label";
import { TaskType } from "src/app/task-groups/task";
import { TaskGroup } from "src/app/task-groups/task-group";
import { Lw2selectorComponent } from "./lw2selector/lw2selector.component";
import { UnaryFunction } from "rxjs";
import { Coordinate } from "./coordinate";
import { Lw2graphComponent } from "./lw2graph/lw2graph.component";

export class Labwork2 extends TaskGroup{
    public override get Label(): InfoLabel {
        return {
            title: "Лабораторна робота №2",
            description: "Інтеграція у проект Ionic додаткових модулів"
        }
    }
    override get Tasks(): { info: InfoLabel; component: TaskType<any>; }[] {
        return [
            {
                info:{
                    title: "Налаштування",
                    description: "<h3>Завдання:</h3> "
                    +"<p>Створити додаток для табулювання і виведення на екран значення функції, також побудувати графік функції:"
                    +'<img src="assets/lw2_general_function.png"></img>'
                    +"<h3>Компоненти:</h3>"
                },
                component: Lw2selectorComponent
            },
            {
                info:{
                    title: "Отриманий граф",
                    description: "Граф отримано з трьох функцій, між якими переходимо на вказаних позиціях."
                },
                component: Lw2graphComponent
            }
        ]
    }
    //Setup data for graph (#26)
    get graphMin(): number {return -4.6}
    get graphMax(): number {return 29.9}
    private graphStep: number = 0.3
    presetGraphs: Coordinate[][] = this.pregenerateGraphs([
        (x) => Math.pow(x, 5) / Math.tan(2 * x * x * x),
        (x) => Math.pow(Math.pow(x, 4) + 3, 1/5),
        (x) => Math.pow(Math.abs(Math.pow(Math.sin(x), 2) + 1), 2 * x)
    ])

    constructor(){
        super();
        this.updateOutputGraph([0])
    }

    //Graph-related methods
    pregenerateGraphs(formulas: UnaryFunction<number,number>[]){
        let res: Coordinate[][] = []
        for(let i = 0; i < formulas.length; ++i)
            res[i] = []
        for(let x = this.graphMin; x <= this.graphMax; x += this.graphStep)
            for(let i = 0; i < formulas.length; ++i)
                res[i][res[i].length] = {x:x, y:formulas[i](x)}
        return res
    }

    outputGraph:Coordinate[] = []
    updateOutputGraph(transitions:number[]){
        transitions.sort()
        this.presetGraphs.forEach(a => a.sort(v => v.x))
        this.outputGraph = []
        console.log(this.presetGraphs)

        let last_graph_index = this.presetGraphs.length - 1
        let graph_index = 0
        //for each value of x 
        for(let i = 0; i < this.presetGraphs[graph_index].length; ++i){
            //while there are any more transitions
            while(graph_index < transitions.length
                //and any more presetGraphs
                && graph_index < last_graph_index
                //AND we reach transitions
                && transitions[graph_index] < this.presetGraphs[graph_index][i].x){
                    //move to next graph
                    graph_index += 1
                    //check if we can go any further
                    if(i >= this.presetGraphs[graph_index].length)
                        //(in case of reaching an end of current graph we want to stop immediately)
                        return
                }
            //get current graph's coordinate
            this.outputGraph.push(this.presetGraphs[graph_index][i])
        }
    }
}