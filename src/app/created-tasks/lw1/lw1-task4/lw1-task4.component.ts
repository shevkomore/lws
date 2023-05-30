import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { Task } from 'src/app/task-groups/task'
import { Labwork1 } from '../labwork1';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-lw1-task4',
  templateUrl: './lw1-task4.component.html',
  styleUrls: ['./lw1-task4.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class Lw1Task4Component extends Task<Labwork1> implements OnInit {
  isModalOpen: boolean = false
  numbers: NumberItem[] = []
  
  moduleRegistry: Record<number, NumberItem> = {}

  constructor() {
    super()
   }

  setModal(to: boolean){
    this.isModalOpen = to
  }

  ngOnInit(){
      for(let i = 0; i < 100; ++i){
        let item = {value: Math.floor(Math.random()* 200)-100, style: ''}
        this.getStyleFromRegistry(item)
        this.numbers.push(item)
      }
        
  }

  async onIonInfinite(data:Event){
    let len = this.numbers.length
    for(let i = 0; i < 100; ++i){
      let item = {value: Math.floor(Math.random()* len * 2)-len, style: ''}
      this.getStyleFromRegistry(item)
      this.numbers.push(item)
    }
    (data as InfiniteScrollCustomEvent).target.complete()
  }

  getStyleFromRegistry(item: NumberItem){
    let num = Math.abs(item.value)
    let res = this.moduleRegistry[num]
    if(res){
      if(res.style == '')
        res.style = this.generateRandomGradientStyleTemplate()
      item.style = res.style
    }
    this.moduleRegistry[num] = item
  }

  generateRandomGradientStyleTemplate(){
    let angle = Math.floor(Math.random() *3)*45
    let width = Math.random() *0.1 + 0.4
    let scale = Math.random() *3
    let color = {
      red: Math.floor(Math.random() *125)+125,
      green: Math.floor(Math.random() *125)+125,
      blue: Math.floor(Math.random() *125)+125
    }
    return GenerateGradientStyleTemplate(angle,color,width,scale)
  }

}

interface NumberItem{
  value: number,
  style: string
}
interface Color{
  red:number,
  green:number,
  blue:number
}
function ColorToString(value: Color){
  return 'rgb('+value.red+", "+value.green+", "+value.blue+")"
}

function GenerateGradientStyleTemplate(angle: number, color: Color, width: number, scale: number = 1){
  return "repeating-linear-gradient("+angle
  +"deg, rgba(0,0,0,0), "+ColorToString(color)
  +" "+(width * scale)
  +"em, "+ColorToString(color)
  +" "+((1 - width) * scale)
  +"em, rgba(0,0,0,0) "+scale
  +"em)"
}