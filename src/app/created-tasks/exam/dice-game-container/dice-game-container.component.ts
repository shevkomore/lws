import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiceState } from '../dice-state';
import { RoundState } from '../round-state';
import { DiceGameManagementService } from '../dice-game-management.service';
import { GameState, GameStates } from '../game-state';

@Component({
  selector: 'app-dice-game-container',
  templateUrl: './dice-game-container.component.html',
  styleUrls: ['./dice-game-container.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class DiceGameContainerComponent  {

  gameSetupForm: FormGroup
  currentRound!: RoundState
  roundsList: RoundState[] = []
  isGameSet: boolean = false
  displayEndScreen: boolean = false
  gameState?: GameState;

  constructor(
    private formBuilder: FormBuilder,
    private gameManager: DiceGameManagementService
  ) {
    this.gameSetupForm = this.formBuilder.group({
      numRounds: ['4',[Validators.min(4), Validators.max(12)]]
    })
   }
   startGame(){
      this.gameManager.createGame(2, this.gameSetupForm.get('numRounds')?.value)
      this.isGameSet = true
      this.gameState = this.gameManager.gameState()
   }
   async nextRoll(){
    this.currentRound = await this.gameManager.nextRoll()
    this.roundsList.push(this.currentRound)
    this.gameState = this.gameManager.gameState()
   }
   finishGame(){
    this.gameManager.finishGame()
    this.gameState = this.gameManager.gameState()
   }
   isGameStarted(){
    return this.gameState && this.gameState.state != GameStates.MISSING
   }
   isGameOngoing(){
    return this.gameState?.state == GameStates.ONGOING
   }
   isGameFinished(){
    return this.gameState?.state == GameStates.FINISHED
   }
}
