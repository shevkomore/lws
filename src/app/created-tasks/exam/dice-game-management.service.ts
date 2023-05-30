import { Injectable } from '@angular/core';
import { RoundState } from './round-state';
import { GameState, GameStates } from './game-state';
import { DiceState } from './dice-state';
import { ExamTaskGroup } from './exam-task-group';

@Injectable({
  providedIn: 'root'
})
export class DiceGameManagementService {

  private game?: GameState
  maxRounds: number = 0
  numPlayers: number = 0
  constructor() {
   }
  createGame(numPlayers: number, numRounds: number){
    this.game = {
      state:GameStates.ONGOING,
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
    let rolls = []
    for(let i = 0; i < this.numPlayers; ++i)
      rolls.push( {
      dice:new Array<number>(2).fill(0).map(() => Math.ceil(Math.random()*6))
    })

    let round = {
      dicePerPlayer: rolls
    }
    this.game?.history.push(round)
    if(this.game!.history.length >= this.maxRounds)
      this.game!.state = GameStates.FINISHED
    return round
  }
  finishGame(){
    if(!this.game) this.createGame(1,1)
    this.game!.state = GameStates.FINISHED
  }
  getWinner(){
    let totals = this.getTotals()
    let max = totals.reduce(Compare);
    return totals.findIndex(o => o == max)
  }
  getTotals(){
    let res = new Array(this.numPlayers).fill(0)
    this.game?.history.forEach(v => v.dicePerPlayer.forEach((o,i) => res[i]+=o.dice.reduce(Sum)))
    return res
  }
  getBestMoves(){
    let plays_per_player = new Array<Array<DiceState>>(this.numPlayers).fill([]).map(()=>new Array<DiceState>())
    this.game?.history.forEach(v => v.dicePerPlayer.forEach((o,i) => plays_per_player[i].push(o)))
    let res = plays_per_player.map(v => v.reduce((best, next) => best.dice.reduce(Sum) > next.dice.reduce(Sum)?best:next))
    return res
  }
}
function Sum(a:number, b:number):number{
  return a+b
}
function Compare(a?: number, b?:number):number{
  return Math.max(a??0, b??0)
}