import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiceState } from '../dice-state';
import { RoundState } from '../round-state';
import { DiceGameManagementService } from '../dice-game-management.service';
import { GameState, GameStates } from '../game-state';

import { Task } from "src/app/task-groups/task"
import { ExamTaskGroup } from '../exam-task-group';

@Component({
  selector: 'app-dice-game-container',
  templateUrl: './dice-game-container.component.html',
  styleUrls: ['./dice-game-container.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class DiceGameContainerComponent extends Task<ExamTaskGroup> {

  gameSetupForm: FormGroup
  currentRound!: RoundState
  roundsList: RoundState[] = []
  isGameSet: boolean = false
  displayEndScreen: boolean = false
  gameState?: GameState;

  isGameStarted:boolean = false
  isGameOngoing: boolean = false
  isGameFinished: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private gameManager: DiceGameManagementService
  ) {
    super()
    this.gameSetupForm = this.formBuilder.group({
      numRounds: ['4',[Validators.min(4), Validators.max(12)]]
    })
   }
   startGame(){
      this.gameManager.createGame(2, this.gameSetupForm.get('numRounds')?.value)
      this.isGameSet = true
      this.gameState = this.gameManager.gameState()
      this.currentRound = {
        dicePerPlayer: [{
          dice: [0,0]
        },{
          dice: [0,0]
        }]
      }
      this.isGameStarted = this.gameState && this.gameState.state != GameStates.MISSING
      this.isGameOngoing = this.gameState?.state == GameStates.ONGOING
   }
   async nextRoll(){
    this.currentRound = await this.gameManager.nextRoll()
    this.roundsList.push(this.currentRound)
    this.gameState = this.gameManager.gameState()
    this.isGameStarted = this.gameState && this.gameState.state != GameStates.MISSING
    this.isGameOngoing = this.gameState?.state == GameStates.ONGOING
    this.isGameFinished = this.gameState?.state == GameStates.FINISHED
   }
   finishGame(){
    this.gameManager.finishGame()
    this.gameState = this.gameManager.gameState()
    this.displayEndScreen = true;
   }

   getWinner(){
    return this.gameManager.getWinner()
   }
   getBestMoves(i:number){
    return this.gameManager.getBestMoves()[i].dice.join("+")
   }
   getDiceTotal(round:RoundState , i:number){
    return round.dicePerPlayer[i].dice.reduce((a,b)=>a+b)
   }
}
