import { DiceState } from "./dice-state"
import { RoundState } from "./round-state"

export interface GameState{
    state: GameStates
    history: RoundState[]
}
export enum GameStates{
    ONGOING,
    FINISHED,
    STOPPED,
    MISSING
}