import { DiceState } from "./dice-state";

export interface RoundState{
    playerDice: DiceState[]
    winningPlayer: number
}