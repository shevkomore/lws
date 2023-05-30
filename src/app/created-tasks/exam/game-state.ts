import { DiceState } from "./dice-state"
import { RoundState } from "./round-state"

export interface GameState{
    state: GameStates
    winner?: number
    bestMoves: DiceState[]
    history: RoundState[]
}
export enum GameStates{
    ONGOING,
    FINISHED,
    STOPPED,
    MISSING
}