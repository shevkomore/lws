import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lw2selector',
  templateUrl: './lw2selector.component.html',
  styleUrls: ['./lw2selector.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class Lw2selectorComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
