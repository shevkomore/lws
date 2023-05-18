import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskGroupComponent } from './task-group/task-group.component';
import { ComponentOutletInjectorModule, DynamicIoModule } from 'ng-dynamic-component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [TaskGroupComponent],
  imports: [
    IonicModule,
    CommonModule,
    ComponentOutletInjectorModule,
    // I gave up looking for a way to implement this, so let's be smart and use an existing solution
    DynamicIoModule
  ],
  exports: [TaskGroupComponent]
})
export class TaskGroupsModule { }
