import { Injectable } from '@angular/core';
import { RoundState } from './round-state';
import { GameState, GameStates } from './game-state';
import { DiceState } from './dice-state';

@Injectable({
  providedIn: 'root'
})
export class DiceGameManagementService {

  private game?: GameState
  maxRounds: number = 0
  numPlayers: number = 0
  constructor() { }
  createGame(numPlayers: number, numRounds: number){
    this.game = {
      state:GameStates.ONGOING,
      bestMoves: new Array<DiceState>(numPlayers),
      history: []
    }
    this.maxRounds = numRounds
    this.numPlayers = numPlayers
  }
  gameState(): GameState{
    if(!this.game) this.createGame(1,1)
    return this.game!
  }
  async nextRoll(): Promise<RoundState>{
    let rolls = new Array<DiceState>(this.numPlayers).map<DiceState>(() => { return {
      dice:new Array<number>(2).map(() => Math.ceil(Math.random()*6)),
      total:0
    }})
    rolls.forEach(v => v.total = v.dice.reduce((sum, v) => sum + v))

    let round = {
      playerDice: rolls,
      winningPlayer: 0
    }
    this.game?.history.push(round)
    let totals = this.getTotals()
    let max = totals.reduce((h, v) => Math.max(h??0, v??0))
    round.winningPlayer = totals.findIndex(o => o == max)
    if(this.game!.history.length >= this.maxRounds)
      this.game!.state = GameStates.FINISHED
    return round
  }
  finishGame(){
    if(!this.game) this.createGame(1,1)
    this.game!.state = GameStates.FINISHED
    this.game!.winner = this.game!.history[this.game!.history.length-1].winningPlayer
  }
  getTotals(){
    let res = []
    for(let i = 0; i < this.numPlayers; ++i)
      res.push(this.game?.history
        .map(v => v.playerDice[i].total)
        .reduce((sum, v) => sum + v))
    return res
  }
}
